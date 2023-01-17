const jwtHelper = require('../../helper/jwt');
const redisHelper = require('../../helper/redis');

module.exports = async (req, res) => {
    const payload = req.auth.payload;
    const refresh_token = req.auth.current_refresh_token;

    //Check userId (payload.data is userId)
    if(!payload.data) {
        return res.json({
            status: 401,
            error: "Invalid Paramerter"
        })
    }

    // Create new jwt token
    let dataToken = await jwtHelper.generateDataToken(payload);
    dataToken.refresh_token = refresh_token;

    //Get old access token and remove it
    const oldAccessToken = await redisHelper.getSingleRedis(refresh_token);

    //clear both access and refresh token
    await Promise.all([
        redisHelper.removeSingleRedis(oldAccessToken),
        redisHelper.removeSingleRedis(refresh_token),
    ])

    //Create new redis
    redisHelper.generateRedis(dataToken);

    res.status(200).json({
        status: true,
        message: 'Relogin successfully',
        data: dataToken,
    })
}
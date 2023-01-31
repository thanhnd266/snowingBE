const redisHelper = require('../../helper/redis');

module.exports = async (req, res) => {
    const { token } = req.user;

    //get refresh_token
    const refresh_token = await redisHelper.getSingleRedis(token);

    //clear both token
    await Promise.all([
        redisHelper.removeSingleRedis(token),
        redisHelper.removeSingleRedis(refresh_token),
    ]);

    return res.status(200).json({
        status: true,
        message: 'Logout successfully',
    })
}
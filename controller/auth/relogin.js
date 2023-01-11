const jwtHelper = require('../../helper/jwt');
const redisHelper = require('../../helper/redis');

module.exports = async (req, res) => {
    console.log('Vao day')
    console.log(req.auth)

    const payload = req.auth.payload;
    const refresh_token = req.auth.refresh_token;

    console.log(payload);

    if(!payload.userid) {
        return res.json({
            status: 401,
            error: "Invalid Paramerter"
        })
    }

}
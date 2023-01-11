const { verifyToken } = require("../../helper/jwt");
const { verifyRedis } = require("../../helper/redis");


const authenticate = async (req, res, next) => {
    const { authorization } = req.headers;

    console.log(authorization)

    // return next();
}

const verifyRefreshToken = async (req, res, next) => {
    const { refreshToken } = req.body;

    if(!refreshToken) {
        return res.json({
            status: 401,
            error: "Invalid Param"
        })
    }

    try {

        const is_verified = await verifyRedis(refreshToken);
        if(!is_verified) {
            return res.json({
                status: 401,
                error: "Refresh Token Expired",
            })
        }

        //check with jwt
        const payload = await verifyToken(refreshToken);

        req.auth = {};

        req.auth.payload = payload;
        req.auth.current_refresh_token = refreshToken;

        return next();
    } catch(err) {
        return res.json({
            status: 401,
            error: "Refresh Token Expired",
        })
    }
};

module.exports = { authenticate, verifyRefreshToken }
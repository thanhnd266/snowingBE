const { verifyToken } = require("../../helper/jwt");
const { verifyRedis } = require("../../helper/redis");


const authenticate = async (req, res, next) => {
    const { authorization } = req.headers;

    if(!authorization || !authorization.startsWith("Bearer")) {
        return res.json({
            status: 401,
            error: "access_token_expired",
        })
    };

    const token = authorization.split(' ')[1];

    try {
        //check if it exists in redis
        const is_verified = await verifyRedis(token);

        if(!is_verified) {
            return res.json({
                status: 401,
                error: "access_token_expired",
            });
        };

        //check verify with jwt
        const payload = await verifyToken(token, 'access');

        req.user = {
            userId: payload.data,
            token,
        }

        return next();

    } catch(err) {
        return res.json({
            hello: 'Voa dya nay',
            status: 401,
            error: "access_token_expired"
        })
    }
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
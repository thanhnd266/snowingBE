const { verifyToken } = require("../../helper/jwt");
const { verifyRedis } = require("../../helper/redis");


const authenticate = async (req, res, next) => {
    const { authorization } = req.headers;

    if(!authorization || !authorization.startsWith("Bearer")) {
        return res.status(401).json({
            status: 401,
            error_message: "access_token_expired",
        })
    };

    const token = authorization.split(' ')[1];

    try {
        //check if it exists in redis
        const is_verified = await verifyRedis(token);

        if(!is_verified) {
            return res.status(401).json({
                status: 401,
                error_message: "access_token_expired",
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
        return res.status(401).json({
            status: 401,
            error_message: "access_token_expired"
        })
    }
}

const verifyRefreshToken = async (req, res, next) => {
    const { refresh_token } = req.body;

    console.log(refresh_token);

    if(!refresh_token) {
        return res.status(401).json({
            status: 401,
            error_message: "Invalid Param"
        })
    }

    try {

        const is_verified = await verifyRedis(refresh_token);
        if(!is_verified) {
            return res.status(401).json({
                status: 401,
                error_message: "Refresh Token Expired",
            })
        }

        //check with jwt
        const payload = await verifyToken(refresh_token);

        req.auth = {};

        req.auth.payload = payload;
        req.auth.current_refresh_token = refresh_token;

        return next();
    } catch(err) {
        return res.status(401).json({
            status: 401,
            error_message: "Refresh Token Expired",
        })
    }
};

module.exports = { authenticate, verifyRefreshToken }
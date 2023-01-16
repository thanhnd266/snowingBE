const jwt = require('jsonwebtoken');

const accessTokenLife = parseInt(process.env.ACCESS_TOKEN_LIFE);
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
const refreshTokenLife = parseInt(process.env.REFRESH_TOKEN_LIFE);
const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET;

const generateToken = (payload, secretSignature, tokenLife) => {
    return jwt.sign(
        {data: payload },
        secretSignature,
        {
            algorithm: 'HS256',
            expiresIn: tokenLife,
        }
    );
}

const generateDataToken = async (payload) => {
    const generate = await Promise.all([
        generateToken(payload, accessTokenSecret, accessTokenLife),
        generateToken(payload, refreshTokenSecret, refreshTokenLife),
    ]);

    return {
        access_token: generate[0],
        refresh_token: generate[1],
        expired_time: (Date.now() + (accessTokenLife*1000))
    }
};

const verifyToken = (token, type) => {
    let secretKey = (type === 'access') ? accessTokenSecret : refreshTokenSecret;
    return jwt.verify(token, secretKey);
};

module.exports = {
    generateDataToken,
    verifyToken,
}
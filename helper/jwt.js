const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET;
const accessTokenLife = process.env.ACCESS_TOKEN_LIFE;
const refreshTokenLife = process.env.REFRESH_TOKEN_LIFE;

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
        generateToken(payload, jwtSecret, accessTokenLife),
        generateToken(payload, jwtSecret, refreshTokenLife),
    ]);

    return {
        access_token: generate[0],
        refresh_token: generate[1],
        expired_time: (Date.now() + (accessTokenLife*1000))
    }
};

const verifyToken = (token) => {
    return jwt.verify(token, jwtSecret);
};

module.exports = {
    generateDataToken,
    verifyToken,
}
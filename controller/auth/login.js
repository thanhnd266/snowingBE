const { isValidEmail } = require("../../helper/data_type");
const { generateDataToken } = require("../../helper/jwt");
const { comparePassword } = require("../../helper/hashPassword");
const UserModel = require("../../model/User");
const redisHelper = require('../../helper/redis');

module.exports = async (req, res) => {
    let { email, password } = req.body;

    if(!email || !isValidEmail(email)) {
        return res.json({
            status: 400,
            message: 'Email is incorrect'
        });
    };

    if(!password) {
        return res.json({
            status: 400,
            message: 'Password is incorrect'
        });
    };

    email = email.trim();
    password = password.trim();

    const userLogin = await UserModel.findOne({ email });

    if(userLogin) {
        if(comparePassword(password, userLogin.password)) {
            //create jwt token
            let token = await generateDataToken(userLogin._id.toString());

            //Create Redis
            redisHelper.generateRedis(token);

            return res.status(200).json({
                status: true,
                message: 'Login successfully',
                data: {
                    status: 200,
                    data: userLogin,
                    ...token,
                }
            });
        } else {
            return res.json({
                status: 400,
                message: 'Password is incorrect',
            });
        }
    } else {
        return res.json({
            status: 400,
            message: 'User not found'
        });
    }
}
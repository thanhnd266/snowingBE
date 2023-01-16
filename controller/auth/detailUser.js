const UserModel = require('../../model/User');

module.exports = async (req, res) => {

    const { userId } = req.user;

    if(!userId) {
        return res.json({
            status: 401,
            message: 'You need to login',
        })
    };

    let findUser = await UserModel.findOne({ _id: userId });
    if(!findUser) res.json({ status: 401, message: 'User not found' });

    return res.json({
        status: 200,
        message: 'Get user info successfully',
        data: findUser,
    })

}
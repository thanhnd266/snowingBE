const UserModel = require('../../model/User');

module.exports = async (req, res) => {
    const { userId } = req.user._id;
    if(!userId) {
        return res.json({
            status: 401,
            message: 'Invalid Parameter',
        })
    }

    let findUser = await UserModel.findOne({ _id: userId });
    if(!findUser) res.json({ status: 401, message: 'Invalid Parameter' });

    return res.status(200).json({
        status: true,
        message: 'Get user info successfully',
        data: findUser,
    })

}
const User = require("../../model/User");


const deleteUser = async (req, res) => {
    const { _id } = req.body;

    if(_id) {
        try {

            await User.deleteOne({ _id });
            return res.status(200).json({
                message: 'User deleted successfully',
                status: 200,
            })
    
        } catch(err) {
            return res.status(500).json({
                message: 'Something went wrong',
                error: err.message,
                status: 500,
            })
        }
    }
}

module.exports = {
    deleteUser,
}
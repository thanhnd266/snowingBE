const User = require("../../model/User");

const editUser = async (req, res) => {
    const { _id, username, email, age, description, company } = req.body;

    const query = {
        username,
        email,
        age,
        description,
        company,
    }
    
    try {

        const isExistUser = await User.findOne({ username });
        const isExistEmail = await User.findOne({ email });

        if(isExistUser) {
            return res.status(400).json({
                message: 'Username already exists',
                status: 400,
            })
        }

        if(isExistEmail) {
            return res.status(400).json({
                message: 'Email already exists',
                status: 400,
            })
        }

        const user = await User.findOneAndUpdate({ _id }, query, { new: true });

        if(user) {
            return res.status(200).json({
                message: 'Edit user successfully',
                status: 200,
                user
            })
        }
        
        return res.status(400).json({
            message: 'Edit user failure',
            error: err.message,
            status: 400
        })

    } catch(err) {
        return res.status(500).json({
            message: 'Something went wrong',
            error: err.message,
            status: 500
        })
    }
}

module.exports = { editUser }
const UserSchema = require('../../model/User');

const addWorkout = async (req, res) => {

    const { userId, workout } = req.body;

    try {
        const findUser = await UserSchema.findOne({ _id: userId });

        if(!findUser) {
            return res.json({
                message: 'Can not find user',
                status: 400
            })
        }

        data = {
            findUser,
            workout: [
                ...findUser.workout,
                ...workout,
            ],
        };

        const user = await UserSchema.findOneAndUpdate({ _id: userId }, data, { new: true });

        if(user) {
            return res.status(200).json({
                message: 'Add new workout successfully',
                status: 200,
                data: user
            })
        }

        return res.status(400).json({
            message: 'Fail to add workout to current user',
            status: 400
        })

    } catch(err) {
        return res.json({
            message: 'Something went wrong',
            error: err.message,
            status: 500
        })
    }
};

module.exports = { addWorkout }
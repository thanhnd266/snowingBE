const { default: mongoose } = require('mongoose');
const UserSchema = require('../../model/User');

const removeWorkout = async (req, res) => {
    const { userId, workoutId } = req.body;

    try {
        let newWorkout = [];
        const findUser = await UserSchema.findOne({ _id: userId });
        if(!findUser) {
            return res.status(400).json({ error: 'User not found' });
        }

        findUser.workout.forEach(item => {
            if(!item._id.equals(workoutId)) {
                newWorkout.push(item);
            }
        });

        let updatedUser = await UserSchema.findOneAndReplace({ _id: userId }, {
            ...findUser._doc,
            workout: [...newWorkout],
        },{ new: true });

        res.status(200).json({
            message: 'Remove workout successfully',
            status: 200,
            data: updatedUser,
        });


    } catch(err) {
        res.status(500).json({
            error: 'Something went wrong',
            message: err
        })
    }
}

module.exports = { removeWorkout }
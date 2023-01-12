const mongoose = require('mongoose');
const { workoutSchema } = require('./Workout');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 3,
        max: 20,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        min: 3,
        max: 50,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 6,
    },
    workout: {
        type: [workoutSchema],
        default: []
    },
    company: {
        name: {
            type: String,
        },
        email: {
            type: String,
        },
    },
    age: {
        type: Number,
    },
    description: {
        type: String,
    }
}, { 
    timestamps: true,
    methods: {
        async findSimilarCompany(companyName) {
            const listUserSameCompany = await mongoose.model('Users').find({ 'company.name': companyName });
            return listUserSameCompany;
        }
    }
});

UserSchema.statics.getAllDataQuery = async function (filter, sort_by, limit, page) {
    if(!filter) {
        filter = {};
    };

    //Get total document in filter
    let total = await this.aggregate([
        { $match: filter },
        { $count: 'total' },
    ]);

    total = total.length > 0 ? total[0].total : 0;

    const pages = Math.ceil(total / limit);

    const meta = {
        pagination: {
            page,
            pages,
            limit,
            total,
        }
    }

    let skip = (page - 1) * limit

    const data = await this.aggregate([
        { $match: filter },
        { $sort: sort_by || {} },
        { $limit: skip + limit },
        { $skip: skip },
    ]);

    return { data, meta };
}

module.exports = mongoose.model('Users', UserSchema);
const { hashPassword } = require("../../helper/hashPassword");
const User = require("../../model/User");

const createUser = async (req, res) => {
    const { username, email, password, company, age, description } = req.body;

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

        if(!isExistUser && !isExistEmail) {
            const user = await User.create({
                username,
                email,
                password: hashPassword(password),
                age,
                company,
                description,
            });

            if(user.company.name) {
                let sameCompany = await user.findSimilarCompany(user.company.name);

                if(sameCompany) {
                    return res.status(201).json({
                        message: 'User created successfully',
                        status: 201,
                        user,
                        sameCompany
                    });
                }
            }
            
            return res.status(201).json({
                message: 'User created successfully',
                status: 201,
                user,
            });
        }
    } catch(err) {
        res.status(400).json({
            error: err.message,
        })
    }
}

module.exports = {
    createUser,
}
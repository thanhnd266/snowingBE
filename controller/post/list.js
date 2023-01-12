const PostSchema = require('../../model/Posts');

const getListPost = async (req, res) => {
    try {

        const listPost = await PostSchema.find({});

        if(listPost) {
            return res.status(200).json({
                message: 'Get list posts successfully',
                status: true,
                data: listPost
            })
        }

    } catch(err) {
        return res.status(400).json({
            message: 'Get list post failure',
            error: err.message,
            status: 400
        })
    }
}

module.exports = {
    getListPost,
}
const { removeSpecialCharacter, removeAccent } = require("../../helper/data_type");
const User = require("../../model/User");


const getListUsers = async (req, res) => {

    let { sort_by, filter, search, limit, page } = req.body;

    sort_by = sort_by || { created_at: 1 };
    limit = parseInt(Math.abs(limit)) || 5;
    page = parseInt(Math.abs(page)) || 1;

    try {

        if(!filter) {
            filter = {};
        }

        if(search) {
            if(typeof search !== 'string') {
                return res.status(403).json({
                    message: 'Searchterm must be string',
                    status: 403
                })
            }
            
            search = removeSpecialCharacter(search);

            if(!search) {
                return res.status(200).json({
                    status: true,
                    message: 'Get list users successfully',
                    data: []
                })
            }
            

            const search_no_accent = removeAccent(search);

            if(filter) {
                filter = {
                    $and: [
                        {
                            $or: [
                                { username: { $regex: search_no_accent, $options: 'i' } },
                                { email: { $regex: search_no_accent, $options: 'i' } },
                                { age: { $regex: search_no_accent, $options: 'i' } },
                                { description: { $regex: search_no_accent, $options: 'i' } },
                                { 'company.name': { $regex: search_no_accent, $options: 'i' } },
                                { 'company.email': { $regex: search_no_accent, $options: 'i' } },
                            ]
                        },
                        filter
                    ]
                }
            } else {
                filter = {
                    $or: [
                        { username: { $regex: search_no_accent, $options: 'i' } },
                        { email: { $regex: search_no_accent, $options: 'i' } },
                        { age: { $regex: search_no_accent, $options: 'i' } },
                        { description: { $regex: search_no_accent, $options: 'i' } },
                        { 'company.name': { $regex: search_no_accent, $options: 'i' } },
                        { 'company.email': { $regex: search_no_accent, $options: 'i' } },
                    ]
                }
            }
        }

        const list_data_query = await User.getAllDataQuery(filter, sort_by, limit, page);

        if(list_data_query) {
            return res.status(200).json({
                message: 'Get list users successfully',
                status: true,
                data: list_data_query,
            })
        }
        
    } catch(err) {
        return res.status(400).json({
            message: 'Get list users failure',
            error: err.message,
            status: 400
        })
    }
}

module.exports = {
    getListUsers,
};
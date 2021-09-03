const ApiModel = require('../models/apiModel');
const HttpException = require('../utils/HttpException.utils');

class ApiController {
    ///////////////////////
    /*           Routes */
    ///////////////////////
    getAll = async (req, res) => {
        let example = await ApiModel.find({},"table_example");
        if (!example.length) {
            return Promise.reject('example not found').catch(err => {
                throw new HttpException(404, 'example not found');
            });
        }
        res.send(licenses);
    };
    
    getOne = async (req, res) => {
        const {
            id
        } = req.body
        let user = ''
        if (id)
            user = await ApiModel.findOne({ 
                id: id},
                "table_example"
            );
        return user;
    };

}
module.exports = new ApiController;
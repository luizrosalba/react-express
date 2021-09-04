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
        res.send(example);
    };
    
    getOne = async (req, res) => {
        const {
            id
        } = req.body
        let output = ''
        if (true)
            output = await ApiModel.findOne({ 
                actor_id: 1},
                "actor"
            );
        return(output);
    };

}
module.exports = new ApiController;
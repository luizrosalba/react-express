const query = require('../db/db-connections');
const { multipleColumnSet } = require('../utils/common.utils');
/// sql commands
class ApiModel {

    find = async (params = {}, tableName) => {
        let sql = `SELECT * FROM ${tableName}`;

        if (!Object.keys(params).length) {
            return await query(sql);
        }

        const { columnSet, values } = multipleColumnSet(params)
        sql += ` WHERE ${columnSet}`;

        return await query(sql, [...values]);
    }

    findOne = async (params, tableName) => {
        const { columnSet, values } = multipleColumnSet(params)

        const sql = `SELECT * FROM ${tableName}
        WHERE ${columnSet}`;

        const result = await query(sql, [...values]);

        // return back the first row (id)
        return result[0];
    }

}

module.exports = new ApiModel;
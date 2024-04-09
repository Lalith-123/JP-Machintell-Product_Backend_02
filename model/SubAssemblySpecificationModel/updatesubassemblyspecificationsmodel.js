const con = require('../db');
const updatesubassemblyspecificationsModel = (sub_assembly_id, sub_assembly_specs, sub_assembly_unit, sub_assembly_value, id) => {
        return new Promise((resolve, reject) => {
            con.query('UPDATE sub_assembly_specifications SET sub_assembly_id = ?, sub_assembly_specs = ?, sub_assembly_unit = ?, sub_assembly_value = ? where product_id = ?', [sub_assembly_id, sub_assembly_specs, sub_assembly_unit, sub_assembly_value, id],
            (error, result) => 
            {
                if(error)
                {
                    console.log(error);
                    reject(error);
                }
                else
                {
                    console.log(result);
                    resolve(result);
                }
            }
            );
        })
}

module.exports = updatesubassemblyspecificationsModel;
const con = require('../db');
const updatesubassemblyModel = (sub_assembly_name, sub_assembly_bought_up, file_location, to_add_assemblies, id) => {
        return new Promise((resolve, reject) => {
            con.query('UPDATE sub_assemblies SET subassembly_name = ?, sub_assembly_bought_up = ?, file_location = ?, to_add_assemblies = ? WHERE sub_assembly_id = ?', [sub_assembly_name, sub_assembly_bought_up, file_location, to_add_assemblies, id],
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

module.exports = updatesubassemblyModel;
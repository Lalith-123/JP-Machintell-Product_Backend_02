const con = require('../db');
const addsubassemblyspecificationsModel = (sub_assembly_id, sub_assembly_specs, sub_assembly_unit, sub_assembly_value) => {
    return new Promise((resolve, reject)=>
    {
        con.query('INSERT INTO sub_assemblies_specifications(sub_assembly_id, sub_assembly_specifications, sub_assembly_unit, sub_assembly_value) VALUES(?, ?, ?, ?)', [sub_assembly_id, sub_assembly_specs, sub_assembly_unit, sub_assembly_value],
        (error, result) => {
            if(error)
            {
                console.log("Problem");
                reject(error);
            }
            else
            {
                console.log(result);
                resolve(result);
            }
        })
    })  
}
module.exports = addsubassemblyspecificationsModel;
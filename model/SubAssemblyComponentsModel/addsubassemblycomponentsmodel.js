const con = require('../db');
const addsubassemblycomponentsModel = (id, sub_assembly_specs, sub_assembly_unit, sub_assembly_value) => {
    return new Promise((resolve, reject)=>
    {
        con.query('INSERT INTO sub_assembly_components(sub_assembly_id, sub_assembly_specs, sub_assembly_unit, sub_assembly_value) VALUES(?, ?, ?, ?)', [id, sub_assembly_specs, sub_assembly_unit, sub_assembly_value],
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
module.exports = addsubassemblycomponentsModel;
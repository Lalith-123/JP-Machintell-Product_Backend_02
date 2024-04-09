const con = require('../db');
const addsubassemblycomponentsModel = (Sub_assembly_id, item_name, bought_up, comp_file_location) => {
    return new Promise((resolve, reject)=>
    {
        con.query('INSERT INTO sub_assembly_specifications(sub_assembly_id, item_name, bought_up, comp_file_location) VALUES(?, ?, ?, ?)', [sub_assembly_id, item_name, bought_up, comp_file_location],
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
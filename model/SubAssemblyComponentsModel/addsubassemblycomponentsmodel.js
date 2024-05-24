const con = require('../db');
const addsubassemblycomponentsModel = (item_name, sub_assembly_id,  bought_up, comp_file_location) => {
    return new Promise((resolve, reject)=>
    {
        con.query('INSERT INTO sub_assembly_components(item_name, parent_id, bought_up, comp_file_location) VALUES(?, ?, ?, ?)', [ item_name, sub_assembly_id, bought_up, comp_file_location],
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
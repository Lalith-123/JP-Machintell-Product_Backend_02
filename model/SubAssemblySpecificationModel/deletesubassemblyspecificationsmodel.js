const con = require('../db');
const deletesubassemblyspecificationsModel = (id) => 
{
    return new Promise((resolve, reject)=>{
        con.query("DELETE FROM sub_assemblies_specifications WHERE sub_assembly_id = ?", [id], 
        (error, result) => {
            if (error) {
                console.error(error);
                reject(error);
            }
            else 
            {
                console.log(result);
                resolve(result);
            }
        }
        )
    })
}

module.exports = deletesubassemblyspecificationsModel;
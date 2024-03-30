const con = require('../db');
const deletesubassemblysecfnModel = (id) => 
{
    return new Promise((resolve, reject)=>{
        con.query("DELETE FROM subsecfn WHERE product_id = ?", [id], 
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

module.exports = deletesubassemblysecfnModel;
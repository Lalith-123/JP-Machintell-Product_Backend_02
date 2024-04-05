const con = require('../db');
const deletesubassemblysecfnModel = (id) => 
{
    return new Promise((resolve, reject)=>{
        con.query("DELETE FROM sub_sec_functions WHERE product_id = ?", [id], 
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
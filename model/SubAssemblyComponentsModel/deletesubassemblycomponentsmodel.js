const con = require('../db');
const deletesubassemblycomponentsModel = (id) => 
{
    return new Promise((resolve, reject)=>{
        con.query("DELETE FROM subassembly_components WHERE product_id = ?", [id], 
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

module.exports = deletesubassemblycomponentsModel;
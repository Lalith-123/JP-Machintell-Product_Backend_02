const con = require('../db');
const deleteProductSpecsModel = (id) => 
{
    return new Promise((resolve, reject)=>{
        con.query("DELETE FROM product_specifications WHERE product_specs_id = ?", [id], 
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

module.exports = deleteProductSpecsModel;
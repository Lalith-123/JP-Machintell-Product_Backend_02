const con = require('../db');
const addProductsecondaryfnModel = (id, product_sec_fn, p_sec_fn_id) => {
    return new Promise((resolve, reject) => {
        con.query("INSERT INTO product_secondary_functions(product_id, product_sec_fn, p_sec_fn_id) VALUES(?, ?, ?)", 
        [id, product_sec_fn, p_sec_fn_id],
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
        );    
    })
}
module.exports = addProductsecondaryfnModel;

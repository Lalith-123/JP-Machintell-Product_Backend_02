const con = require('../db');
const addProductModel = (product_name, product_id, File_Location) => {
    return new Promise((resolve, reject) => {
        con.query("INSERT INTO product(product_name, product_id, File_Location) VALUES(?, ?, ?)", 
        [product_name, product_id, File_Location],
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
module.exports = addProductModel;

const con = require('../db');
const addProductModel = (product_name, product_id, File_Location, product_main_function) => {
    return new Promise((resolve, reject) => {
        con.query("INSERT INTO product(product_name, product_id, File_Location, product_main_function) VALUES(?, ?, ?, ?)", 
        [product_name, product_id, File_Location, product_main_function],
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

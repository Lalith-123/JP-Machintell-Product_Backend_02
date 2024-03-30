const con = require('../db');
const viewProductsSpecsModel = (id) => {
    return new Promise((resolve, reject) => {
        con.query("SELECT * FROM product_specifications WHERE product_id= ?",[id], (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
};

module.exports = viewProductsSpecsModel;

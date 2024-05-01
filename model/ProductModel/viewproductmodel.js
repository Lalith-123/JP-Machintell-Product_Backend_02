const con = require('../db');
const viewProductsModel = (id) => {
    return new Promise((resolve, reject) => {
        con.query("SELECT * FROM product WHERE product_id= ?",[id], (error, result) => {
            if (error) {
                reject(error);
            } else {
                console.log(result);
                resolve(result);
            }
        });
    });
};

module.exports = viewProductsModel;

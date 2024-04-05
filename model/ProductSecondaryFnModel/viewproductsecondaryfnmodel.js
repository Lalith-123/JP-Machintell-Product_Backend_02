const con = require('../db');
const viewProductsecondaryfnModel = (id) => {
    return new Promise((resolve, reject) => {
        con.query("SELECT * FROM product_secondary_functions WHERE product_id= ?",[id], (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
};

module.exports = viewProductsecondaryfnModel;

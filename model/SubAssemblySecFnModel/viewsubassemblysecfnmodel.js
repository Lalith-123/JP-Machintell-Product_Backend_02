const con = require('../db');
const viewsubassemblysecfnModel = (id) => {
    return new Promise((resolve, reject) => {
        con.query("SELECT * FROM sub_sec_functions WHERE product_id= ?",[id], (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
};

module.exports = viewsubassemblysecfnModel;

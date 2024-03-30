const con = require('../db');
const viewsubassemblysecfnModel = (id) => {
    return new Promise((resolve, reject) => {
        con.query("SELECT * FROM sub_secfn WHERE product_id= ?",[id], (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
};

module.exports = viewsubassemblysecfnModel;

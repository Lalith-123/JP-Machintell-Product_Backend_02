const con = require('../db');
const viewsubassemblyModel = (id) => {
    return new Promise((resolve, reject) => {
        con.query("SELECT * FROM sub_assemblies WHERE product_id= ?",[id],(error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
};

module.exports = viewsubassemblyModel;

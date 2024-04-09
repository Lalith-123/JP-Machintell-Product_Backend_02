const con = require('../db');
const viewsubassemblyspecificationsModel = (id) => {
    return new Promise((resolve, reject) => {
        con.query("SELECT * FROM sub_assembly_specifications WHERE product_id= ?",[id], (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
};

module.exports = viewsubassemblyspecificationsModel;

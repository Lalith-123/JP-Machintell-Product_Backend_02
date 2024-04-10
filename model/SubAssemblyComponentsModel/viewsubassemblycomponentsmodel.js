const con = require('../db');
const viewsubassemblycomponentsModel = (id) => {
    return new Promise((resolve, reject) => {
        con.query("SELECT * FROM sub_assembly_components WHERE sub_assembly_id= ?",[id], (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
};

module.exports = viewsubassemblycomponentsModel;

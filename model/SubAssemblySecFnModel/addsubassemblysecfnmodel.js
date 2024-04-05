const con = require('../db');
const addsubassemblysecfnModel = (product_id, sub_secondary_functions_details) => {
    return new Promise((resolve, reject)=>
    {
        con.query('INSERT INTO sub_sec_functions(product_id, sub_secondary_functions_details) VALUES(?, ?)', [product_id, sub_secondary_functions_details],
        (error, result) => {
            if(error)
            {
                console.log("Problem");
                reject(error);
            }
            else
            {
                console.log(result);
                resolve(result);
            }
        })
    })  
}
module.exports = addsubassemblysecfnModel;
const con = require('../db');
const updatesubassemblysecfnModel = (product_id, sub_secondary_functions_details) => {
        return new Promise((resolve, reject) => {
            con.query('UPDATE sub_Sec_functions SET product_id = ?, sub_secondary_functions_details = ?', [product_id, sub_secondary_functions_details],
            (error, result) => 
            {
                if(error)
                {
                    console.log(error);
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

module.exports = updatesubassemblysecfnModel;
const con = require('../db');
const updatesubassemblysecfnModel = ( sub_secondary_functions_details, id) => {
        return new Promise((resolve, reject) => {
            con.query('UPDATE sub_Sec_functions SET sub_secondary_functions_details = ? where product_id = ?', [ sub_secondary_functions_details, id],
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
const con = require('../db');
const updateProductsecondaryfnModel = (product_sec_fn, id) => {
   return new Promise((resolve, reject) => {
       con.query("UPDATE product_secondary_functions SET product_sec_fn = ?  WHERE product_id = ?", [product_sec_fn, id], 
       (error, result) => {
           if (error) {
               console.error(error);
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

module.exports = updateProductsecondaryfnModel;
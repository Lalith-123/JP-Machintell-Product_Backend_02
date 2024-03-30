const con = require('../db');

const updateProductModel = (product_name, File_Location, product_main_function, id) => {
   return new Promise((resolve, reject) => {
       con.query("UPDATE product SET product_name = ? , File_Location = ? , product_main_function = ? WHERE product_id = ?", [product_name, File_Location, product_main_function, id], (err, result) => {
           if (err) {
               reject(err); // Reject with the error if query execution fails
           } else {
               resolve(result); // Resolve with the query result if successful
           }
       });
   });
};

module.exports = updateProductModel;

const con = require('../db');
const updateproductspecsModel = (product_specs, product_unit, product_value, id) => {
        return new Promise((resolve, reject) => {
            con.query('UPDATE product_specifications SET product_specifications = ?, product_unit = ?, product_value = ? WHERE product_id = ?', [product_specs, product_unit, product_value, id],
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

module.exports = updateproductspecsModel;
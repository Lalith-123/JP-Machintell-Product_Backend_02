const con = require('../db');

const viewProductNamesModel = (num) => {
    let number = parseInt(num);
    return new Promise((resolve, reject) => {
        if (number == 0){
            con.query("SELECT product_name, product_id, File_Location FROM product", (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    // Extract columns and format into a 2D array
                    console.log(result);
                    const formattedData = result.map(row => [row.product_name, row.product_id, row.File_Location]);
                    resolve(formattedData);
                }
            });
            
        }else{
            con.query("SELECT product_name, product_id, File_Location FROM product LIMIT ?", [number*3], (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    // Extract columns and format into a 2D array
                    const formattedData = result.map(row => [row.product_name, row.product_id, row.File_Location]);
                    resolve(formattedData);
                }
            });
        }
    });
};

module.exports = viewProductNamesModel;

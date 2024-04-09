const con = require('../db');
const updatesubassemblycomponentsModel = (item_name , bought_up, comp_file_location, id) => {
        return new Promise((resolve, reject) => {
            con.query('UPDATE sub_assembly_components SET item_name = ?, bought_up = ?, comp_file_location = ? where product_id =?', [item_name, bought_up, comp_file_location, id],
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

module.exports = updatesubassemblycomponentsModel;
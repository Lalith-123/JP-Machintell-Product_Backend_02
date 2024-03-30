const addProductModel = require('../../model/ProductModel/addproductmodel');
const addProductController = async (req,res) => 
{
    try
    {
        const {product_name, product_id, File_Location, product_main_function }= req.body
        const result = await addProductModel(product_name, product_id, File_Location, product_main_function );
        res.status(200).json({message: 'Product Added Successfully', data: result});
    }
    catch (err)
    {
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
};
module.exports = addProductController;
const updateProductModel = require('../../model/ProductModel/updateproductmodel');
const updateProductController = async(req, res) => {
    try
    {
        const {id} = req.params;
        const {product_name, File_Location, product_main_function}= req.body
        const result = await updateProductModel(product_name, File_Location, product_main_function, id);
        res.status(200).json({message: 'Product Updated Successfully', data: result});
    }
    catch (err)
    {
        console.log(err);
        res.json({error: 'Not Properly Updated. Please try again'});
    }
}
module.exports = updateProductController;


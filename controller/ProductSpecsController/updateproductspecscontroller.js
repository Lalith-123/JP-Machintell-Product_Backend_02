const updateProductspecsModel = require('../../model/ProductSpecificationsModel/updateproductspecsmodel');
const updateProductspecsController = async(req, res) => {
    try
    {
        const {id} = req.params;
        const {product_specs, product_unit, product_value}= req.body
        const result = await updateProductspecsModel(product_specs, product_unit, product_value, id);
        res.status(200).json({message: 'Product Specs Updated Successfully', data: result});
    }
    catch (err)
    {
        console.log(err);
        res.json({error: 'Not Properly Updated. Please try again'});
    }
}
module.exports = updateProductspecsController;
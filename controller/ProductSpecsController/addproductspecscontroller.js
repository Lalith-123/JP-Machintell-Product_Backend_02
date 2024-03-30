const addproductSpecsModel = require('../../model/ProductSpecificationsModel/addproductspecsmodel');
const addProductspecsController = async (req,res) => 
{
    try
    {
        const {id} = req.params;
        const {product_specs, product_unit, product_value}= req.body
        const result = await addproductSpecsModel(id, product_specs, product_unit, product_value);
        res.status(200).json({message: 'Product Specifications Added Successfully', data: result});
    }
    catch (err)
    {
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
};
module.exports = addProductspecsController;
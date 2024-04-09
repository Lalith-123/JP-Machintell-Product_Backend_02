const updateProductsecondaryfnModel = require('../../model/ProductSecondaryFnModel/updateproductsecondaryfnmodel');
const updateProductsecondaryfnController = async(req, res) => {
    try
    {
        const {id} = req.params;
        const {product_sec_fn}= req.body
        const result = await updateProductsecondaryfnModel(product_sec_fn, id);
        res.status(200).json({message: 'Product_SecondaryFn Updated Successfully', data: result});
    }
    catch (err)
    {
        console.log(err);
        res.json({error: 'Not Properly Updated. Please try again'});
    }
}
module.exports = updateProductsecondaryfnController;
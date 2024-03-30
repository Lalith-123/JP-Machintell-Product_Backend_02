const addProductsecondaryfnModel = require('../../model/ProductSecondaryFnModel/addproductsecondaryfnmodel');
const addProductsecondaryfnController = async (req,res) => 
{
    try
    {
        const {id} = req.params;
        const {product_sec_fn }= req.body
        const result = await addProductsecondaryfnModel(id, product_sec_fn);
        res.status(200).json({message: 'ProductSecondaryFn Added Successfully', data: result});
    }
    catch (err)
    {
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
};
module.exports = addProductsecondaryfnController;
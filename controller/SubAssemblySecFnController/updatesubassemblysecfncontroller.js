const updatesubassemblysecfnModel = require('../../model/SubAssemblySecFnModel/updatesubassemblysecfnmodel');
const updatesubassemblysecfnController = async(req, res) => {
    try
    {
        const {id} = req.params;
        const {product_id, sub_secondary_functions_details}= req.body
        const result = await updatesubassemblysecfnModel(product_id, sub_secondary_functions_details, id);
        res.status(200).json({message: 'sub_SecondaryFn Updated Successfully', data: result});
    }
    catch (err)
    {
        console.log(err);
        res.json({error: 'Not Properly Updated. Pleas try again'});
    }
}
module.exports = updatesubassemblysecfnController;
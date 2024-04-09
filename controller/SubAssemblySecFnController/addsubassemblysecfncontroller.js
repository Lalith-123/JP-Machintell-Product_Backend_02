const addsubassemblysecfnModel = require('../../model/subassemblysecFnModel/addsubassemblysecfnmodel');
const addsubassemblysecfnController = async (req,res) => 
{
    try
    {
        const {product_id, sub_secondary_functions_details}= req.body
        const result = await addsubassemblysecfnModel(product_id, sub_secondary_functions_details);
        res.status(200).json({message: 'Sub_SecondaryFn Added Successfully', data: result});
    }
    catch (err)
    {
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
};
module.exports = addsubassemblysecfnController;
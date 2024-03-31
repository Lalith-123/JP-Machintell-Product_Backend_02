const addsubassemblycomponentsModel = require('../../model/subassemblycomponentsModel/addsubassemblycomponentsmodel');
const addsubassemblycomponentsController = async (req,res) => 
{
    try
    {
        const {id} = req.params;
        const {sub_assembly_specs, sub_assembly_unit, sub_assembly_value}= req.body
        const result = await addsubassemblycomponentsModel(id, sub_assembly_specs, sub_assembly_unit, sub_assembly_value);
        res.status(200).json({message: 'Sub_assembly Added Successfully', data: result});
    }
    catch (err)
    {
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
};
module.exports = addsubassemblycomponentsController;
const addsubassemblyModel = require('../../model/SubAssemblyModel/addsubassemblymodel');
const addsubassemblyController = async (req,res) => 
{
    try
    {
        const {id} = req.params;
        const {sub_assembly_name, sub_assembly_id, sub_assembly_bought_up, file_location, to_add_assemblies}= req.body
        const result = await addsubassemblyModel(id, sub_assembly_name, sub_assembly_id, sub_assembly_bought_up, file_location, to_add_assemblies);
        res.status(200).json({message: 'Sub_assembly Added Successfully', data: result});
    }
    catch (err)
    {
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
};
module.exports = addsubassemblyController;
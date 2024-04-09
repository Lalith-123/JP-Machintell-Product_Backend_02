const updatesubassemblyspecificationsModel = require('../../model/SubAssemblySpecificationModel/updatesubassemblyspecificationsmodel');
const updatesubassemblyspecificationsController = async(req, res) => {
    try
    {
        const {id} = req.params;
        const {sub_assembly_id, sub_assembly_specs, sub_assembly_unit, sub_assembly_value}= req.body
        const result = await updatesubassemblyspecificationsModel(sub_assembly_id, sub_assembly_specs,sub_assembly_unit,sub_assembly_value, id);
        res.status(200).json({message: 'sub_assembly_specifications Updated Successfully', data: result});
    }
    catch (err)
    {
        console.log(err);
        res.json({error: 'Not Properly Updated. Please try again'});
    }
}
module.exports = updatesubassemblyspecificationsController;
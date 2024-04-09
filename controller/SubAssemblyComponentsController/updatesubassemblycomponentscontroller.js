const updatesubassemblycomponentsModel = require('../../model/SubAssemblyComponentsModel/updatesubassemblycomponentsmodel');
const updatesubassemblycomponentsController = async(req, res) => {
    try
    {
        const {id} = req.params;
        const {sub_assembly_id, sub_assembly_specs, sub_assembly_unit, sub_assembly_value}= req.body
        const result = await updatesubassemblycomponentsModel(sub_assembly_id, sub_assembly_specs,sub_assembly_unit,sub_assembly_value, id);
        res.status(200).json({message: 'sub_assembly_components Updated Successfully', data: result});
    }
    catch (err)
    {
        console.log(err);
        res.json({error: 'Not Properly Updated. Please try again'});
    }
}
module.exports = updatesubassemblycomponentsController;
const updatesubassemblyModel = require('../../model/SubAssemblyModel/updatesubassemblymodel');
const updatesubassemblyController = async(req, res) => {
    try
    {
        const {id} = req.params;
        const {sub_assembly_name, sub_assembly_bought_up, file_location, to_add_assemblies}= req.body
        const result = await updatesubassemblyModel(sub_assembly_name, sub_assembly_bought_up, file_location,to_add_assemblies, id);
        res.status(200).json({message: 'sub_assembly Updated Successfully', data: result});
    }
    catch (err)
    {
        console.log(err);
        res.json({error: 'Not Properly Updated. Pleas try again'});
    }
}
module.exports = updatesubassemblyController;
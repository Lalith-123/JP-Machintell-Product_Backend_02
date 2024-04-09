const updatesubassemblycomponentsModel = require('../../model/SubAssemblyComponentsModel/updatesubassemblycomponentsmodel');
const updatesubassemblycomponentsController = async(req, res) => {
    try
    {
        const {id} = req.params;
        const {item_name, bought_up, comp_file_location }= req.body
        const result = await updatesubassemblycomponentsModel(item_name, bought_up, comp_file_location, id);
        res.status(200).json({message: 'sub_assembly_components Updated Successfully', data: result});
    }
    catch (err)
    {
        console.log(err);
        res.json({error: 'Not Properly Updated. Please try again'});
    }
}
module.exports = updatesubassemblycomponentsController;
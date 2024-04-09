const addsubassemblycomponentsModel = require('../../model/SubAssemblyComponentsModel/addsubassemblycomponentsmodel');
const addsubassemblycomponentsController = async (req,res) => 
{
    try
    {
        const {id} = req.params;
        const {item_name, bought_up, sub_assembly_id, comp_file_location}= req.body
        const result = await addsubassemblyspecificationsModel(item_name, bought_up, sub_assembly_id, comp_file_location);
        res.status(200).json({message: 'Sub_assembly Added Successfully', data: result});
    }
    catch (err)
    {
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
};
module.exports = addsubassemblycomponentsController;
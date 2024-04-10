const addsubassemblycomponentsModel = require('../../model/SubAssemblyComponentsModel/addsubassemblycomponentsmodel');
const addsubassemblycomponentsController = async (req,res) => 
{
    try
    {
        const {id} = req.params;
        const {item_name, sub_assembly_id, bought_up, comp_file_location}= req.body
        const result = await addsubassemblycomponentsModel(item_name, sub_assembly_id, bought_up,  comp_file_location);
        res.status(200).json({message: 'Sub_assembly Added Successfully', data: result});
    }
    catch (err)
    {
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
};
module.exports = addsubassemblycomponentsController;
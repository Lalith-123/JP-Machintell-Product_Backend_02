const createDuplicateModel = require('../../model/CreateDuplicateModel/createduplicatemodel');
const createDuplicateController = async (req,res) => 
{
    try
    {
        const {id} = req.params;
        const result = await createDuplicateModel(id);
        res.status(200).json({message: 'Duplicate Added Successfully', data: result});
    }
    catch (err)
    {
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
};
module.exports = createDuplicateController;
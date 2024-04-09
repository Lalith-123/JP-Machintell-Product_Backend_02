
const viewsubassemblyspecificationsModel = require('../../model/SubAssemblySpecificationModel/viewsubassemblyspecificationsmodel');
const viewsubassemblyspecificationscontroller = async (req, res) => {
    try 
    {
        const {id} = req.params;
        const [result] = await viewsubassemblyspecificationsModel(id);
        res.send(result);
    }
    catch (err)
    {
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
};
module.exports = viewsubassemblyspecificationscontroller;







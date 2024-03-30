
const viewsubassemblycomponentsModel = require('../../model/SubAssemblyComponentsModel/viewsubassemblycomponentsmodel');
const viewsubassemblycomponentscontroller = async (req, res) => {
    try 
    {
        const {id} = req.params;
        const [result] = await viewsubassemblycomponentsModel(id);
        res.send(result);
    }
    catch (err)
    {
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
};
module.exports = viewsubassemblycomponentscontroller;







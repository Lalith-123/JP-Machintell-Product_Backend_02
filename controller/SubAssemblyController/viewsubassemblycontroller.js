const viewsubassemblyModel = require('../../model/SubAssemblyModel/viewsubassemblymodel');
const viewsubassemblycontroller = async (req, res) => {
    try 
    {
        const {id} = req.params;
        const [result] = await viewsubassemblyModel(id);
        res.send(result);
    }
    catch (err)
    {
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
};
module.exports = viewsubassemblycontroller;







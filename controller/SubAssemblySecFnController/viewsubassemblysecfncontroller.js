const viewsubassemblysecfnModel = require('../../model/SubAssemblySecFnModel/viewsubassemblysecfnmodel');
const viewsubassemblysecfncontroller = async (req, res) => {
    try 
    {
        const {id} = req.params;
        const [result] = await viewsubassemblysecfnModel(id);
        res.send(result);
    }
    catch (err)
    {
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
};
module.exports = viewsubassemblysecfncontroller;







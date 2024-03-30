const deletesubassemblycomponentsModel = require('../../model/SubAssemblyComponentsModel/deletesubassemblycomponentsmodel');
const DeletesubassemblycomponentsController = async (req, res) => {
    try
    {
      const {id}  = req.params;
      const result = await deletesubassemblycomponentsModel(id);
      res.status(200).json({message : 'Data  Inserted Successfully', data: result});
    }
    catch (err)
    {
        res.json({message: "OOPS Try again Later"});
    }
}
module.exports = DeletesubassemblycomponentsController;
const deletesubassemblyModel = require('../../model/SubAssemblyModel/deletesubassemblymodel');
const DeletesubassemblyController = async (req, res) => {
    try
    {
      const {id}  = req.params;
      const result = await deletesubassemblyModel(id);
      res.status(200).json({message : 'Data Deleted Successfully', data: result});
    }
    catch (err)
    {
        res.json({message: "OOPS Try again Later"});
    }
}
module.exports = DeletesubassemblyController;
const deleteSubassemblyModel = require('../../model/SubAssemblyModel/deletesubassemblymodel');
const DeleteSubassemblyController = async (req, res) => {
    try
    {
      const {id}  = req.params;
      const result = await deleteSubassemblyModel(id);
      res.status(200).json({message : 'Data  Deleted Successfully', data: result});
    }
    catch (err)
    {
        res.json({message: "OOPS Try again Later"});
    }
}
module.exports = DeleteSubassemblyController;
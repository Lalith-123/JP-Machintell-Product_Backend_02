const deletesubassemblyspecificationsModel = require('../../model/SubAssemblySpecificationModel/deletesubassemblyspecificationsmodel');
const DeletesubassemblyspecificationsController = async (req, res) => {
    try
    {
      const {id}  = req.params;
      const result = await deletesubassemblyspecificationsModel(id);
      res.status(200).json({message : 'Data  Inserted Successfully', data: result});
    }
    catch (err)
    {
        res.json({message: "OOPS Try again Later"});
    }
}
module.exports = DeletesubassemblyspecificationsController;
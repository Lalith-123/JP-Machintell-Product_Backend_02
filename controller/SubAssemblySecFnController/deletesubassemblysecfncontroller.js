const deletesubassemblysecfnModel = require('../../model/SubAssemblySecFnModel/deletesubassemblysecfnmodel');
const DeletesubassemblysecfnController = async (req, res) => {
    try
    {
      const {id}  = req.params;
      const result = await deletesubassemblysecfnModel(id);
      res.status(200).json({message : 'Data  Inserted Successfully', data: result});
    }
    catch (err)
    {
        res.json({message: "OOPS Try again Later"});
    }
}
module.exports = DeletesubassemblysecfnController;
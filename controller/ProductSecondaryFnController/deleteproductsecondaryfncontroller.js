const deleteProductsecondaryfnModel = require('../../model/ProductSecondaryFnModel/deleteproductsecondaryfnmodel');
const DeleteProductsecondaryfnController = async (req, res) => {
    try
    {
      const {id}  = req.params;
      const result = await deleteProductsecondaryfnModel(id);
      res.status(200).json({message : 'Data  Deleted Successfully', data: result});
    }
    catch (err)
    {
        res.json({message: "OOPS Try again Later"});
    }
}
module.exports = DeleteProductsecondaryfnController;
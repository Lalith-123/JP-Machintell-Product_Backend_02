const deleteProductSpecsModel = require('../../model/ProductSpecificationsModel/deleteproductspecsmodel');
const DeleteProductspecsController = async (req, res) => {
    try
    {
      const {id}  = req.params;
      const result = await deleteProductSpecsModel(id);
      res.status(200).json({message : 'Data  Deleted Successfully', data: result});
    }
    catch (err)
    {
        res.json({message: "OOPS Try again Later"});
    }
}
module.exports = DeleteProductspecsController;
const viewProductModel = require('../../model/ProductModel/viewproductmodel');
const viewproductscontroller = async (req, res) => {
    try 
    {
        const {id} = req.params;
        const [result] = await viewProductModel(id);
        res.send(result);
        console.log(id);
    }
    catch (err)
    {
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
};
module.exports = viewproductscontroller;







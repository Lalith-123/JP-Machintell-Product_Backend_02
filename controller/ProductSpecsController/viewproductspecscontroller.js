const viewProductspecsModel = require('../../model/ProductSpecificationsModel/viewproductspecsmodel');
const viewproductspecscontroller = async (req, res) => {
    try 
    {
        const {id} = req.params;
        const [result] = await viewProductspecsModel(id);
        res.send(result);
    }
    catch (err)
    {
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
};
module.exports = viewproductspecscontroller;







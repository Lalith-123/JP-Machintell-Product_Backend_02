const viewProductsTreeModel = require('../../model/ProductTreeModel/viewproducttreemodel');

const viewproductsTreeController = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await viewProductsTreeModel(id); // Ensure that viewProductsTreeModel returns an array or iterable object
        res.send(result); // Sending the result directly if it's an array
        console.log(id);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = viewproductsTreeController;

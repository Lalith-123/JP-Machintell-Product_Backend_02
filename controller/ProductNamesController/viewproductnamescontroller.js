const viewProductNamesModel = require('../../model/ProductNamesModel/viewproductnamesmodel');

const viewProductNameController = async (req, res) => {
    try {
        // Call the model function to get all product names
        const {num} = req.params;
        const productNames = await viewProductNamesModel(num);
        // Send the product names array to the client
        res.status(200).json(productNames);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = viewProductNameController;
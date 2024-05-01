const express = require('express');
const router = express.Router();
const viewProductsNameController = require('../../controller/ProductNamesController/viewproductnamescontroller');
router.get('/:num', viewProductsNameController);

module.exports = router;
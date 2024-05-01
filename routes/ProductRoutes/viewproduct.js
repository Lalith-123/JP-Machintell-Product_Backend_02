const express = require('express');
const router = express.Router();
const viewproductcontroller = require('../../controller/ProductController/viewproductscontroller');
router.get('/:id', viewproductcontroller);

module.exports = router;
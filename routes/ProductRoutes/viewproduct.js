const express = require('express');
const router = express.Router();
const viewproductcontroller = require('../../controller/ProductController/viewproductscontroller');
router.post('/:id', viewproductcontroller);

module.exports = router;
const express = require('express');
const router = express.Router();
const deleteproductcontroller = require('../../controller/ProductController/deleteproductscontroller');
router.delete('/:id', deleteproductcontroller);

module.exports = router;
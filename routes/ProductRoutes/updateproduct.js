const express = require('express');
const router = express.Router();
const updateproductscontroller = require('../../controller/ProductController/updateproductscontroller');
router.put('/:id', updateproductscontroller);

module.exports = router;
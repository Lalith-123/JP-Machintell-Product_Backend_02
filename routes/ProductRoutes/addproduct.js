const express = require('express');
const router = express.Router();
const addproductcontroller = require('../../controller/ProductController/addproductcontroller');
router.post('/', addproductcontroller);

module.exports = router;
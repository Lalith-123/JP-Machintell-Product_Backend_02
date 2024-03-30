const express = require('express');
const router = express.Router();
const addproductspecscontroller = require('../../controller/ProductSpecsController/addproductspecscontroller');
router.post('/:id', addproductspecscontroller);

module.exports = router;
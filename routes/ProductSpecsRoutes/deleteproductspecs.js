const express = require('express');
const router = express.Router();
const deleteproductspecscontroller = require('../../controller/ProductSpecsController/deleteproductspecscontroller');
router.post('/:id', deleteproductspecscontroller);

module.exports = router;
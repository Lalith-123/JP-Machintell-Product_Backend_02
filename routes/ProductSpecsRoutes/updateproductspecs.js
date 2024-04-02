const express = require('express');
const router = express.Router();
const updateproductspecscontroller = require('../../controller/ProductSpecsController/updateproductspecscontroller');
router.put('/:id', updateproductspecscontroller);

module.exports = router;
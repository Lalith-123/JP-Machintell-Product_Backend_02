const express = require('express');
const router = express.Router();
const viewproductspecscontroller = require('../../controller/ProductSpecsController/viewproductspecscontroller');
router.post('/:id', viewproductspecscontroller);

module.exports = router;
const express = require('express');
const router = express.Router();
const DeleteProductspecsController = require('../../controller/ProductSpecsController/deleteproductspecscontroller');
router.post('/:id', DeleteProductspecsController);

module.exports = router;
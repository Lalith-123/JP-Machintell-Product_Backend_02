const express = require('express');
const router = express.Router();
const addproductsecondaryfncontroller = require('../../controller/ProductSecondaryFnController/addproductsecondaryfncontroller');
router.post('/:id', addproductsecondaryfncontroller);

module.exports = router;
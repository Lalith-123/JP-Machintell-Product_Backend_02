const express = require('express');
const router = express.Router();
const deleteproductsecondaryfncontroller = require('../../controller/ProductSecondaryFnController/deleteproductsecondaryfncontroller');
router.delete('/:id', deleteproductsecondaryfncontroller);

module.exports = router;
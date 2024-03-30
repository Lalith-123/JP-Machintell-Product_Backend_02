const express = require('express');
const router = express.Router();
const updateproductsecondaryfncontroller = require('../../controller/ProductSecondaryFnController/updateproductsecondaryfncontroller');
router.put('/:id', updateproductsecondaryfncontroller);

module.exports = router;
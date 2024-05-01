const express = require('express');
const router = express.Router();
const viewproductTreecontroller = require('../../controller/ProductTreeController/viewproducttreecontroller');
router.get('/:id', viewproductTreecontroller);

module.exports = router;
const express = require('express');
const router = express.Router();
const viewsubassemblycomponentscontroller = require('../../controller/SubAssemblyComponentsController/viewsubassemblycomponentscontroller');
router.post('/:id', viewsubassemblycomponentscontroller);

module.exports = router;
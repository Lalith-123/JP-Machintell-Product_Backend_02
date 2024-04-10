const express = require('express');
const router = express.Router();
const deletesubassemblycomponentscontroller = require('../../controller/SubAssemblyComponentsController/deletesubassemblycomponentscontroller');
router.delete('/:id', deletesubassemblycomponentscontroller);

module.exports = router;
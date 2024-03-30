const express = require('express');
const router = express.Router();
const deletesubassemblycomponentscontroller = require('../../controller/SubAssemblyComponentsController/deletesubassemblycomponentscontroller');
router.post('/', deletesubassemblycomponentscontroller);

module.exports = router;
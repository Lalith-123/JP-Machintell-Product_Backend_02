const express = require('express');
const router = express.Router();
const updatesubassemblycomponentscontroller = require('../../controller/SubAssemblyComponentsController/updatesubassemblycomponentscontroller');
router.put('/:id', updatesubassemblycomponentscontroller);

module.exports = router;
const express = require('express');
const router = express.Router();
const addsubassemblycomponentscontroller = require('../../controller/SubAssemblyComponentsController/addsubassemblycomponentscontroller');
router.post('/', addsubassemblycomponentscontroller);

module.exports = router;
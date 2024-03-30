const express = require('express');
const router = express.Router();
const viewsubassemblysecfncontroller = require('../../controller/SubAssemblySecFnController/viewsubassemblysecfncontroller');
router.post('/:id', viewsubassemblysecfncontroller);

module.exports = router;
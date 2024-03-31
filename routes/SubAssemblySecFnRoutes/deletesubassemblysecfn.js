const express = require('express');
const router = express.Router();
const deletesubassemblysecfncontroller = require('../../controller/SubAssemblySecFnController/deletesubassemblysecfncontroller');
router.post('/:id', deletesubassemblysecfncontroller);

module.exports = router;
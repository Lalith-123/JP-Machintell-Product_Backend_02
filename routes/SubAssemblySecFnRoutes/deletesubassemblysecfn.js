const express = require('express');
const router = express.Router();
const deletesubassemblysecfncontroller = require('../../controller/SubAssemblySecFnController/deletesubassemblysecfncontroller');
router.delete('/:id', deletesubassemblysecfncontroller);

module.exports = router;
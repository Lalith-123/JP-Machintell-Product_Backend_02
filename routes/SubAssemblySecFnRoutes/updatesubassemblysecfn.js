const express = require('express');
const router = express.Router();
const updatesubassemblysecfncontroller = require('../../controller/SubAssemblySecFnController/updatesubassemblysecfncontroller');
router.put('/:id', updatesubassemblysecfncontroller);

module.exports = router;
const express = require('express');
const router = express.Router();
const addsubassemblysecfncontroller = require('../../controller/SubAssemblySecFnController/addsubassemblysecfncontroller');
router.post('/:id', addsubassemblysecfncontroller);

module.exports = router;
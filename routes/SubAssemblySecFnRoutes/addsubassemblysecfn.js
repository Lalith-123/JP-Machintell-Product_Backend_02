const express = require('express');
const router = express.Router();
const addsubassemblysecfncontroller = require('../../controller/SubAssemblySecFnController/addsubassemblysecfncontroller');
router.post('/', addsubassemblysecfncontroller);

module.exports = router;
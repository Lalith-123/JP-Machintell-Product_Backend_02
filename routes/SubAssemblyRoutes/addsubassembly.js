const express = require('express');
const router = express.Router();
const addsubassemblycontroller = require('../../controller/SubAssemblyController/addsubassemblycontroller');
router.post('/:id', addsubassemblycontroller);

module.exports = router;
const express = require('express');
const router = express.Router();
const viewsubassemblycontroller = require('../../controller/SubAssemblyController/viewsubassemblycontroller');
router.post('/:id', viewsubassemblycontroller);

module.exports = router;
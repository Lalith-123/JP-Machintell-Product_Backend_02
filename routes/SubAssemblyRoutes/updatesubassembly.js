const express = require('express');
const router = express.Router();
const updatesubassemblycontroller = require('../../controller/SubAssemblyController/updatesubassemblycontroller');
router.put('/:id', updatesubassemblycontroller);

module.exports = router;
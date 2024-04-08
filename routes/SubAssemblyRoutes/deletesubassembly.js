const express = require('express');
const router = express.Router();
const deletesubassemblycontroller = require('../../controller/SubAssemblyController/deletesubassemblycontroller');
router.delete('/:id', deletesubassemblycontroller);

module.exports = router;
const express = require('express');
const router = express.Router();
const deletesubassemblyspecificationscontroller = require('../../controller/SubAssemblySpecificationsController/deletesubassemblyspecificationscontroller');
router.delete('/:id', deletesubassemblyspecificationscontroller);

module.exports = router;
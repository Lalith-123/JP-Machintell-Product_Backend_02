const express = require('express');
const router = express.Router();
const deletesubassemblyspecificationscontroller = require('../../controller/SubAssemblySpecificationsController/deletesubassemblyspecificationscontroller');
router.post('/', deletesubassemblyspecificationscontroller);

module.exports = router;
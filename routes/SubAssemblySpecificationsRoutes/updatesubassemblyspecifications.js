const express = require('express');
const router = express.Router();
const updatesubassemblyspecificationscontroller = require('../../controller/SubAssemblySpecificationsController/updatesubassemblyspecificationscontroller');
router.put('/:id', updatesubassemblyspecificationscontroller);

module.exports = router;
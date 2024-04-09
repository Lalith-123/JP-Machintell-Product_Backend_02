const express = require('express');
const router = express.Router();
const addsubassemblyspecificationscontroller = require('../../controller/SubAssemblySpecificationsController/addsubassemblyspecificationscontroller');
router.post('/:id', addsubassemblyspecificationscontroller);

module.exports = router;
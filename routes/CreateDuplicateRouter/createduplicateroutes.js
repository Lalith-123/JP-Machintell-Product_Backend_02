const express = require('express');
const router = express.Router();
const createDuplicateController = require('../../controller/CreateDuplicateController/createduplicatecontroller');
router.post('/:id', createDuplicateController);

module.exports = router;
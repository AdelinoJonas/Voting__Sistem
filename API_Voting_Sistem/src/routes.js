const express = require('express');
const router = express.Router();

const pollController = require('./controllers/pollController');
const optionController = require('./controllers/optionController');

router.get('/polls', pollController.getAll);
router.get('/options', optionController.getAllOptions);

module.exports = router;
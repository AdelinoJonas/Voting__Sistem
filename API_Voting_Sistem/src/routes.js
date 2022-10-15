const express = require('express');
const router = express.Router();

const pollController = require('./controllers/pollController');

router.get('/polls', pollController.getAll);

module.exports = router;
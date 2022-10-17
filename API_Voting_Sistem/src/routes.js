const express = require('express');
const router = express.Router();

const pollController = require('./controllers/pollController');

router.get('/polls', pollController.getAll);
router.get('/poll/:id', pollController.getPoll);
router.post('/poll', pollController.postQuestion);
router.post('/option', pollController.postOption);
// router.post('/poll', pollController.postVote);
router.put('/poll/id', pollController.updatePoll);
// router.put('/poll/id', pollController.updatePoll);



module.exports = router;
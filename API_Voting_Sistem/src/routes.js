const express = require('express');
const router = express.Router();

const pollController = require('./controllers/pollController');

router.get('/polls', pollController.getAll);
router.get('/poll/:id', pollController.getPoll);
router.post('/poll', pollController.postPoll);
router.put('/poll/:id', pollController.updatePoll);
router.put('/option/:id', pollController.updateOption);
router.put('/option/:id/vote', pollController.updateVote);
router.delete('/poll/:id', pollController.deletePoll);



module.exports = router;
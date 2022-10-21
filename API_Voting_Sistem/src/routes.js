const express = require('express');
const router = express.Router();

const pollController = require('./controllers/pollController');

router.get('/polls', pollController.getAll);
router.get('/poll/:id', pollController.getPoll);
router.post('/poll', pollController.postPoll);
router.put('/poll/:Id', pollController.updatePoll);
router.put('/option/:optionId', pollController.updateOption);
router.put('/option/:optionId', pollController.updateVote);
router.delete('/poll/:id', pollController.deletePoll);



module.exports = router;
const express = require('express');
const router = express.Router();

const pollController = require('./controllers/pollController');

router.get('/polls', pollController.getAll);
router.get('/poll/:id', pollController.getPoll);
router.post('/poll', pollController.postPoll);
// router.put('/option/:optionId', pollController.postOption);
router.put('/updatePoll/:id', pollController.updatePoll);
router.delete('/poll/:id', pollController.deletePoll);



module.exports = router;
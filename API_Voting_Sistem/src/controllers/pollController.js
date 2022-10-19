const pollService = require('../services/pollServices');

module.exports = {
  getAll: async (req, res) => {
    let json = {
      error: '',
      result: []
    };

    let polls = await pollService.getAll();

    if (polls) {
      json.result.push(polls);
    }
    res.json(json);
  },
  getPoll: async (req, res) => {
    let json = {
      error: '',
      result: {}
    };

    const id = req.params.id;
    let poll = await pollService.getPoll(id);

    if (poll) {
      json.result = poll;
    }
    res.json(json);
  },
  postPoll: async (req, res) => {
    let poll = {
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      title: req.body.title,
      questionDescription: req.body.questionDescription,
      option1: req.body.option1,
      option2: req.body.option2,
      option3: req.body.option3
    }

    if (!poll.startDate && !poll.endDate && !poll.title && !poll.questionDescription) {
      return res.status(400).json("Todos os campos são obrigatórios");
    }
    try {
      await pollService.postPoll(poll);

      return res.status(200).json({
        msg: 'Questão cadastrada com sucesso!'
      })
    } catch (error) {
      return res.status(400).json(error.message);
    }
  },
  postVote: async (req, res) => {
    let poll = {
      voteOption1: req.body.startDate,
      endDate: req.body.endDate,
      title: req.body.title
    }

    if (!poll.startDate && !poll.endDate && !poll.title && !poll.questionDescription) {
      return res.status(400).json({
        msg: "Todos os campos são obrigatórios"
      });
    }

    try {
      await pollService.postQuestion(poll);

      return res.status(200).json({
        msg: 'Questão cadastrada com sucesso!'
      })
    } catch (error) {
      return res.status(400).json(error.message);
    }
  },
  updatePoll: async (req, res) => {
    let json = {
      error: '',
      result: {}
    };

    let startDate = req.body.startDate;
    let endDate = req.body.endDate;
    let title = req.body.title;
    let questionDescription = req.body.questionDescription;

    console.log(startDate, endDate, title, questionDescription);
    if (id, startDate && endDate && title && questionDescription) {
      await pollService.updatePoll(startDate, endDate, title, questionDescription);
      json.result = {
        startDate,
        endDate,
        title,
        questionDescription
      };
    } else {
      json.error = 'Todos os campos são Obrigatórios!';
    }
    res.json(json);
  },
  deletePoll: async (req, res) => {
    let json = {
      error: '',
      result: {}
    };
    await pollService.deletePoll(req.params.id);
    json.result = {
      result: "Enquete deleteda com sucesso!"
    };
    res.json(json);
  }
}
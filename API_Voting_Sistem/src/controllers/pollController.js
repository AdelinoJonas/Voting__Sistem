const pollService = require('../services/pollServices');

module.exports = {
  getAll: async (req, res) => {
    let json = {
      error: '',
      result: {}
    };

    let polls = await pollService.getAll();

    if (polls) {
      json.result = polls;
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
      options: req.body.options
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
  updateVote: async (req, res) => {
    let votes = {
      totalVotes: req.body.totalVotes
    }
    try {
      await pollService.updateVote(votes);

      return res.status(200).json({
        msg: 'voto atualizado com sucesso!'
      })
    } catch (error) {
      return res.status(400).json(error.message);
    }
  },
  updateOption: async (req, res) => {
    let options = {
      optionDescription: req.body.optionDescription,
      question_id: req.body.question_id
    }
    try {
      if (options.question_id && options.optionDescription) {
        if(options.length >= 3){
          await pollService.updateOption(options);
          json.result = {
            question_id,
            optionDescription
          };
          return res.status(200).json({
            msg: 'voto atualizado com sucesso!'
          })
        }
      }
    } catch (error) {
      return res.status(400).json(error.message);
    }
  },
  updatePoll: async (req, res) => {
    let json = {
      error: '',
      result: {}
    };
    const dataPollToUpdate = {
    startDate : req.body.startDate,
    endDate : req.body.endDate,
    title : req.body.title,
    questionDescription : req.body.questionDescription
    }

    if (dataPollToUpdate.id, dataPollToUpdate.startDate && dataPollToUpdate.endDate && dataPollToUpdate.title && dataPollToUpdate.questionDescription) {
      await pollService.updatePoll(dataPollToUpdate);
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
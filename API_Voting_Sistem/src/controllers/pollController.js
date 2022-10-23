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
    let json = {
      error: '',
      result: {}
    };
    const dataVotesToUpdate = {
      id: req.params.id
    }
    try {
      await pollService.updateVote(dataVotesToUpdate);
      json.message = 'Atualizado com sucesso!';
    } catch (error) {
      json.error = `Não foi possível atualizar voto, a mensagem de erro foi: ${error.message}`
    }
    res.json(json);
  },
  updateOption: async (req, res) => {
    let json = {
      error: '',
      result: {}
    };
    const dataOptionToUpdate = {
      id: req.params.id,
      optionDescription: req.body.optionDescription
    }
    if (dataOptionToUpdate.optionDescription) {
      try {
        await pollService.updateOption(dataOptionToUpdate);
        json.message = 'Atualizado com sucesso!';
      } catch (error) {
        json.error = `Não foi possível atualizar opção, a mensagem de erro foi: ${error.message}`
      }
    } else {
      json.error = 'Todos os campos são Obrigatórios!';
    }
    res.json(json);
  },
  updatePoll: async (req, res) => {
    let json = {
      error: '',
      result: {}
    };
    const dataPollToUpdate = {
      id: req.params.id,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      title: req.body.title,
      questionDescription: req.body.questionDescription
    }
    if (dataPollToUpdate.startDate && dataPollToUpdate.endDate && dataPollToUpdate.title && dataPollToUpdate.questionDescription) {
      try {
        await pollService.updatePoll(dataPollToUpdate);
        json.message = 'Atualizado com sucesso!';
      } catch (error) {
        json.error = `Não foi possível atualizar enquete, a mensagem de erro foi: ${error.message}`
      }
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
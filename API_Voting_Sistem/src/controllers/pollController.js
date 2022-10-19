const pollService = require('../services/pollServices');
const db = require('../db');

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
  postQuestion: async (req, res) => {
    const { startDate, endDate, title, questionDescription } = req.body;

    if (!nome) {
        return res.status(400).json("O campo nome é obrigatório.");
    }

    try {
        const query = 'insert into autores (nome, idade) values ($1, $2)';
        const autor = await conexao.query(query, [nome, idade]);

        if (autor.rowCount === 0) {
            return res.status(400).json('Não foi possivel cadastrar o autor');
        }

        return res.status(200).json('Autor cadastrado com sucesso.')
    } catch (error) {
        return res.status(400).json(error.message);
    }
},
  postOption: async (req, res) => {
    let json = {
      error: '',
      result: {}
    };

    let option1 = req.body.option1;
    let option2 = req.body.option2;
    let option3 = req.body.option3;

    console.log(option1, option2, option3);
    if (option1 && option2 && option3) {
      await pollService.postOption(option1, option2, option3);
      json.result = {
        option1,
        option2,
        option3
      };
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
    json.result = {result:"Enquete deleteda com sucesso!"};
    res.json(json);
  }
}
const pollService = require('../services/pollServices');

module.exports = {
  getAll: async (req, res) => {
    let json = {
      error: '',
      result: []
    };

    let polls = await pollService.getAll();

    if (polls) {
      json.result.push(
        polls
      )
    }
    res.json(json);
  }
}
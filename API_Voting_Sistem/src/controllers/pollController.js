const pollService = require('../services/pollServices');

module.exports = {
    getAll: async (req, res) => {
        let json = {
            error: '',
            result: []
        };

        let polls = await pollService.getAll();

        for (let i in polls) {
            json.result.push({
                id: polls[i].id,
                registerDate: polls[i].registerDate,
                title: polls[i].title,
                questionDescription: polls[i].questionDescription,
                startDate: polls[i].startDate,
                endDate: polls[i].endDate,
                idOption: options[i].idOption,
                optionDescription: options[i].optionDescription,
                totalVotes: options[i].totalVotes
            })
        }
        res.json(json);
    }
}
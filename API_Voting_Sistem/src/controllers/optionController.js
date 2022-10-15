const optionServices = require('../services/optionServices');

module.exports = {
    getAllOptions: async (req, res) => {
        let json = {
            error: '',
            result: []
        };

        let options = await optionServices.getAllOptions();

        for (let i in options) {
            json.result.push({
                idOption: options[i].idOption,
                optionDescription: options[i].optionDescription,
                totalVotes: options[i].totalVotes
            })
        }
        res.json(json);
    }
}
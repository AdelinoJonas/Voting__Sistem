const db = require('../db');

module.exports = {
    getAll: () => {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT id, registerDate, startDate, endDate, title, questionDescription, option1, option2, option3, votesOption1, votesOption2,votesOption3 FROM poll_options as o left outer JOIN options_votes as v ON o.idOption = v.idVotes left JOIN poll_questions as q ON o.idOption = q.id';

            db.query(sql, (error, results) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(results);
                console.log(results);
            });
        });
    }
}
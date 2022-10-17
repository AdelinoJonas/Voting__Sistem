const db = require('../db');

module.exports = {
    getPoll: (id) => {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT id, registerDate, startDate, endDate, title, questionDescription, option1, option2, option3, votesOption1, votesOption2,votesOption3 FROM poll_options as o left outer JOIN options_votes as v ON o.idOption = v.idVotes left JOIN  poll_questions as q ON o.idOption = q.id WHERE id = ? GROUP BY id';
            // const sql = 'SELECT * FROM poll_questions WHERE id = ?';

            db.query(sql, [id],(error, results) => {
                if (error) {
                    reject(error);
                    return;
                }
                if(results.length > 0){
                    resolve(results[0]);
                    console.log(results[0]);
                }
            });
        });
    }
};
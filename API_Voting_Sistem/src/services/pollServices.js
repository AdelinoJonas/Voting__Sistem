const db = require('../db');

module.exports = {
  getAll: () => {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT id, registerDate, startDate, endDate, title, questionDescription, option1, option2, option3, votesOption1, votesOption2,votesOption3 FROM poll_options as o left outer JOIN options_votes as v ON o.idOption = v.idVotes left JOIN poll_questions as q ON o.idOption = q.id GROUP BY id';

      db.query(sql, (error, results) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(results);
        console.log(results);
        db.end();
      });
    });
  },

  getPoll: (id) => {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT id, registerDate, startDate, endDate, title, questionDescription, option1, option2, option3, votesOption1, votesOption2,votesOption3 FROM poll_options as o left outer JOIN options_votes as v ON o.idOption = v.idVotes left JOIN  poll_questions as q ON o.idOption = q.id WHERE id = ? GROUP BY id';
      // const sql = 'SELECT * FROM poll_questions WHERE id = ?';

      db.query(sql, [id], (error, results) => {
        if (error) {
          reject(error);
          return;
        }
        if (results.length > 0) {
          resolve(results[0]);
          console.log(results[0]);
        }
      });
    });
  },
  postQuestion: (startDate, endDate, title, questionDescription) => {
    return new Promise((resolve, reject) => {

      const sql = 'INSERT INTO poll_questions (startDate, endDate, title, questionDescription) VALUES(?,?,?,?)';

      db.query(sql, [startDate, endDate, title, questionDescription], (error, results) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(results.postQuestionid);
        console.log(results);
      })
    });
  },
  postOption: (option1, option2, option3) => {
    return new Promise((resolve, reject) => {

      const sql = 'INSERT INTO poll_options (option1, option2, option3) VALUES (?,?,?)';

      db.query(sql, [option1, option2, option3], (error, results, fields) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(results.insertId);
        console.log(sql);
      })
    });
  },
  updatePoll: (startDate, endDate, title, questionDescription) => {
    return new Promise((resolve, reject) => {

      const sql = 'UPDATE startDate, endDate, title, questionDescription, option1, option2, option3, votesOption1, votesOption2,votesOption3 FROM poll_options as o left outer JOIN options_votes as v ON o.idOption = v.idVotes left JOIN  poll_questions as q ON o.idOption = q.id WHERE id = ?';

      db.query(sql, [startDate, endDate, title, questionDescription], (error, results, fields) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(results);
        console.log(sql);
      })
    });
  },
};
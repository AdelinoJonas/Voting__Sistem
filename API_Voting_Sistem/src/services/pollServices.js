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
  postPoll: (poll) => {
    return new Promise((resolve, reject) => {
      const sql =
        "insert into poll_questions (startDate, endDate, title, questionDescription) values (?,?,?,?)";
      db.query(
        sql,
        [poll.startDate, poll.endDate, poll.title, poll.questionDescription],
        (error, results) => {
          if (error) {
            reject(error);
            return;
          }
          const insertedId = results.insertId;
          const sql =
            "insert into poll_options (option1, option2, option3, questionId) values (?,?,?,?)";
          db.query(
            sql,
            [poll.option1, poll.option2, poll.option3, insertedId],
            (error, results) => {
              if (error) {
                reject(error);
                return;
              }
              resolve(results);
              console.log(insertedId);
            }
          );
        }
      );
    });
  },
  updatePoll: (startDate, endDate, title, questionDescription) => {
    return new Promise((resolve, reject) => {

      const sql = 'UPDATE poll_options SET votesOption1 = votesOptions + 1 where poll_options.id = 1';

      db.query(sql, [votesOption1, endDate, title, questionDescription], (error, results) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(results);
      })
    });
  },
  deletePoll: (id) => {
    return new Promise((resolve, reject) => {
      const sql = 'DELETE FROM poll_options WHERE idOption = ?';

      db.query(sql, [id], (error, results) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(results);
        console.log(results);
      });
    });
  },
};
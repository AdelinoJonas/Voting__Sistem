const db = require("../db");

module.exports = {
  getAll: () => {
    return new Promise((resolve, reject) => {
      const sql = "SELECT id, registerDate, startDate, endDate, title, questionDescription FROM poll_questions";

      db.query(sql, (error, results) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(results);
      });
    });
  },
  getPoll: (id) => {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM poll_questions WHERE poll_questions.id = ?";

      db.query(sql, [id], (error, results) => {
        if (error) {
          reject(error);
          return;
        }
        if (results.length === 0) {
          resolve([]);
        }

        const sqlForOptions = "SELECT * from poll_options where question_id = ?";
        let poll = results[0];

        db.query(sqlForOptions, poll.id, (error, options) => {
          if (error) {
            reject(error);
            return;
          }
          poll.options = options
          resolve(poll)
        });
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
          poll.options.forEach((option) => {
            const sql =
              "insert into poll_options (description, question_id) values (?,?)";
            db.query(sql, [option, insertedId], (error, results) => {
              if (error) {
                reject(error);
                return;
              }
              resolve(results);
            });
          });
        }
      );
    });
  },
  updatePoll: (startDate, endDate, title, questionDescription) => {
    return new Promise((resolve, reject) => {
      const sql = "UPDATE poll_options SET votesOption1 = votesOptions + 1 where poll_options.id = 1";

      db.query(sql,
        [startDate, endDate, title, questionDescription],
        (error, results) => {
          if (error) {
            reject(error);
            return;
          }
          resolve(results);
        }
      );
    });
  },
  deletePoll: (id) => {
    return new Promise((resolve, reject) => {
      const sql = "DELETE FROM poll_options WHERE idOption = ?";

      db.query(sql, [], (error, results) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(results);
      });
    });
  },
};
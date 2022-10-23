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
            throw error;
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
              "insert into poll_options (optionDescription, question_id) values (?,?)";
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
  updatePoll: async ({
    id,
    startDate,
    endDate,
    title,
    questionDescription
  }) => {
    return new Promise((resolve, reject) => {

      const sql = "UPDATE poll_questions SET startDate = ?, endDate = ?, questionDescription = ?, title = ? where id = ?";
      db.query(sql,
        [startDate, endDate, title, questionDescription, id],
        (error, results) => {
          if (error) {
            reject(error)
          }

          resolve(results)
        });
    })
  },
  updateOption: async ({
    id,
    optionDescription
  }) => {
    return new Promise((resolve, reject) => {

      const sql = "UPDATE poll_options SET optionDescription = ? where id = ?";
      db.query(sql,
        [optionDescription, id],
        (error, results) => {

          if (error) {
            reject(error)
          }

          resolve(results)
        });
    })
  },
  updateVote: async ({
    id,
    totalVotes
  }) => {
    return new Promise((resolve, reject) => {
      const sql = "UPDATE poll_options SET totalVotes = totalVotes + 1 where id = ?";
      db.query(sql,
        [id],
        (error, results) => {

          if (error) {
            reject(error)
          }

          resolve(results)
        });
    })
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
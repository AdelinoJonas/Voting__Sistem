const db = require('../db');

module.exports = {
    getAllOptions: () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM poll_options', (error, results) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve(results);
            });
        });
    }
}
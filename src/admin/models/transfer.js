const db = require('../config/mysql')

module.exports = {
    getTransfer: function() {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM transfer', (err, result) => {
                if(!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    }
}
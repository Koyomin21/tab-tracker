const {Pool} = require('pg')
const config = require('../config/conifg')

const pool = new Pool(config.db)

module.exports = {
    query: (text, params, callback) => {
        return pool.query(text, params, callback)
    }
}


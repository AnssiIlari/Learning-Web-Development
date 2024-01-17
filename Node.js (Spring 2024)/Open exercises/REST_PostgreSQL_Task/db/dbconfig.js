const { Pool } = require('pg')
require('dotenv').config()

// from a .env file
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD
})

module.exports = {
  query: (text, params) => pool.query(text, params),
}
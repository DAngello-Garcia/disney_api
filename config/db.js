const Sequelize = require('sequelize')
require('dotenv').config()

const db = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER_NAME,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'postgres'
    }
)

module.exports = db
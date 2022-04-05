const { DataTypes } = require('sequelize')
const db = require('../config/db')

const Genre = db.define(
    'Genre',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING
        }
    }
)

module.exports = Genre
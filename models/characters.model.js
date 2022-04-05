const { DataTypes } = require('sequelize')
const db = require('../config/db')

const Character = db.define(
    'Character',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER
        },
        weigth: {
            type: DataTypes.DECIMAL
        },
        history: {
            type: DataTypes.TEXT
        },
        image: {
            type: DataTypes.STRING
        }
    }
)

module.exports = Character
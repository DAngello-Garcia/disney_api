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
        weight: {
            type: DataTypes.REAL,
            validate: {
                min: 0,
                max: 999
            }
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
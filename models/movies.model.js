const { DataTypes } = require('sequelize')
const db = require('../config/db')

const Movie = db.define(
    'Movie',
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date_created: {
            type: DataTypes.DATEONLY
        },
        image: {
            type: DataTypes.STRING
        },
        score: {
            type: DataTypes.REAL,
            validate: {
                min: 1,
                max: 5
            }
        }
    }
)

module.exports = Movie
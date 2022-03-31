const Sequelize = require('sequelize')

const characterModel = require('../models/characters.model')
const movieModel = require('../models/movies.model')
const genreModel = require('../models/genre.model')

const sequelize = new Sequelize('logbntgo', 'logbntgo', 'tRnmTF0Io21BeOicqadqQjUCOZxTXbDu', {
    host: 'ruby.db.elephantsql.com',
    dialect: 'postgres'
})

const Character = characterModel(sequelize, Sequelize)
const Movie = movieModel(sequelize, Sequelize)
const Genre = genreModel(sequelize, Sequelize)

Genre.hasMany(Movie)
Movie.belongsTo(Genre)
Movie.belongsToMany(Character, { through: 'Character_Movies' });
Character.belongsToMany(Movie, { through: 'Character_Movies' });

sequelize.sync({alter: true})
    .then(() => {
        console.log("All models were synchronized successfully.")
    })

module.exports = {
    Character,
    Movie,
    Genre
}
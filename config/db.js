const Sequelize = require('sequelize')

const characterModel = require('../models/characters.model')
const movieModel = require('../models/movies.model')
const genreModel = require('../models/genre.model')
const charMovModel = require('../models/character_movies.model')

const sequelize = new Sequelize('bzanngjl', 'bzanngjl', 'RpJNORDknFuecqBcmoz_uSUL8qKW8exq', {
    host: 'raja.db.elephantsql.com',
    dialect: 'postgres'
})

const Character = characterModel(sequelize, Sequelize)
const Movie = movieModel(sequelize, Sequelize)
const Genre = genreModel(sequelize, Sequelize)
const CharacterMovie = charMovModel(sequelize, Sequelize, Movie, Character)

Genre.hasMany(Movie, {
    foreignKey: 'genreId'
})
Movie.belongsTo(Genre)
Movie.belongsToMany(Character, { through: CharacterMovie });
Character.belongsToMany(Movie, { through: CharacterMovie });

sequelize.sync({alter: true})
    .then(() => {
        console.log("All models were synchronized successfully.")
    })

module.exports = {
    Character,
    Movie,
    Genre
}
const Sequelize = require('sequelize')

const characterModel = require('../models/characters.js')
const movieModel = require('../models/movies.js')
const genreModel = require('../models/genre.js')

const sequelize = new Sequelize('bzanngjl', 'bzanngjl', 'Wk1KtapX08b_6ie9TRiYwme6kFM6SlBW', {
    host: 'raja.db.elephantsql.com',
    dialect: 'postgres'
})

const Character = characterModel(sequelize, Sequelize)
const Movie = movieModel(sequelize, Sequelize)
const Genre = genreModel(sequelize, Sequelize)

Genre.hasMany(Movie)
Movie.belongsTo(Genre)
Movie.belongsToMany(Character, { through: 'CharacterMovies' });
Character.belongsToMany(Movie, { through: 'CharacterMovies' });

sequelize.sync({force: false})
    .then(() => {
        console.log("All models were synchronized successfully.")
    })

module.exports = {
    Character,
    Movie,
    Genre
}
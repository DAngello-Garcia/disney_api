const Movie = require('../config/db').Movie

const getAllMovies = async (req, res) => {
    const movie = await Movie.findAll({
        attributes: ['title', 'image', 'date_created']
    })
    res.json(movie)
}

const createMovie = async (req, res) => {
    const movie = await Movie.create(req.body)
    res.json(movie)
}

const updateMovie = async (req, res) => {
    await Movie.update(req.body, {
        where: {
            id: req.params.movieId
        }
    })
    res.json({success: 'Movie modified'})
}

const deleteMovie = async (req, res) => {
    await Movie.destroy({
        where: {
            id: req.params.movieId
        }
    })
}

module.exports = {
    getAllMovies,
    createMovie,
    updateMovie,
    deleteMovie
}
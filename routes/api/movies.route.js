const express = require('express')
const QueryTypes = require('sequelize')
const { getMovies,
    getDetailedMovie,
    createMovie,
    updateMovie,
    deleteMovie
} = require('../../controllers/movies.controller')

const router = express.Router()

router.get('/', getMovies)
router.get('/:movieId', getDetailedMovie)
router.post('/', createMovie)
router.put('/:movieId', updateMovie)
router.delete('/:movieId', deleteMovie)

module.exports = router
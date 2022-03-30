const express = require('express')
const QueryTypes = require('sequelize')
const { getAllMovies,
    createMovie,
    updateMovie,
    deleteMovie
} = require('../../controllers/movies.controller')

const router = express.Router()

router.get('/', getAllMovies)
router.post('/', createMovie)
router.put('/:movieId', updateMovie)
router.delete('/:movieId', deleteMovie)

module.exports = router
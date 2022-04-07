const express = require('express')
const { getMovies,
    getDetailedMovie,
    createMovie,
    updateMovie,
    deleteMovie
} = require('../../controllers/movies.controller')
const authMiddleare = require('../../middlewares/auth.middleware')

const router = express.Router()

router.get('/', authMiddleare, getMovies)
router.get('/:movieId', authMiddleare, getDetailedMovie)
router.post('/', authMiddleare, createMovie)
router.put('/:movieId', authMiddleare, updateMovie)
router.delete('/:movieId', authMiddleare, deleteMovie)

module.exports = router
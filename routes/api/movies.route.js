const express = require('express')
const { getMovies,
    getDetailedMovie,
    createMovie,
    updateMovie,
    deleteMovie
} = require('../../controllers/movies.controller')
const { authMiddleware } = require('../../middlewares/auth.middleware')

const router = express.Router()

router.get('/', authMiddleware, getMovies)
router.get('/:movieId', authMiddleware, getDetailedMovie)
router.post('/', authMiddleware, createMovie)
router.put('/:movieId', authMiddleware, updateMovie)
router.delete('/:movieId', authMiddleware, deleteMovie)

module.exports = router
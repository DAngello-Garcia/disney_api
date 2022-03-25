const express = require('express')
const characterApiRouter = require('../controllers/characters.js')
const movieApiRouter = require('../controllers/movies.js')

const router = express.Router()

router.use('/characters', characterApiRouter)
router.use('/movies', movieApiRouter)

module.exports = router
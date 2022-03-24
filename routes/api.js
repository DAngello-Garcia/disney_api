const express = require('express')
const characterApiRouter = require('./api/characters.js')
const movieApiRouter = require('./api/movies.js')

const router = express.Router()

router.use('/characters', characterApiRouter)
router.use('/movies', movieApiRouter)

module.exports = router
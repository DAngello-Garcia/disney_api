const express = require('express')
const characterApiRouter = require('./characters.route')
const movieApiRouter = require('./movies.route')

const router = express.Router()

router.use('/characters', characterApiRouter)
router.use('/movies', movieApiRouter)

module.exports = router
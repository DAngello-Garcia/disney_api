const express = require('express')
const characterApiRouter = require('./api/characters.js')

const router = express.Router()

router.use('/characters', characterApiRouter)

module.exports = router
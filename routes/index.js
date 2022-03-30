const express = require('express')
const apiRouter = require('./api')

const router = express.Router()

router.use('/', apiRouter)

module.exports = router
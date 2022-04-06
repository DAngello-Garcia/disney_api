const express = require('express')
const { authLogin, authRegister } = require('../controllers/auth.controller')

const router = express.Router()

router.post('/login', authLogin)
router.post('/register', authRegister)

module.exports = router
const jwt = require('jsonwebtoken')
const _ = require('lodash')
require('dotenv').config()

async function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization
    if (_.isEmpty(authHeader)) {
        return res.status(401).json({
            error: "Unauthorized access"
        })
    }

    const bearerToken = authHeader.split(' ')[1]
    try {
        const payload = jwt.verify(bearerToken, process.env.JWT_SECRET)
        req.body.id = payload.id
        req.body.username = payload.username
        return next()
    } catch (error) {
        return res.status(403).json({
            error: "Access forbidden", error: error.message
        })
    }
}

module.exports = {
    authMiddleware
}

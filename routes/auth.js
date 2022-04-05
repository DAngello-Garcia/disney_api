// const express = require('express')
// const passport = require('passport')
// const OpenIDConnectStrategy = require('passport-openidconnect')
// const qs = require('querystring')
// const router = express.Router()
// require('dotenv').config()

// passport.use(new OpenIDConnectStrategy({
//   issuer: process.env.ISSUER_BASE_URL,
//   authorizationURL: process.env.ISSUER_BASE_URL + '/authorize',
//   tokenURL: process.env.ISSUER_BASE_URL + '/oauth/token',
//   userInfoURL: process.env.ISSUER_BASE_URL + '/userinfo',
//   clientID: process.env.CLIENT_ID,
//   clientSecret: process.env.SECRET,
//   callbackURL: '/oauth2/redirect',
//   scope: [ 'profile' ]
// },
// function verify(issuer, profile, cb) {
//   return cb(null, profile)
// }))

// passport.serializeUser(function(user, cb) {
//   process.nextTick(function() {
//     cb(null, { id: user.id, username: user.username, name: user.displayName })
//   })
// })

// passport.deserializeUser(function(user, cb) {
//   process.nextTick(function() {
//     return cb(null, user)
//   })
// })

// router.get('/login', passport.authenticate('openidconnect'))

// router.get('/oauth2/redirect', passport.authenticate('openidconnect', {
//   successRedirect: '/',
//   failureRedirect: '/login'
// }))

// router.post('/logout', function(req, res, next) {
//   req.logout()
//   var params = {
//     client_id: process.env.CLIENT_ID,
//     returnTo: process.env.BASE_URL
//   }
//   res.redirect(process.env.ISSUER_BASE_URL+ '/v2/logout?' + qs.stringify(params))
// })

// module.exports = router
const express = require('express')
const bodyParser = require('body-parser')
const apiRoutes = require('./routes/index')
const authRouter = require('./routes/auth')
const myDB = require('./config/db')
const { configureDB, testData } = require('./config/db.config')

require('dotenv').config()

const app = express()
const PORT = 3000

configureDB(myDB)
testData(myDB)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded(
    {
        extended: true
    }
))

app.get('/', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out')
  })

//app.use('/auth', authRouter)
app.use('/api', apiRoutes)

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})
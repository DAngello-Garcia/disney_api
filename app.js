const express = require('express')
const apiRoutes = require('./routes/index')
const bodyParser = require('body-parser')

const app = express()
const PORT = 3000

require('./config/db')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use('/api', apiRoutes)

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})
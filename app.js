const express = require('express')
const bodyParser = require('body-parser')
const apiRoutes = require('./routes/index.js')

const app = express()
const PORT = 3000

require('./config/db.js')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use('/api', apiRoutes)

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})

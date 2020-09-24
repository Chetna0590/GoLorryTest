const express = require('express')
const cors = require('cors')
const bodyParser = require("body-parser")

//Configure the Express Server
let app = express()
app.use(cors())
app.use(bodyParser.json())

//Import and add API paths to express server
const routes = require('./routes/route')
app.use('/golorry/',routes)

const PORT = 5000
app.listen(PORT,function (){
    console.log(`Mock server running on port ${PORT}`)
})
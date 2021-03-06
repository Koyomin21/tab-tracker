const express = require('express')
const bodyParser = require("body-parser")
const cors = require('cors')
const morgan = require('morgan')
const app = express()
const config = require('./config/conifg')



app.use(morgan('combined'))//combined
app.use(bodyParser.json())
app.use(cors())

require("./routes")(app)



app.listen(config.port)
console.log(`Server started on port ${config.port} `)


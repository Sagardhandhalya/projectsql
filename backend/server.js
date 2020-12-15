const express = require('express')
const app = express()
const client = require('./db/conect_db')
const bodyParser = require('body-parser')

const cors = require('cors')

app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// SET STORAGE



client.connect()

app.use(express.static('public'))

// routes
const main = require('./routes/main')
app.use('/', main)

app.listen(7000, ()=>{
    console.log('server ruing on 7000');
})
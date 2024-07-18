const express = require('express')
const router = require('./src/routes/index')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

require('dotenv').config()
const port = process.env.PORT

app
    .use(cors())
    .use(bodyParser.json())
    .use(router)

const {connexion} = require('./src/db/db')

connexion()

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
})
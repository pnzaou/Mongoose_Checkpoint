const express = require('express')
const router = require('./src/routes/index')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const port = 3006

app
    .use(cors())
    .use(bodyParser.json())
    .use(router)

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
})
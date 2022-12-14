const express = require('express')
require('dotenv').config()
const path = require('path')

const port = process.env.PORT || 5000

const app = express()

app.use(express.json())


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'))
})

app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.css'))
})

app.use('/js', express.static(path.join(__dirname, 'server/index.js')))

app.listen(port, () => {
    console.log('Docked at port ' + port)
})
const express = require('express')
require('dotenv').config()
const path = require('path')

const port = process.env.PORT || 6500

const app = express

app.request(express.json())

app.listen(port, () => {
    console.log('Docked at port ' + port)
})
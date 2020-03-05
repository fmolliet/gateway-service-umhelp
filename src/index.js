require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

const routes = require('./routes')

const app = express()

mongoose.connect(process.env.STR_DATABASE, { useNewUrlParser: true, useUnifiedTopology: true })


app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(routes)

app.listen(process.env.PORT, () => {
    console.log(`Server listen on port: ${process.env.PORT}`)
  })
// requiring some packages
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users')

// creating app
const app = express()
app.use(cors())
app.use(express.json())

// connecting to MongoDB database
mongoose.connect('mongodb://localhost:27017/crud')

// API for get methods
app.get("/", (req, res) => {
    UserModel.find({})
  .then(users => res.json(users))
  .catch(err => res.json(err))
})

app.post("/createUser", (req, res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

// running the server
app.listen(3001, () => {
    console.log(`Server is running!`)
})

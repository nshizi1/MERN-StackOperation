// requiring some packages
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// creating app
const app = express();
app.use(cors());
app.use(express.json())

// connecting to MongoDB database
mongoose.connect('mongodb://localhost:27017/crud');

// running the server
app.listen(3001, () => {
    console.log(`Server is running!`);
});

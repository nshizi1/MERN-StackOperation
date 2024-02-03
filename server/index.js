// requiring some packages
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// creating app
const app = express();
app.use(cors());
app.use(express.json())

// running the server
app.listen(3001, () => {
    console.log(`Server is running!`);
});

// connecting to MongoDB database
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db.js');

const app = express();
const port = process.env.port; 

// Load environment variables
dotenv.config();
//hello

// Connect to MongoDB
connectDB();

// Middleware to parse JSON
app.use(express.json()); // or app.use(express.json())

// Routes


// Example middleware
const firstHandler = (req, res, next) => {
    if (10 < 20) {
        next();
    } else {
        res.status(403).send("Access denied");
    }
};

// Sample route using middleware
app.get('/apple', firstHandler, (req, res) => {
    res.send("apple is red");
});

// Start the server
app.listen(port, () => {
    console.log(`✅ Server is running on port ${port}`);
});

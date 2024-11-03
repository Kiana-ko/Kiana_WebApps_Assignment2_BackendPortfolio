
// Responsible for Database setup and connecting to MongoDB:
const mongoose = require('mongoose');

// Responsible for storing the MongoDB Atlas connection string:
const ATLASDB = 'mongodb+srv://rootk:UuMSwHAqh500OvEW@a2cluster.7x4hh.mongodb.net/?retryWrites=true&w=majority&appName=A2Cluster'

// Responsible for initializing the MongoDB connection and handling connection events:
module.exports = function () {

    mongoose.connect(ATLASDB);

    let mongodb = mongoose.connection;

    mongodb.on('error', console.error.bind(console, 'Connection Error: '));
    mongodb.once('open', () => {
        console.log("====> Connected to MongoDB.");
    })
}
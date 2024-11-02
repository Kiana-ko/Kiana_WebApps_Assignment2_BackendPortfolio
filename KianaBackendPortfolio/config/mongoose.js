
// Database setup
const mongoose = require('mongoose');
const ATLASDB = 'mongodb+srv://rootk:UuMSwHAqh500OvEW@a2cluster.7x4hh.mongodb.net/?retryWrites=true&w=majority&appName=A2Cluster'

module.exports = function () {

    mongoose.connect(ATLASDB);

    let mongodb = mongoose.connection;

    mongodb.on('error', console.error.bind(console, 'Connection Error: '));
    mongodb.once('open', () => {
        console.log("====> Connected to MongoDB.");
    })
}
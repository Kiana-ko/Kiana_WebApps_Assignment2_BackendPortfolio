
// Responsible for requiring Mongoose for MongoDB interaction:
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Responsible for defining the User schema with timestamps:
const UserSchema = new Schema({
    name: String,
    email: String,
    password: String
}, { timestamps: true });


// Responsible for exporting the User model:
module.exports = mongoose.model('User', UserSchema);
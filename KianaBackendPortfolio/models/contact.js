
// Responsible for requiring Mongoose to define schemas and interact with MongoDB:
const mongoose = require('mongoose');

// Responsible for defining the Schema:
const Schema = mongoose.Schema;

// Responsible for defining the Contact schema:
const ContactSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
});


// Responsible for exporting the Contact model based on the Contact schema:
module.exports = mongoose.model('Contact', ContactSchema);
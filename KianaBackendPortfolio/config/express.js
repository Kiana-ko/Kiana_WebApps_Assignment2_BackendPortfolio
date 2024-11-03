
// Responsible for requiring modules and initializing the Express app:
var createError = require('http-errors');
var express = require('express');
var app = express();


// Responsible for importing user and contact routes:
var userRouter = require('../routes/user');
var contactRouter = require('../routes/contact');


// Responsible for parsing JSON data in requests:
app.use(express.json());

// Responsible for setting up the root endpoint:
app.get('/', (req, res) => {
    res.send('Welcome to Portfolio Backend API');
});

// Responsible for setting up user and contact routes with API prefixes:
app.use('/api/users', userRouter);
app.use('/api/contacts', contactRouter);


// Responsible for catching the 404 and forward to error handler:
app.use(function (req, res, next) {
    next(createError(404));
});

// The error handler:
app.use(function (err, req, res, next) {

    // For sending the error message:
    res.status(err.status || 500);
    res.json({
        success: false,
        message: err.message
    });
});

// Responsible for exporting the Express app instance:
module.exports = app;
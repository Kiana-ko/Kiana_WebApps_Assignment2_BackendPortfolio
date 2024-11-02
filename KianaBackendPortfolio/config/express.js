var createError = require('http-errors');
var express = require('express');
var app = express();
var userRouter = require('../routes/user');
var contactRouter = require('../routes/contact');
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to Portfolio Backend API');
});

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

module.exports = app;
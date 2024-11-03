
// Responsible for requiring the app and database configuration files:
var app = require('./config/express');
const db = require('./config/mongoose');
const PORT = 3000;


// Responsible for initializing the database connection and starting the server:

db();

app.listen(PORT, () => {
    console.log(`==== The app is running on http://localhost:${PORT}`);
});

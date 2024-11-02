var app = require('./config/express');
const db = require('./config/mongoose');
const PORT = 3000;

db();

app.listen(PORT, () => {
    console.log(`==== The app is running on http://localhost:${PORT}`);
});
const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
var cors = require('cors');

const app = express();

// Connect Database
connectDB();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/cats', require('./routes/cats'));
// app.use('/api/contact', require('./routes/contactRoute'));

// Serve static assets in production
if(process.env.NODE_ENV === 'production'){
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
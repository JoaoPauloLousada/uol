/**
* index.js
* This is your main app entry point
*/

// Set up express, bodyparser and EJS
const express = require('express');
const app = express();
const port = 3000;
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs'); // set the app to use ejs for rendering
app.use(express.static(__dirname + '/public')); // set location of static files

// Set up session management
const session = require('express-session');
app.use(session({
    secret: 'ABCDEFG',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } // Set to true if using HTTPS
}));

// Set up SQLite
// Items in the global namespace are accessible throught out the node application
const sqlite3 = require('sqlite3').verbose();
global.db = new sqlite3.Database('./database.db', function (err) {
    if (err) {
        console.error(err);
        process.exit(1); // bail out we can't connect to the DB
    } else {
        console.log("Database connected");
        global.db.run("PRAGMA foreign_keys=ON"); // tell SQLite to pay attention to foreign key constraints
    }
});


// Add home routes
const { homeRoutes } = require('./routes/home.route');
app.use('/', homeRoutes);

const { authRoutes } = require('./routes/auth.route');
app.use('/auth', authRoutes);

const { organiserRoutes } = require('./routes/organiser.route');
app.use('/organiser', organiserRoutes);

const { attendeeRoutes } = require('./routes/attendee.route');
app.use('/attendee', attendeeRoutes);


// Make the web application listen for HTTP requests
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/db');
const app = express();
const erroHandler = require('errorhandler');

// Envionments
require('dotenv').config({ path: './src/envionment/.env' });

// Express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(erroHandler());

// Routes
const usersroutes = require('./routes/users.routes');
app.use('/users', usersroutes);

// Server
app.listen(process.env.PORT || 3000, () => {
    // Database
    db.connect();
    console.log(`Server Start ` + process.env.PORT);
});
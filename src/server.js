const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/db');
const app = express();
const erroHandler = require('errorhandler');
const cors = require('cors');
// Envionments
require('dotenv').config({ path: './src/environments/.env' });

// Express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(erroHandler());
app.use(cors());

// Routes
const usersroutes = require('./routes/users.routes');
const authroutes = require('./routes/auth.routes');
app.use('/api/users', usersroutes);
app.use('/auth', authroutes);

// Server
app.listen(process.env.PORT || 3000, () => {
    // Database
    db.connect();
    console.log(`Server Start ` + process.env.PORT);
});
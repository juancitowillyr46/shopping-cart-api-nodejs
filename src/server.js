const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// const mongoose = require('mongoose');

require('dotenv').config({ path: './src/development/.env' });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const usersroutes = require('./routes/users.routes');

app.use('/users', usersroutes);
app.listen(process.env.PORT || 3000, () => {
    console.log(`Server Start ` + process.env.PORT);
});
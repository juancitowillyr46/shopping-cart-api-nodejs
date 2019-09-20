const mongoose = require('mongoose');

function connect() {
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost/shoppingcart', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, () => {

    });

    mongoose.connection.once('open', () => {
        console.log(`Connection has been made, now make fireworks...`);
    }).on('Error', (error) => {
        console.log(`Connection error:` + error);
    });
    return mongoose;
}

function close() {
    return mongoose.disconnect();
}

function cleanDataBase() {
    return mongoose.connection.db.dropDatabase();
}

module.exports = { connect, close, cleanDataBase };
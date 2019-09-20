const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema and Model
const StatusSchema = new Schema({
    name: String,
    status: Boolean,
    clientkey: String
});

const Status = mongoose.model('Status', StatusSchema);

module.exports = { Status };
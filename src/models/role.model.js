const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema and Model
const RoleSchema = new Schema({
    name: {
        type: String,
        required: [true, `Field Name Required`]
    },
    status: {
        type: Schema.Types.ObjectId,
        ref: 'StatusRole',
    },
    clientkey: {
        type: String,
        required: [true, `Fiel Key Required`]
    }
});
const Role = mongoose.model('Role', RoleSchema);

const StatusSchema = new Schema({
    name: String,
    clientkey: String
});

const StatusRole = mongoose.model('StatusRole', StatusSchema);

module.exports = { Role, StatusRole };
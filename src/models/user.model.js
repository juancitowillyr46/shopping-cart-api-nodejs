const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema and Model
const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, `Field Username Required`]
    },
    password: {
        type: String,
        required: [true, `Field Password Required`]
    },
    email: {
        type: String,
        required: [true, `Field Email Required`],
    },
    status: {
        type: Schema.Types.ObjectId,
        ref: 'Status'
    },
    roles: [{
        type: Schema.Types.ObjectId,
        ref: 'Role'
    }],
    isverified: {
        type: Boolean,
        required: [true, `Field Isverified Required`]
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = { User };
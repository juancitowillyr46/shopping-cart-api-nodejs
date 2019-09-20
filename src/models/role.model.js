const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema and Model
const RoleSchema = new Schema({
    name: {
        type: String,
        required: [true, `Field Name Required`]
    },
    status: {
        type: Boolean,
        required: [true, `Field Status Required`]
    },
    clientkey: {
        type: String,
        required: [true, `Field Key Required`]
    }
});

const Role = mongoose.model('Role', RoleSchema);

// Create Schema and Model
// const StatusSchema = new Schema({
//     name: String,
//     clientkey: String
// });

// const StatusRole = mongoose.model('StatusRole', StatusSchema);

module.exports = { Role };
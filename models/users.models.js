const {model, Schema} = require('mongoose');

const UserSchema = new Schema({
    users: String,
    pass: Number
})

module.exports = model('User', UserSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema


const UserSchema = new Schema({
username: {type: String, unique: true, required: true},
years: {type: String},
branch: {type: String}

})



  


module.exports = mongoose.model('user', UserSchema)
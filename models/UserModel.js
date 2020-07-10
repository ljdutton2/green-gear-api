const mongoose = require('mongoose');
const Schema = mongoose.Schema

const UserSchema = new Schema({
username: {type: String, unique: true, required: true},
years: {type: Number},
branch: {type: String}


})

UserSchema.pre('findOne', function (next) {
    this.populate('posts')
    next()
})

UserSchema.pre('find', function (next) {
    this.populate('posts')
    next()
})
  
module.exports = mongoose.model('user', UserSchema)
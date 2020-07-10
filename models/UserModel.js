const mongoose = require('mongoose');
const Schema = mongoose.Schema

const UserSchema = new Schema({
username: String,
years: Number,
branch: String,
posts: [{ type: Schema.Types.ObjectId, ref: "post" }],

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
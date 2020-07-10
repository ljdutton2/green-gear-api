const mongoose = require('mongoose');
const Schema = mongoose.Schema

const UserSchema = new Schema({
username: String,
password: Number,
branch: String,
posts: [{ type: Schema.Types.ObjectId, ref: "post" }],

})
module.exports = mongoose.model('user', UserSchema)
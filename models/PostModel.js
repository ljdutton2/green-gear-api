const mongoose = require('mongoose');
const Schema = mongoose.Schema
const PostSchema = new Schema({
title: String,
body: String,

})
module.exports = mongoose.model('post', PostSchema)
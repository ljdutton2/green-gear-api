const mongoose = require('mongoose');
const Schema = mongoose.Schema
 require('../models/UserModel')
const PostSchema = new Schema({
title: String,
body: String,
author: { type: String },

})
module.exports = mongoose.model('post', PostSchema)
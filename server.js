const express = require('express');
const mongoose = require('mongoose');
const app = express()


//Database
mongoose.connect('mongodb://127.0.0.1:27017/greendb', {useNewUrlParser: true })
.then(() => console.log("Connected to database"))
.catch(err => console.log(err))

//Middleware
app.use(express.urlencoded({ extended: true}))
app.use(express.json())
//Controllers
const PostControl = require('./controllers/PostControl')
//Routes
app.post('/api/post/create', PostControl.create)
app.post('/api/post/update', PostControl.update)
app.get('/api/post/retrieve', PostControl.retrieve)
app.delete('/api/post/delete', PostControl.delete)

//Start Server
app.listen(3333, ()=> console.log("Server started on 3333"))
const express = require('express');
const mongoose = require('mongoose');
const app = express()
require('dotenv').config()



//Database
mongoose.connect(process.env.MONGOLAB_URI||'mongodb://127.0.0.1:27017/greendb', {useNewUrlParser: true })
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


  // INDEX
    app.get('/', (req, res) => {
       res.send("Welcome to the green gear API, please navigate to /api/post/create")
        })
    

//Start Server
app.listen(3333, ()=> console.log("Server started on 3333"))
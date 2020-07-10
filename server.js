const express = require('express');
const mongoose = require('mongoose');
const app = express()
require('dotenv').config()



//Database
// mongoose.connect(process.env.MONGOLAB_URI||'mongodb://127.0.0.1:27017/greendb', {useNewUrlParser: true })
// .then(() => console.log("Connected to database"))
// .catch(err => console.log(err))
require('./data/greendb.js')

//Middleware
app.use(express.urlencoded({ extended: true}))
app.use(express.json())
//Controllers
const PostControl = require('./controllers/PostControl')
const UserControl = require('./controllers/UserControl')
//Routes Posts
app.post('/api/post/create', PostControl.create)
app.post('/api/post/update', PostControl.update)
app.get('/api/post/retrieve', PostControl.retrieve)
app.delete('/api/post/delete', PostControl.delete)

//Routes Users
app.post('/api/user/create', UserControl.create)
app.post('/api/user/update', UserControl.update)
app.get('/api/user/retrieveOne', UserControl.retrieveOne)
app.get('/api/user/retrieveAll', UserControl.retrieveAll)
app.delete('/api/user/delete', UserControl.delete)



  // INDEX
    app.get('/', (req, res) => {
       res.send("Welcome to the green gear API, please navigate to /api/post/create")
        })
    

//Start Server
const port = process.env.PORT || 3333
app.listen(port, ()=> console.log(`Server started on ${port}`))
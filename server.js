const express = require('express');
const mongoose = require('mongoose');
const app = express()
const connectEnsureLogin = require('connect-ensure-login');
const passportLocalMongoose = require('passport-local-mongoose');

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
const AuthControl = require('./controllers/AuthControl')

//Routes Posts
app.post('/api/post/create', PostControl.create)
app.post('/api/post/update', PostControl.update)
app.get('/api/post/retrieve', PostControl.retrieve)
app.delete('/api/post/delete', PostControl.delete)

//Routes Users
app.post('/api/user/create', UserControl.create)
app.post('/api/user/update', UserControl.update)
app.get('/api/user/retrieveOne/:userId', UserControl.retrieveOne)
app.get('/api/user/retrieveAll', UserControl.retrieveAll)
app.delete('/api/user/delete', UserControl.delete)

//Routes auth
app.post('/login',AuthControl.login)
app.get('/login',AuthControl.login)
//add random locked route to test
app.get('/private',
  connectEnsureLogin.ensureLoggedIn(),
  (req, res) => res.sendFile('/private.html', {root: __dirname})
);

  // INDEX
    app.get('/', (req, res) => {
      
       res.send("Welcome to the green gear API, please navigate to /api/post/create")
        })

//JWT
var cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
app.use(cookieParser()); 

var checkAuth = (req, res, next) => {
  console.log("Checking authentication");
  if (typeof req.cookies.nToken === "undefined" || req.cookies.nToken === null) {
    req.user = null;
  } else {
    var token = req.cookies.nToken;
    var decodedToken = jwt.decode(token, { complete: true }) || {};
    req.user = decodedToken.payload;
  }

  next();
};
app.use(checkAuth);
    

//Start Server
const port = process.env.PORT || 3333
app.listen(port, ()=> console.log(`Server started on ${port}`))
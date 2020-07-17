const mongoose = require('mongoose');


//Database
mongoose.connect(process.env.MONGODB_URI||'mongodb://127.0.0.1:27017/greendb', {useNewUrlParser: true })
.then(() => console.log("Connected to database"))
.catch(err => console.log(err))


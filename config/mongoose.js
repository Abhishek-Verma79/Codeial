const mongoose = require('mongoose');
mongoose.set('strictQuery',false);
mongoose.connect('mongodb://127.0.0.1:27017/Codeial_development');

const db = mongoose.connection;

db.on('error', console.error.bind(console,"Error connecting to mongodb!"));

db.once('open',function(){
    console.log("Connected to Database :: MongoDB");
})

module.exports = db;
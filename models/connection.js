var mongoose = require('mongoose');

var mongoDB = 'mongodb://localhost:27017/myDB';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;


// doubt
db.on('connected', function() {
    console.log("Mongoose default connection is open to",mongoDB);
});

db.on('error', function(err){
    console.log("Mongoose default connection has occured "+err+"error");
})
db.on('disconnected', function(){
    console.log("Mongoose default connection is disconnected");
})

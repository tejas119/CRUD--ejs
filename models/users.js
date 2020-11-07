var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    first_name:String,
    last_name:String,
    number:String,
    city:String
});

// doubts
var User = mongoose.model('User',userSchema);

module.exports = User;
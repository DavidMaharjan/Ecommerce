const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  phoneNO:Number,
  email:String,
  password:String,
  gender: {
    type: String,
    enum : ['Male','Female','Others'],
    default: 'Male'
},
  Birthday:Date

});

const User = mongoose.model('User', userSchema);
module.exports = User


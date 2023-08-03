
const mongoose = require('mongoose')

const userSchema = new mongoose. Schema({
    userName: String, // String is shorthand for {type: String}
    email: String,
    password: String,
    phoneNumber: Number,
    role: {
      type: String,
      enum: ['buyer', 'seller', 'admin'],
      default: 'admin'
    }
  });
  
  const Users = mongoose.model('Users', userSchema);
  module.exports = Users
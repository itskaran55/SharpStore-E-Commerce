require('dotenv').config();
const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/regData")
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log('MongoDB Connected..!');
})
.catch(() => {
    console.log('Oops Failed..!');
})

const newSchema = new mongoose.Schema({
    username: {
        type: String,   
        required: true,
        unique: true
      },
      email: {
        type: String,
        required: true,
        unique: true
      },
      password: {
        type: String,
        required: true
      },
      role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
      }
})

const collection = mongoose.model("collection",newSchema);

module.exports = collection;


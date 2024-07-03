const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/regData")
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
      }
})

const collection = mongoose.model("collection",newSchema);

module.exports = collection;


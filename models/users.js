const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  _id: Number,
  username: String,
  tag: String,
  vip: Boolean,
  premium: Boolean,
  options: {
     suffix: String,
     fastRead: Boolean,
     theme: String,
  },
  currency: Number,
  level: Number,
  exp: Number,
  stories: Array


});
module.exports = mongoose.model("users", userSchema);

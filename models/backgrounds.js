const mongoose = require("mongoose");
const backgroundSchema = mongoose.Schema({
  _id: Number,
  name: String,
  set: String,
  cost: Number,
  description: String,
  authors: Array,
  g_normal: mongoose.SchemaTypes.Url,
  g_night: mongoose.SchemaTypes.Url,
  g_noon: mongoose.SchemaTypes.Url,
  g_afternoon: mongoose.SchemaTypes.Url,
  likes: Number,
});
module.exports = mongoose.model("backgrounds", backgroundSchema);

const mongoose = require("mongoose");
const storySchema = mongoose.Schema({
  _id: Number,
  name: String,
  set: String,
  cost: Number,
  description: String,
  authors: Array,
  g_normal: mongoose.SchemaTypes.Url,
  likes: Number,
played: Number,
characters: Object,
main: Object,








});
module.exports = mongoose.model("stories", storySchema);

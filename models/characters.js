const mongoose = require("mongoose");
require('mongoose-type-url');
const characterSchema = mongoose.Schema({
_id: Number,
name: String,
set: String,
cost: Number,
description: String,
authors: Array,
g_neutral: mongoose.SchemaTypes.Url,
g_happy: mongoose.SchemaTypes.Url,
g_annoyed: mongoose.SchemaTypes.Url,
g_angry: mongoose.SchemaTypes.Url,
g_sad: mongoose.SchemaTypes.Url,
g_surprised: mongoose.SchemaTypes.Url,
g_blush: mongoose.SchemaTypes.Url,
likes: Number,
gender: String,
so: Number,
bloodtype: String,
birthday: String
//type: Number, //0 = story driven, 1 = user input driven





});
module.exports = mongoose.model("characters", characterSchema);

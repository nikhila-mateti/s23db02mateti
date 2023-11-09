const mongoose = require("mongoose")
const bookSchema = mongoose.Schema({
title: String,
author: String,
publishedYear: Number
});
module.exports = mongoose.model("Book",bookSchema)
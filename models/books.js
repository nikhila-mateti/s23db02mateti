const mongoose = require("mongoose")
const bookSchema = mongoose.Schema({
booktitle: String,
author: String,
publishedYear: Number
});
module.exports = mongoose.model("Book",bookSchema)
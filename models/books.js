const mongoose = require("mongoose")
const bookSchema = mongoose.Schema({
    booktitle: {
        type: String,
        required: true,
        validate: {
          validator: (value) => {
            if (value.length < 1 || value.length > 100) {
              console.log("Book title must have between 1 and 100 characters.");
              return false;
            }
            return true;
          },
        },
      },
      author: {
        type: String,
        required: true,
        validate: {
          validator: (value) => {
            if (value.length < 1 || value.length > 50) {
              console.log("Author name must have between 1 and 50 characters.");
              return false;
            }
            return true;
          },
        },
      },
publishedYear: {
    type: Number,
    validate: {
        validator: (value) => {
          if (value < 0) {
            console.log("Published year must be a non-negative number.");
            return false;
          }
          return true;
        },
      },
    },
});
module.exports = mongoose.model("Book",bookSchema)
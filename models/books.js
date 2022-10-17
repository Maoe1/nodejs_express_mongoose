const mongoose = require("mongoose");

const BooksSchema = new mongoose.Schema({
    book_name:
    {
        type: String,
        require: true,
        lowercase: true
    },
    author: String,
    price: Number
});

const Books = mongoose.model("books", BooksSchema);
module.exports = Books;


const { type } = require("mongoose");

const mongoose = require('mongoose');


let booktype;

async function main() {
    await mongoose.connect('mongodb://localhost:27017/301-books');

    const bookSchema = new mongoose.Schema({
        bookTitle: String,
        bookDescription: String,
        bookStatus: String,
        bookEmail: String
    });

    booktype = mongoose.type('book', bookSchema);

      seedData();
}

module.exports = main;
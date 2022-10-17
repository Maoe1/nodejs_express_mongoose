const express = require("express")
const BookModel = require("../models/books")

const routes = express.Router()

//Get All Books
routes.get("/books", async (req, res) => {
   // res.send({message: "Get All Books"})
   try{
        const books =  await BookModel.find()
        res.status(200).send(books)
    }catch{
        res.status(500).send({message: "No Books Found!"})
   }

})

/*
{
    "book_name": "Let us c",
    "author": "Mahmoud",
    "price": "100.00"
}
*/

//Add NEW Book
routes.post("/books", async (req, res) => {
    //res.send({message: "Add NEW Book"})
    const newBook = new BookModel(req.body)

    try{
       await newBook.save();
       res.status(201).send(newBook)

    }catch(error){
        res.status(500).send({message: "Error while inserting"})

    }
})

//Update existing Book By Id
routes.post("/book/:bookid", (req, res) => {
    res.send({message: "Update existing Book By Id"})
})

//Delete Book By ID
routes.delete("/book/:bookid", (req, res) => {
    res.send({message: "Delete Book By ID"})
})

//Get Book By ID
routes.get("/book/:bookid", (req, res) => {
    res.send({message: "Get Book By ID"})
})

//Get All Books in sorted order
routes.get("/books/sort", (req, res) => {
    res.send({message: "Get All Books in sorted order"})
})

module.exports = routes
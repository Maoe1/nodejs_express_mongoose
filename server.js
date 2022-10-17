const express = require("express")
const booksRoutes = require("./routes/books")

const mongoose = require("mongoose")
const BookModel = require("./models/books")
const app = express()

const SERVER_PORT = 3001

app.use(express.json())
app.use(express.urlencoded())

mongoose.connect("mongodb+srv://maoe1:jpgs6cnFQRW8MXkN@cluster0.mtvhcjr.mongodb.net/gbc_full_Stocks_books?retryWrites=true&w=majority",
 {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
//mongodb+srv://maoe1:<password>@cluster0.mtvhcjr.mongodb.net/?retryWrites=true&w=majority

app.use("/api/v1", booksRoutes)

app.route("/")
    .get((req, res) => {
        res.send("<h1>MogoDB + Mongoose Example</h1>")
    })

app.listen(SERVER_PORT, () =>{
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
})
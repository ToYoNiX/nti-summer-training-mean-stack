const express = require("express")
const mongoose = require("mongoose")

require("dotenv").config()
const PORT = process.env.PORT
const connString = process.env.connString

mongoose.connect(connString).then(() => {
    console.log(`Mongoose is connected to ${connString}`)
}).catch((err) => {
    console.log(err)
})

var app = express()

app.use(express.json())

const userRoute = require("./routes/users")
app.use("/", userRoute)

app.listen(PORT, (req, res) => {
    console.log(`Server is running on http://localhost:${PORT}/`)
})
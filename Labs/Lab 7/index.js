const express = require("express")

const PORT = 2011
const app = express()

app.use(express.json())

const productsRoutes = require("./routes/products")
app.use("/", productsRoutes)

app.listen(PORT, () => {
    console.log(`Server is available at http://localhost:${PORT}`)
})

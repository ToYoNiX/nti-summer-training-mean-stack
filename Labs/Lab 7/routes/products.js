const express = require("express")
const products = require("../controllers/products")

var router = express.Router()
router.get("/products", products.getAllProducts)
router.post("/products", products.addProduct)
router.get("/products/:id", products.getProduct)
router.put("/products/:id", products.updateProduct)
router.delete("/products/:id", products.deleteProduct)

module.exports = router
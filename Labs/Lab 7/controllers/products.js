const fs = require("fs")

const jsonFile = "./products.json"

function loadProducts() {
    return JSON.parse(fs.readFileSync(jsonFile, 'utf-8'))
}

function updateProducts(data) {
    fs.writeFileSync(jsonFile, JSON.stringify(data), "utf-8")
}

var getAllProducts = (request, respond) => {
    var products = loadProducts()
    respond.json(products)
}

var addProduct = (request, respond) => {
    var product = request.body
    var products = loadProducts()

    products.push(product)
    updateProducts(products)

    respond.json({"message": "product was added successfully"})
}

var getProduct = (request, response) => {
    const params = request.params;
    var products = loadProducts()

    const index = products.findIndex(p => p.id == params.id)

    if (index != -1) {
        return response.json(products[index])
    } else {
        return response.json({"message": "product id is not found"})
    }
}

var updateProduct = (request, respond) => {
    const params = request.params;
    var products = loadProducts()

    const index = products.findIndex(p => p.id == params.id)

    if (index == -1) {
        return respond.message({"message": "product id is not found"})
    }

    const newData = request.body
    products[index] = newData
    updateProducts(products)

    respond.json({"message": "the product is updated"})
}

var deleteProduct = (request, respond) => {
    const params = request.params;
    var products = loadProducts()

    const index = products.findIndex(p => p.id == params.id)

    if (index == -1) {
        return respond.json({"message": "product id is not found"})
    }

    products = products.filter(p => p.id != params.id)
    updateProducts(products)
    
    respond.json({"message": "the product is deleted"})
}

module.exports = {getAllProducts, addProduct, getProduct, updateProduct, deleteProduct}
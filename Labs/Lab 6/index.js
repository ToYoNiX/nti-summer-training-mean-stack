const http = require("http")
const fs = require("fs")
const querystring = require("querystring")
const path = require("path")
const validator = require("validator")

const PORT = 2011
const filePath = path.join(__dirname, "products.json")

if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, "[]")
}

function loadProducts () {
    const data = JSON.parse(fs.readFileSync(filePath, "utf-8"))
    return data
}

function updateProducts (data) {
    fs.writeFileSync(filePath, JSON.stringify(data), "utf-8")
}

const server = http.createServer((req, res) => {
/*
- Add product
- Update product
- Delete product
- Search for a product
- Validate email using 
*/

    if (req.method == "GET") {
        if (req.url == "/products") {
            let products = loadProducts()
            let response = `
                <form method="post" action="/add_update">
                    <input type="text" name="name" placeholder="name">
                    <input type="text" name="price" placeholder="price">
                    <button type="submit">Add or Update Product</button>
                </form>
                <h1>Products</h1>
                <ul>
                    ${products.map((p) => `
                        <form method="post" action="/remove">
                            <input hidden type="text" name="name" value="${p.name}">
                            <input hidden type="text" name="price" value="${p.price}">
                            <li>${p.name} - ${p.price}EGP <button type="submit">Delete</button></li>
                        </form>
                    `)}
                </ul>
            `
            res.writeHead(200, { "content-type": "text/html" });
            res.end(response);
        } else if (req.url == "/email") {
            let response = `
                <h1>Validate Email</h1>
                <form method="post" action="/validate">
                    <input type="text" name="email" placeholder="email"> <button type="submit">Validate</button>
                </form>
            `
            res.writeHead(200, { "content-type": "text/html" });
            res.end(response);
        } else {

            res.writeHead(404, { "content-type": "text/html" });
            res.end("NOT FOUND");
        }
    } else if (req.method == "POST") {
        if (req.url == "/add_update") {
            let data = "";
            req.on("data", (chunk) => {
                data += chunk.toString();
            });
            req.on("end", () => {
                const postData = querystring.parse(data);
                let products = loadProducts()

                // ADD OR UPDATE PRODUCT
                let index = products.findIndex((p) => p.name == postData.name)
                if (index != -1) {
                    products[index].price = postData.price
                } else {
                    products.push({name: postData.name, price: postData.price})
                }
                updateProducts(products)

                res.writeHead(302, {location: "/products"})
                res.end()
            });
        } else if (req.url == "/remove") {
          let data = "";
          req.on("data", (chunk) => {
            data += chunk.toString();
          });
          req.on("end", () => {
            const postData = querystring.parse(data);
            let products = loadProducts()

            // REMOVE PRODUCT
            let index = products.findIndex((p) => p.name == postData.name)
            if (index != -1) {
                products = products.filter((p) => p.name != postData.name)
                updateProducts(products)
            }

            res.writeHead(302, {location: "/products"})
            res.end()
          });
        } else if (req.url == "/validate") {
          let data = "";
          req.on("data", (chunk) => {
            data += chunk.toString();
          });
          req.on("end", () => {
            const postData = querystring.parse(data);
            email = postData.email

            // VALIDATE EMAIL USING VALIDATOR
            res.writeHead(200, { "content-type": "text/html" });
            if (validator.isEmail(email)) {
                res.end("Valid!");
            } else {
                res.end("Not Valid!")
            }
          });
        } else {
            res.writeHead(404, { "content-type": "text/html" });
            res.end("NOT FOUND");
        }
    } else {

        res.writeHead(404, { "content-type": "text/html" });
        res.end("JUST GO AWAY");
    }
}) 

server.listen(PORT, () => {
    console.log("Here from server!")
})
const express = require("express")
const router = express.Router()
const users = require("../controllers/users")

router.get("/users", users.getAllUsers);
router.get("/users/:id", users.getUser)
router.post("/users", users.addUser);
router.put("/users/:id", users.updateUser);
router.delete("/users/:id", users.deleteUser)

module.exports = router
const validator = require("validator")
const { userModel } = require("../models/users")

const getAllUsers = async (req, res) => {
    try {
        var dbRespond = await userModel.find();
        res.status(200).json({ message: "success", dbRespond });
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

const getUser = async (req, res) => {
    const params = req.params;
    try {
        var dbRespond = await userModel.find({"_id": params.id})
        res.status(200).json({message: "success", dbRespond})
    } catch (err) {
        res.status(404).json({message: err.message})
    }
}

const addUser = async (req, res) => {
    var user = req.body
    try {
        const newUser = await userModel.create(user)
        res.status(200).json({message: "success", newUser})
    } catch {
        res.status(404).json({message: "didn't add the user"})
    }
}

const updateUser = async (req, res) => {
    const params = req.params;
    var newData = req.body;

    try {
        const dbRespond = await userModel.updateOne({"_id": params.id}, {$set:newData})
        res.status(200).json({message: "success", dbRespond})
    } catch {
        res.status(404).json({message: "didn't update user's data"})
    }
}

const deleteUser = async (req, res) => {
    const params = req.params;

    try {
        const dbRespond = await userModel.deleteOne({"_id": params.id})
        res.status(200).json({message: "success", dbRespond})
    } catch {
        res.status(404).json({message: "didn't delete any user"})
    }
}

module.exports = {getAllUsers, getUser, addUser, updateUser, deleteUser}
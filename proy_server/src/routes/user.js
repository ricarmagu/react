const express = require("express");
const UserController = require("../UserController/users");

const api = express.Router();

api.post("/singup", UserController.signUp);

module.exports = api;
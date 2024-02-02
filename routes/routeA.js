const express = require("express");
const router = express.Router();

// Import user controller methods
const userController = require("../controllers/userController");

// ROUTES

/** Route for creating a user */
router.post("/create", userController.createUser);
/** Route for getting all users */
router.get("/getall", userController.getAllUser);
/** Route for getting A user by username */
router.get("/getuserbyname/:username", userController.getUserByName);

module.exports = router;

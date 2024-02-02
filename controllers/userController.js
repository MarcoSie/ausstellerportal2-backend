// Import required modules

// Import User Model
const { default: mongoose } = require("mongoose");
const User = require("../db/Models/userModel");

/** Get All Users */
async function createUser(req, res, next) {
  try {
    const newUserData = req.body;
    await User.create(newUserData);

    res.status(200).send("User created");
  } catch (error) {
    // console.log(error);
    res.status(500).json({
      error: "Ein Fehler trat auf, während der User erstellt wurde",
    });
  }
}

/** Get All Users */
async function getAllUser(req, res, next) {
  try {
    // Retrieve all users from the database
    const allUser = await User.find();
    // console.log(allUser);
    res.status(200).send(allUser);
  } catch (error) {
    // console.log(error);
    res.status(500).json({
      error: "Ein Fehler trat auf, während die User geholt werden sollten",
    });
  }
}

/** Get A User by username */
async function getUserByName(req, res, next) {
  try {
    const username = req.params.username;
    // Retrieve users from the database
    const user = await User.findOne({
      username: { $regex: new RegExp(username, "i") },
    });

    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error:
        "Ein Fehler trat auf, während des holens der User mit bestimmten Namen",
    });
  }
}

module.exports = {
  createUser,
  getAllUser,
  getUserByName,
};

const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const user = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  role: {
    type: String,
    enum: ["mitarbeiter", "aushilfe", "admin"],
    required: true,
  },
  publicweight: {
    type: Number,
    min: 0,
    max: 99,
    default: 0,
    validate: {
      validator: Number.isInteger,
      message: "{VALUE} is not an integer value",
    },
  },
  info: {
    name: {
      type: String,
    },
    adresse: {
      city: { type: String },
      street: { type: String },
      housenumber: { type: String },
      plz: { type: String },
    },
  },
  password: String,
  news: [
    {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "News",
    },
  ],
});

const User = model("User", user);

module.exports = User;

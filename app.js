// Module Imports
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

// Load Environment Variables
dotenv.config();
// Express App Initialization
const app = express();
// Middleware Setup
app.use(cors());
app.use(bodyParser.json());

// Route Imports
const routeA = require("./routes/routeA");
// Basic Route
app.get("/", (req, res) => res.send("Hi from Backend"));
// API Routes
app.use("/api/user", routeA);

// MongoDB Connection
const { connectToDB } = require("./db/connect");
connectToDB();

// Server Start
app.listen(process.env.PORT_INTERN, () => {
  console.log(
    `🧚 ${new Date().toLocaleTimeString()} Listen! on Port ${
      process.env.PORT_INTERN
    }`
  );
});

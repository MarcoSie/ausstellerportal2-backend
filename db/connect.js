require("dotenv").config();
const mongoose = require("mongoose");

/** stellt die Verbindung zur DB her */
function connectToDB() {
  // DB Config
  const { DB_USERNAME, DB_PASSWORD, DB_NAME } = process.env;
  const MONGO_URI = `mongodb://${DB_USERNAME}:${DB_PASSWORD}@mongo:27017/${DB_NAME}`;

  mongoose
    .connect(MONGO_URI, {
      auth: {
        username: DB_USERNAME,
        password: DB_PASSWORD,
      },
      authSource: "admin",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("\nDB is connected");
    })
    .catch((err) => {
      console.log("Error", err);
    });
}

module.exports = { connectToDB };

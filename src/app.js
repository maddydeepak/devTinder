const express = require("express");
const app = express();
const connectDB = require("./config/database");
const mongoose = require("mongoose");
const User = require("./models/user");

app.post("/signup", async (req, res) => {
  const user = new User({
    firstName: "Niveditha",
    lastName: "U",
    emailId: "niveditha@u.com",
    password: "niveditha@123",
  });
  try {
    await user.save();
    res.send("Data saved successfully.");
  } catch {
    res.status(400).send("Error in saving data");
  }
});

connectDB()
  .then(() => {
    console.log("DB is connected now");
    app.listen(7777, () => {
      console.log("Listening on port 7777 now");
    });
  })
  .catch(() => {
    console.log(
      "Database can not be connected right now. Please try again later."
    );
  });

const express = require("express");

const app = express();

app.get(/.*fly$/, (req, res) => {
  res.send({ firstname: "Deepak", lastname: "Maddy" });
});

app.get("/user", (req, res) => {
  console.log(req.query);
  res.send({ firstname: "Deepak", lastname: "Maddy" });
});

app.get("/user/:userId", (req, res) => {
  console.log(req.params);
  res.send({ firstname: "Deepak", lastname: "Maddy" });
});

app.post("/user", (req, res) => {
  res.send("Data updated successfully");
});

app.put("/user", (req, res) => {
  res.send("Data put successfully");
});

app.patch("/user", (req, res) => {
  res.send("Data patched successfully");
});

app.delete("/user", (req, res) => {
  res.send("Data deleted successfully");
});

app.use("/", (req, res) => {
  res.send("Hello from the server");
});

app.listen(7777);

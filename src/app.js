const express = require("express");

const app = express();

app.use("/test", (req, res) => {
  res.send("Reading file from the server");
});

app.use("/", (req, res) => {
  res.send("Hello from the server");
});

app.listen(7777);

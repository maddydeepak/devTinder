const express = require("express");
const { authAdmin, authUser } = require("./middlewares/auth");
const app = express();

app.use("/admin", authAdmin);
app.use("/user", authUser);

app.use("/admin/getAllusers", (req, res) => {
  res.send("All users data sent");
});

// app.get(
//   "/user",
//   [
//     (req, res, next) => {
//       console.log("Request Handler 1");
//       // res.send("Request Handler 1");
//       next();
//     },
//     (req, res, next) => {
//       console.log("Request Handler 2");
//       //res.send("Request Handler 2");
//       next();
//     },
//   ],
//   (req, res, next) => {
//     console.log("Request Handler 3");
//     //res.send("Request Handler 3");
//     next();
//   },
//   (req, res) => {
//     console.log("Request Handler 4");
//     res.send("Request Handler 4");
//   }
// );

app.get(/.*fly$/, (req, res) => {
  res.send({ firstname: "Deepak", lastname: "Maddy" });
});

app.get("/user", (req, res) => {
  console.log(req.query);
  throw new Error("dsfs");
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

app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(500).send("Something went wrong");
  }
  // res.send("Hello from the server");
});

app.listen(7777);

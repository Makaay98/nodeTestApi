const { v4: uuidv4 } = require('uuid');

const express = require("express");


const app = express();

var users = [
  { id: uuidv4(), name: "Maki" },
  { id: uuidv4(), name: "Djole" },
  { id: uuidv4(), name: "Cofi" }
]

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log(req.body)
})

app.listen(5000, () => {
  console.log("Server started!!!");
});

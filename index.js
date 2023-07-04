const { v4: uuidv4 } = require('uuid');

const express = require("express");


const app = express();

app.get("/", (req, res) => {
  res.send([{ id: uuidv4(), name: "Maki" }]);
});

app.listen(5000, () => {
  console.log("Server started!!!");
});

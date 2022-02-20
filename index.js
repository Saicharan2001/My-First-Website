const bodyParser = require("body-parser");
const express = require("express");
const https = require("https");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));
const Port = 80;

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  res.write(req.body.email1 + "Your form is submitted successfully");
  res.write("You can peacefully move back to the home page");
  res.send();
});
app.listen(80, function (req, res) {
  console.log("Server is started");
});

const bodyParser = require("body-parser");
const express = require("express");
const https = require("https");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));
const Port = 3000;

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  res.write(
    "<h1>" + req.body.email1 + " Your form is submitted successfully</h1>"
  );
  res.write("<p>You can peacefully move back to the home page</p>");
  res.send();
});
app.listen(process.env.PORT || 3000, function (req, res) {
  console.log("Server is started");
});

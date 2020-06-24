var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("Hi there,welcome to my assignment");
});
app.get("/speak/:animal", function (req, res) {
  var sounds = {
    pig: "Oink",
    dog: "Woof",
    cow: "Moo",
  };

  var animal = req.params.animal;
  var sound = sounds[animal];
  res.send("The " + animal + " say: " + sound);
});
app.get("*", function (req, res) {
  res.send("Sorry page not foun! What are you doing with your life?");
});
app.listen(3000, function () {
  console.log("Now serving your app!");
});

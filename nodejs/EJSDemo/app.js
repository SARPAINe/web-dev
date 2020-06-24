var express = require("express");
const bodyParser = require("body-parser");
var app = express();
var friends = ["rahim", "karim", "bablu"];

app.use(express.static("css"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("home");
});
app.get("/fallinlovewith/:thing", function (req, res) {
  var thing = req.params.thing;
  res.render("love", { thingVar: thing });
});
app.get("/posts", function (req, res) {
  var posts = [
    { title: "Post1", author: "suzy" },
    { title: "Post2", author: "heisten" },
    { title: "Post3", author: "ishinobi" },
  ];
  res.render("posts", { posts: posts });
});
app.post("/addfriend", function (req, res) {
  var friendName = req.body.friendName;
  friends.push(friendName);
  // res.send("you have reached added a friend");
  res.redirect("friends");
});

app.get("/friends", function (req, res) {
  res.render("friends", { friends: friends });
});
app.listen(3000, function () {
  console.log("Server is listening");
});

const app = require("express")();
const request = require("request");
app.set("view engine", "ejs");

// var x = document.getElementById("demo");

app.get("/search", function (req, res) {
  res.render("search");
});

app.get("/results", function (req, res) {
  var query = req.query.search;
  var url = "http://www.omdbapi.com/?s=" + query + "&apikey=2be059e2";
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var data = JSON.parse(body);
      // res.send(results["Search"][0]["Title"]);
      // if (data["response"] == "False") res.send("NO movies found!");
      res.render("results", { data: data });
    }
  });
});

app.get("/weather", function (req, res) {
  request(
    "http://api.openweathermap.org/data/2.5/weather?lat=23.9535742&lon=90.14949879999999&APPID=f8e1d7a38872f9e8b2b5a477225e3769",
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var data = JSON.parse(body);
        var weather = data["weather"];
        res.send(
          "Todays weather in Dhaka: " +
            weather[0]["main"] +
            ",Level: " +
            weather[0]["description"]
        );
      } else {
        res.send("something went wrong!" + error);
      }
    }
  );
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/test.html");
  // res.render("/index");
});

app.listen(3000, function (req, res) {
  console.log("your server has started");
});

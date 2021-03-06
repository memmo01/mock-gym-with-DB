var express = require("express");
var bodyParser= require("body-parser");
var moment = require("moment")

var app = express();

var PORT = process.env.PORT || 8000;


var db = require("./models");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("./public"));



require("./routes/api-routes.js")(app);


db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

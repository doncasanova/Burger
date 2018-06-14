var orm = require("./config/orm.js");
var app = require("./config/connection.js");



// res.render("index")
app.get("/", function (req, res) {
    console.log("hello ")

    orm.insertUnDevoured( "burgers", "devoured", "0");

      res.render("./views/index");
    //   res.render("index")
    });

var orm = require("./config/orm.js");
require("./config/connection.js");



// res.render("index")
app.get("/", function (req, res) {
    console.log("hello ")
    orm.insertUnDevoured( "burgers", "devoured", "0");

      res.render("index");
    //   res.render("index")
    });

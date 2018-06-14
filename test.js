var express = require("express");
var bodyParser = require("body-parser");

var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3206,
  user: "root",
  password: "root",
  database: "burgers_db",
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

// Use Handlebars to render the main index.html page with the movies in it.
app.get("/", function (req, res) {
  console.log("hello world 2")
  connection.query("SELECT * FROM burgers WHERE devoured = 0;", function (err, data) {
    if (err) {
      return res.status(500).end();
    }
    // console.log(data)
    res.render("index", { burgers: data });
    // res.render("index")
  });
});

// Create a new movie
app.post("/burgers", function (req, res) {
  console.log("adding burger")
  connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [req.body.burger], function (err, result) {
    if (err) {
      return res.status(500).end();
    }

    // Send back the ID of the new burger
    res.json({ id: result.insertId });
    console.log({ id: result.insertId });
  });
});

// // Update a burger
app.put("/burgers/:id", function (req, res) {

  console.log("burger/:id route hit")
  console.log(req.params.id)
  // connection.query("UPDATE burgers SET burger_name = ? WHERE id = ?", [req.body.burger, req.params.id], function (err, result) {
  //   if (err) {
  //     // If an error occurred, send a generic server failure
  //     return res.status(500).end();
  //   }
  //   else if (result.changedRows === 0) {
  //     // If no rows were changed, then the ID must not exist, so 404
  //     return res.status(404).end();
  //   }
  //   res.status(200).end();

  });
// });

// // Delete a burger
// app.delete("/burgers/:id", function (req, res) {
//   connection.query("DELETE FROM burgers WHERE id = ?", [req.params.id], function (err, result) {
//     if (err) {
//       // If an error occurred, send a generic server failure
//       return res.status(500).end();
//     }
//     else if (result.affectedRows === 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     }
//     res.status(200).end();

//   });
// });

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});

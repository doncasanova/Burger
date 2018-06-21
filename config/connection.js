console.log('in the connection')
// Node Dependency
var mysql = require("mysql");
var connection;

// For Heroku Deployment vs. Local MySQL Database

 if(process.env.JAWSDB_URL){
 connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
 connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root', // Add your password
    database : 'burgers_db' // Add your database
  });
}

// var connection = mysql.createConnection({
//   port: 3206,
//   host: "localhost",
//   user: "root",
//   password: "root",
//   database: "burgers_db"
// });
// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;


// Import Node Dependencies
var connection = require("./connection.js");
console.log('in the orm')


// // Connect to MySQL database
// connection.connect(function (err) {
//   if (err) {
//     console.error('error connecting: ' + err.stack);
//     return;
//   };
//   console.log('connected as id in orm ' + connection.threadId);
// });


// Methods for MySQL commands
var orm = {

  selectAll: function (callback) {
    var queryString = 'SELECT * FROM burgers WHERE devoured = 0';
    // Run MySQL Query
    connection.query(queryString, {
      function(err, results) {
        connection.release();
        if (err) throw err;
        callback(results);
      }
    });
    console.log('your in the selectAll orm')
  },

  //InsertOne()
  InsertOne: function (burger_name, callback) {

    // Create a new timestamp
    //-----------------------------------
    var d = new Date();
    var timestamp = '' + d.getFullYear() + '-'; // must be string
    var month = '' + (d.getMonth() + 1); // must be string
    // handle 1 digit months
    if (month.length == 1) {
      month = '0' + month;
    }
    timestamp += month + '-';
    var day = '' + d.getDate(); // must be string
    // handle 1 digit day of month
    if (day.length == 1) {
      day = '0' + day;
    }
    timestamp += day + ' ';
    var hour = '' + d.getHours(); // must be string
    // handle 1 digit hour
    if (hour.length == 1) {
      hour = '0' + hour;
    }
    timestamp += hour + ':';
    var minute = '' + d.getMinutes(); // must be string
    // handle 1 digit minute
    if (minute.length == 1) {
      minute = '0' + minute;
    }
    timestamp += minute + ':';
    var second = '' + d.getSeconds(); // must be string
    // handle 1 digit second
    if (second.length == 1) {
      second = '0' + second;
    }
    timestamp += second;
    // ----------------------------------------------------------

    // Run MySQL Query
    connection.query('INSERT INTO burgers SET ?', {
      burger_name: burger_name,
      devoured: false,
      date: timestamp
    }, function (err, result) {
      if (err) throw err;
      callback(result);
    });

  },

  //updateOne()
  updateOne: function(burgerID, callback){

    // Run MySQL Query
    connection.query('UPDATE burgers SET ? WHERE ?', [{devoured: true}, {id: burgerID}], function (err, results) {
      if (err) throw err;
      callback(results);
    });
  }

}

module.exports = orm;

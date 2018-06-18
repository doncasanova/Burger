
//------------------------------------------------------------------------
console.log('in the burger')

// Node Dependency
var orm = require("../config/orm.js");

// create the code that will call the ORM functions using burger specific input for the ORM.

var burgers = {

  selectAll: function (callback) {
    orm.selectAll(function (res) {
      callback(res);
    });
  },

  insertOne: function (burger_name, callback) {
    orm.insertOne(burger_name, function (res) {
      callback(res);
    });
  },
  updateOne: function (burger_id, callback) {
    orm.update(burger_id, function (res) {
      callback(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burgers;

console.log(burgers)







//------------------------------------------------------------------------
















// * Export at the end of the `burger.js` file.



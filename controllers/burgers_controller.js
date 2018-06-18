
//--------------------------------------------------------------
console.log('in the burgers_controller')

var express = require("express");
var router = express.Router();
var burgers = require("../models/burger.js");

// create routes
//---------------------------------
// Index Redirect
router.get('/', function (req, res) {
  res.send('GET request to the homepage')
  res.redirect('/');
 
});
// Sends to DOM
router.get('/', function (req, res) {
  res.send('GET request to the homepage')
  burgers.selectAll(function (data) {
    var hbsObject = { burgers: data };
    res.render('/index', hbsObject);
  });
});

//Create a New Burger
router.post('/burger/create', function (req, res) {
  // res.send('POST request to the homepage')
  burger.insertOne(req.body.burger_name, function () {
    res.redirect('/index');
  });
});

//Devour a Burger
router.post('/burger/eat/:id', function (req, res) {
  // res.send('POST request to the homepage')
  burger.updateOne(req.params.id, function () {
    res.redirect('/index');
  });
});
//---------------------------------------------------

//Export routes
module.exports = router;
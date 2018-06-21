
//--------------------------------------------------------------
var express = require("express");
var router = express.Router();
var burgers = require("../models/burger.js");
// create routes
//---------------------------------

// Sends to DOM
router.get('/', function (req, res) {
  burgers.selectAll(function (data) {
    res.render('index', { burgers: data });
  });
});

//Create a New Burger
router.post('/burger/create', function (req, res) {

  console.log("hello" + req.body.insertId)
  burgers.insertOne(req.body, function () {
  //    // Send back the ID of the new burger
     res.json({ id: req.insertId });
     console.log({ id: req.insertId });
  });
});

//Devour a Burger
router.put('/burger/eat/:id', function (req, res) {
  burgers.updateOne(req.params.id, function () {
    res.json();
  });
});
//---------------------------------------------------

//Export routes
module.exports = router;
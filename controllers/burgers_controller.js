var express = require("express");
//Require Express DB management
var router = express.Router();
//Express Router as middleware for routing
var burger = require("../models/burger.js");

router.get('/', function (req, res) {
    res.redirect('/index');
});
//route to get data from DB
router.get('/index', function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = { burgers: data };
        //console.log(hbsObject);
        res.render('index', hbsObject);
    });
});
//route to create a burger
router.post('/burger/create', function (req, res) {
    burger.insertOne(req.body.burger_name, function () {
        res.redirect('/index');
    });
});
//route to eat/move a burger
router.post('/burger/eat/:id', function (req, res) {
    burger.updateOne(req.params.id, function () {
        res.redirect('/index');
    });
});

module.exports = router;
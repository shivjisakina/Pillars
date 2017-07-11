var express = require("express");
var router = express.Router();

//BASE
router.get('/', function(req, res) {

  res.render("index.handlebars");

});

router.get('/about', function(req, res) {

  res.render("about.handlebars");

});

router.get('/faq', function(req, res) {

  res.render("about.handlebars");

});

router.get('/search', function(req, res) {

  res.render("search.handlebars");

});

router.get('/termsofservice', function(req, res) {

  res.render("termsofservice.handlebars");

});

router.get('/tos', function(req, res) {

  res.render("termsofservice.handlebars");

});

//USER
router.get('/admin', function(req, res) {

  res.render("admin.handlebars");

});


router.get('/user', function(req, res) {

  res.render("user.handlebars");

});

router.get('/createaccount', function(req, res) {

  res.render("createaccount.handlebars");

});

//CHAT
router.get('/plinth', function(req, res) {

  res.render("chat.handlebars");

});


//RESOURSES
router.get('/chapiter', function(req, res) {

  res.render("resources.handlebars");

});




//TEST LINKS
router.get('/chattest', function(req, res) {

  res.render("chattest.handlebars");

});



module.exports = router;
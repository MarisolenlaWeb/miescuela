var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

/* GET home page. */

var title = "Mi Escuela";

router.get('/', function(req, res, next) {
  res.render('index', { title: title });

});

module.exports = router;

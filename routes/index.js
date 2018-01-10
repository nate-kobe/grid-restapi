var express = require('express');
var router = express.Router();

var dbService = require('../db/dbService');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/uploadText', dbService.addText);
router.get('/getUsersId', dbService.getUsers);

module.exports = router;

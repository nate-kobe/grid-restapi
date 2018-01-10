var bluebird = require('bluebird');
var config = require('config');

var options = {
  promiseLib: bluebird
};

var pgp = require('pg-promise')(options);
var dbConfig = config.get('db');
var db = pgp(dbConfig);

/* DB Queries */
function getUsers(req, res, next) {
	db.any('SELECT id_user FROM user_text').then(function(result) {
		res.status(200).json(result);
	});
}

function addText(req, res, next) {
	db.none('INSERT INTO user_text(text, id_user) VALUES(${text}, ${id_user})', req.body).then(function() {
		res.status(200).json('OK');
	});
}


/* Export db queries */
module.exports = {
	getUsers: getUsers,
	addText: addText
}


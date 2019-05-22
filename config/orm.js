const connection = require('./connection.js');

function selectAll () {
	connection.query(
		'SELECT * FROM burgers', 
		(err, result) => {
			// TODO: how to return array of burgers to the caller?
			// async await?
			// promise?
		});
}

function insertOne (burgerName) {
	connection.query(
		'INSERT INTO burgers (burger_name) VALUES (?)',
		[burgerName],
		(err, result) => {
			// TODO: how to return resulting id to the caller?
			// async await?
			// promise?
		});
}

// TODO: implement updateOne
function updateOne (burgerId) {
	
}

module.exports = {
	selectAll: selectAll,
	insertOne: insertOne,
	updateOne: updateOne,
}
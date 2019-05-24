const connection = require('./connection');

function doQueryAsync (sql, inputs) {
	return new Promise((resolve, reject) => {
		connection.query(sql, inputs, (err, result) => {
			if (err) reject(err, result);
			resolve(result);
		});
	});
}

const orm = {
	selectAll: (table) => {
		return doQueryAsync(
			'SELECT * FROM ??', 
			[table]);
	},
	insertOne: (table, column, value) => {
		return doQueryAsync(
			'INSERT INTO ?? (??) VALUES (?)',
			[table, column, value]);
	},
	updateOne: (table, id, column, value) => {
		return doQueryAsync(
			'UPDATE ?? SET ??=? WHERE id=? LIMIT 1',
			[table, column, value, id]);
	}
};

module.exports = orm;

const orm = require('../config/orm.js');

const burger = {
	getAll: () => {
		return orm.selectAll('burgers');
	},
	addOne: (burgerName) => {
		return orm.insertOne(
			'burgers', 'burger_name', burgerName);
	},
	devourOne: (id) => {
		return orm.updateOne(
			'burgers', id, 'devoured', true);
	}
};

module.exports = burger;

const express = require('express');
const burger = require('../models/burger.js');
const router = express.Router();

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.get('/', async (req, res) => {
	const burgers = await burger.getAll();
	res.render('index', { burgers });
});

router.post('/', async (req, res) => {
	const result = await burger.addOne(req.body.burgerName);
	if (result.warningCount > 0 || result.affectedRows !== 1) {
		res.status(500).end();
	}
	res.status(201).send({
		insertId: result.insertId
	});
})

router.put('/:id', async (req, res) => {
	const result = await burger.devourOne(req.params.id);
	if (result.warningCount > 0 || result.affectedRows !== 1) {
		res.status(500).end();
	}
	res.status(201).end();
});

module.exports = router;

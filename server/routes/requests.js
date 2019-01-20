//defaults
const express = require('express');
const data = require('./data');

//initialize endpoints
const router = express.Router();

router.get('/legs', (req, res) => {
	res.status(200).send(data.legs);
});

router.get('/stops', (req, res) => {
	res.status(200).send(data.stops);
});

router.get('/location', (req, res) => {
	res.status(200).send(data.driverLocation);
});

router.get('/bonus', (req, res) => {
	res.status(200).send(data.bonusDriver);
});

module.exports = router;

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

router.put('/driver', (req, res) => {
	const driver = data.driverLocation;
	console.log(req.body.body);
	driver[0].activeLegID = req.body.leg;
	driver[0].legProgress = req.body.progress;
	// if (!driver) {
	// 	// 404 - resource not found
	// 	res.status(404).send('not found');
	// 	return;
	// }
	console.log(driver);
	res.send(driver);
});

module.exports = router;

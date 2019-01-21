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

//parse sent data from react, push it to const "fake-database" send back response for state
router.put('/driver', (req, res) => {
	const driver = data.driverLocation;
	console.log();
	driver[0].activeLegID = JSON.parse(req.body.body).leg;
	driver[0].legProgress = JSON.parse(req.body.body).progress;

	console.log(driver);
	res.send(data.driver);
});

module.exports = router;

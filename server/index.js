//default values
const express = require('express');
const requests = require('./routes/requests');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;

//initalize server
const app = express();

//allow different origin requests
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	next();
});

//enable input/read from web requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//enable routes access
app.use(requests);

//host server
app.listen(port, () => {
	console.log(`listening on port ${port}....`);
});

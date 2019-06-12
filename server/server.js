const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRouter = require('./routes/apirouter');

const app = express();

//bodyParser
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

//cors
app.use(cors())
app.all('/', function(req, res, next) {
	res.header('Access-Control-Allow-Headers: Content-Type');
	res.header('Access-Control-Allow-Methods: POST');
	next();
});

//routing
app.use('/', apiRouter);

app.listen(3000);
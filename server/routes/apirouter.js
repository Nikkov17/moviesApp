const express = require('express');
const React = require('react');
const { renderToString } = require('react-dom/server');
const App = require('../../src/app/app');

const apiRouter = new express.Router();

apiRouter.get('*', function(req, res){
	res.send(`
	<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="utf-8" />
			<meta
			name="viewport"
			content="width=device-width, initial-scale=1, shrink-to-fit=no"
			/>
			<meta name="theme-color" content="#000000" />
			<link href="https://fonts.googleapis.com/css?family=Raleway:200" rel="stylesheet">
			<title>movieApp</title>
		</head>
		<body>
			<div id="root">${renderToString(<App />)}</div>
		</body>
		</html>
	`);
});

module.exports = apiRouter;
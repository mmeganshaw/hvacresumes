const express = require('express');
const path = require('path');

const app = express();

// exporting routes
module.exports = function(app) {
	// to the home page
	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname + '/../public/index.html'));
	});

	app.get('/bas-form', function(req, res) {
		res.sendFile(path.join(__dirname + '/../public/bas-form.html'));
	});

	app.get('/hvac-form', function(req, res) {
		res.sendFile(path.join(__dirname + '/../public/hvac-form.html'));
	});

	app.get('/bt-form', function(req, res) {
		res.sendFile(path.join(__dirname + '/../public/bt-form.html'));
	});

	// to everything that's not the home page
	app.get('*', function(req, res) {
		res.redirect('/');
	});
};

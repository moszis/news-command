'use strict';
 
var express      = require('express');
var http         = require('http');
var path         = require('path');
var favicon      = require('serve-favicon');
var morgan       = require('morgan');
var errorhandler = require('errorhandler');


module.exports = function() {
	var app = express();
	 
	// all environments
	app.set('views', path.join(__dirname, 'views'));
	app.engine('html', require('ejs').renderFile);
	 
	// express/connect middleware
	app.use(favicon(__dirname + '../../../client/favicon.ico'));
	app.use(morgan('dev'));
	 
	require('../routes/server-routes')(app);
	 
	// development only
	if ('development' === app.get('env')) {
	  app.use(errorhandler());
	}


	return app;
};

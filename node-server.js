'use strict'

var chalk = require('chalk');

var properties = require('./server/config/properties-loader');

var app = require('./server/config/express')();

app.listen(properties.APP_PORT);
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
module.exports  = app;

console.error(chalk.black.bgWhite('News Command started on port ' + properties.APP_PORT));
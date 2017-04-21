'use strict';

var express = require('express'),
    newsServices = require('../services/newsServices');

module.exports = function (app) {
    app.route('/news-services/rest/news/:limit').get(newsServices.getAllNews);
}

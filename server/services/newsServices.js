'use strict';

var chalk = require('chalk');
var newsServiceRestClient = require('../rest/news-servicesClient.js');
var processResponseHelper = require('../utils/rest.pass.through.callback.js');



exports.getAllNews = function (req, res) {
    getAllNews(req, res);
};

function getAllNews(req, res) {
    newsServiceRestClient.getAllNews(req.params.limit)
        .on('complete', processResponse);
    function processResponse(result, response) {
        processResponseHelper.processResponse(res, result, response);
    }
}


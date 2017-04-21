'use strict';

var properties = require('../config/properties-loader.js'),
    request = require('request'),
    rest = require('restler');



var NewsServiceRestClient = function () {
    this.newsServiceBaseUrl = properties.NEWS_SERVICE_BASE_URL;
};



NewsServiceRestClient.prototype.getAllNews = function (limit) {
    var getAllNewsUrl = this.newsServiceBaseUrl+"news/"+limit;
    return rest.get(getAllNewsUrl, { });
};


module.exports = new NewsServiceRestClient();
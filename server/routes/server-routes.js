var express = require('express');


module.exports = function (app) {
    app.use(express.static(__dirname + '/../../client'));

    require('../routes/news-service.routes')(app);

};
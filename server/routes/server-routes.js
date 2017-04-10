var express = require('express');


module.exports = function (app) {
    app.use(express.static(__dirname + '/../../client'));

    //require('../routes/test1.routes')(app);
    //require('../routes/test2.routes')(app);

};
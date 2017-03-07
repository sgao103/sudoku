var morgan = require('morgan');
var express = require('express');
var bodyParser = require('body-parser');

module.exports = function(app) {

  var apiRouter = express.Router();

  app.use(express.static(__dirname + '/../../client'));
  app.use(morgan('dev'));

  app.use(bodyParser.urlencoded({
    extended: true,
    limit: '50mb'
  }));

  app.use(bodyParser.json({
    limit: '50mb'
  }));

  require('../api/httpRoutes.js')(apiRouter);
  app.use('/api', apiRouter);

};

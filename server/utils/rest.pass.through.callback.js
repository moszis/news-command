var properties = require('../config/properties-loader');
var chalk = require('chalk');

/*util function for processing the restler callbacks and returns the response with no additional processing*/
exports.processResponse = function (res, result, response) {

console.log(result);
console.log(response.statusCode );
  if (response != null && response.statusCode != null) {
    console.log(chalk.red('\t\tprocessResponse response status code', response.statusCode));
  }

  if (result instanceof Error || !response ||  response.statusCode != properties.HTTP_SUCCESS_CODE) {
	  
    return res.status(response ? response.statusCode : properties.HTTP_INTERNAL_SERVER_ERROR_CODE)
      .send( { message : result || JSON.stringify(result) });
  }else {
    return res.status(properties.HTTP_SUCCESS_CODE).send(result);
  }

};

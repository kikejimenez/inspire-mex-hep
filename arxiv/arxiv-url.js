const request = require('request')
const inspire = require('./inspire-url.js')

module.exports = function(callback){

  request(inspire.url(), function(error, response, body) {
      if (!error && response.statusCode == 200) {   
          return callback(false,body);
      } else {            
          return callback(error,null);;
      }
  });

 
}
    


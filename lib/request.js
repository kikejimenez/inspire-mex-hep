const request = require('request')
const url = require('../config/inspire.js').url()

module.exports = function(callback){

  request(url, function(error, response, body) {
      if (!error && response.statusCode == 200) {   
          return callback(false,body)
      } else {            
          return callback(error,null)
      }
  });
 
}
    


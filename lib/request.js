const request = require('request')

module.exports = function(url,callback){

  request(url, function(error, response, body) {
      if (!error && response.statusCode == 200) {   
          return callback(false,body)
      } else {            
          return callback(error,null)
      }
  });
 
}
    


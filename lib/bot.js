var Twit = require("twit")
var config = require("../config/twitter.js")
var Twitter = new Twit(config)


module.exports = (params) => {
    return new Promise( function(resolve,reject){
        Twitter.post('statuses/update', params, function(err, data, response) {
            if (!err) {   
                return resolve(data)
            } else {            
                return reject(err)
            }
          })
        })
}


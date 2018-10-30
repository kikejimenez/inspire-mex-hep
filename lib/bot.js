var Twit = require("twit")
var config = require("../config/twitter.js")
var Twitter = new Twit(config)


module.exports = function(callback,params){
    Twitter.post('statuses/update', params, function(err, data, response) {
        if (!err) {   
            return callback(false,data)
        } else {            
            return callback(err,null)
        }
      })
}

var Twit = require("twit")
var config = require("../config/twitter.js")
var Twitter = new Twit(config)


module.exports = function(message){
    Twitter.post('statuses/update', { status: message }, function(err, data, response) {
        console.log(data)
      })
}

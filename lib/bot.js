var Twit = require("twit")
var config = require("../config/twitter.js")
var Twitter = new Twit(config)


module.exports = function(params){
    Twitter.post('statuses/update', params, function(err, data, response) {
        console.log(data)
      })
}

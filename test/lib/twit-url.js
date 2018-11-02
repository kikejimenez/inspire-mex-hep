const  inspireToTwitter = require('../../lib/inspire-to-twitter.js')
const bot = require('../../lib/bot.js')

var Twit = require("twit")
var config = require("../../config/twitter.js")
var Twitter = new Twit(config)

module.exports = function(){
  
params = {
    title:  {title: "testing...\n"},
    recid: "451647"
  }


      describe("bot.js", function(){
        it('Update and destroy a message.',function(done){        
          bot(function(err,data){
               if(err){
                done()
                assert(typeof err === "undefined", true)
               } else {
                 Twitter.post('statuses/destroy/:id', { id: data.id_str },
                       function (err, data, response) {                   
                        done()
                        assert(typeof err === "undefined", true)
                       })     
                }           
          }
          ,inspireToTwitter(params))
        })
          
      })
      
      
 }      
var   nock = require('nock')
const inspireToTwitter = require('../../lib/inspire-to-twitter.js')
const bot = require('../../lib/bot.js')
const expect = require('chai').expect



var Twit = require("twit")
var config = require("../../config/twitter.js")
var Twitter = new Twit(config)

module.exports = function(){
 /*
 var nockTwit = nock('https://api.twitter.com')
                .get('/1.1/direct_messages/events/new.json')
                .reply(200, {
                    "event": {
                      "type": "message_create",
                      "message_create": {
                        "target": {
                          "recipient_id": "RECIPIENT_USER_ID"
                        },
                        "message_data": {
                          "text": "Hello World!",
                        }
                      }
                    }
                    }
                 )
                 */
  
 const destroyTwit =  (data) => {
     return new Promise(function(resolve,reject) {

      Twitter.post('statuses/destroy/:id', { id: data.id_str }, function(err, data, response) {
        if (!err) {   
            return resolve('twit has been destroyed')
        } else {            
            return reject('twit could not been destroyed')
        }
       })
    }) 

 }

params = {
    title:  {title: "testing...\n"},
    recid: "451647"
  }

      describe("bot.js", function(){
        it('Update and destroy a message.',  async () => {
          const result = await bot(inspireToTwitter(params))
                               .then(destroyTwit)                       
                               .catch()
          expect(result).to.equal('twit has been destroyed') 
        })
      })
 }      
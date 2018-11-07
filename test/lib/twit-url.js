var   nock = require('nock')
const inspireToTwitter = require('../../lib/inspire-to-twitter.js')
const bot = require('../../lib/bot.js')
const expect = require('chai').expect


var Twit = require("twit")
var config = require("../../config/twitter.js")
var Twitter = new Twit(config)

module.exports = function(){


 nock('https://api.twitter.com:443', {"encodedQueryParams":true})
 .post('/1.1/statuses/update.json')
 .query({"status":"testing...%0A%0A%20http%3A%2F%2Finspirehep.net%2Frecord%2F451647"})
 .reply(200, [{'message':'Message created'}]);

params = {
    title:  {title: "testing...\n"},
    recid: "451647"
  }

      describe("bot.js", function(){
        it('twit a message.',  async () => {
          const result = await bot(inspireToTwitter(params))
                               .then((response) => response[0].message)
  
          expect(result).to.equal('Message created') 
        })
      })
 }      
var nock = require('nock')

const inspireToTwitter = require('../../lib/inspire-to-twitter.js')
const bot = require('../../lib/bot.js')

var Twit = require("twit")
var config = require("../../config/twitter.js")
var Twitter = new Twit(config)


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


   nock.recorder.rec()

   bot(inspireToTwitter(params))
   .then(destroyTwit)                       
   .catch((message) => Promise.resolve(message))
   .then((message) =>  {
       nock.restore()
    })
  

 
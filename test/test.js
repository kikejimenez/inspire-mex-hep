const   assert = require('chai').assert
const publications = require('../request.js')
const twit = require('../bot.js')


publications(function(err, data){
    if(err) return console.log(err);
      console.log(data)
      console.log(JSON.parse(data)[0].title.title)
     twit(JSON.parse(data)[0].title.title)
   }
   )

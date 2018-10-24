const publications = require('./request.js')
const twit = require('./bot.js')


publications(function(err, data){
    if(err) return console.log(err);
      console.log(data)
      //twit(data)
   }
   )
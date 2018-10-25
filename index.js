const publications = require('./lib/request.js')
const twit = require('./lib/bot.js')



publications(function(err, data){
    if(err) return console.log(err);
    JSON.parse(data)
        .forEach((publication) => twit(publication.title.title))
   }
   )

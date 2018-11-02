const publications = require('./lib/request.js')
const twit = require('./lib/bot.js')
const inspireToTwitter = require('./lib/inspire-to-twitter.js')
const inspireUrl = require('./config/inspire.js')


    inspireParameters = {
        countryCode: 'US',
        daysBefore: 1
    }

    publications(inspireUrl(inspireParameters).url(),function(err, data){
        if(err) return console.log(err);
        JSON.parse(data)
            .forEach((publication) => twit(function(err, data){
                                           if(err) return console.log(err);
                                            console.log(data)
                                           }
                                           ,inspireToTwitter(publication))                
            )
       })



    
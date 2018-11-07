const publications = require('./lib/request.js')
const twit = require('./lib/bot.js')
const inspireToTwitter = require('./lib/inspire-to-twitter.js')
const inspireUrl = require('./config/inspire.js')


    inspireParameters = {
        countryCode: 'MX',
        daysBefore: 2
    }

    publications(inspireUrl(inspireParameters).url())
    .then( function(publications){
            var promise = Promise.resolve('Initializing..')
            var publicationsArray = JSON.parse(publications)
            var publicationStatus = publicationsArray.map( function(publication){
                return  {
                         'status':'succeed', 
                         'publication':  publication.title.title
                        }
            })
            publicationsArray.forEach( (publication) => {
                promise = promise
                .then( function(data){
                    return twit(inspireToTwitter(publication))
                })
                .catch(
                    function(error){
                        publicationStatus.status = 'fail' 
                })    
            })
            if(publicationStatus.length == 0) return   console.log('No new publications')     
            console.log('list of publications. \n',publicationStatus)    

    })
    .catch( function(err){
        console.log('inspire:\n', err)
    })
    



    
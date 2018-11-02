const inspire = require('../config/inspire.js')

module.exports = function(publication){
   const parameters = {}
   if(publication.title.title) parameters.status = publication.title.title 
   if(publication.recid) parameters.status  += "\n http://inspirehep.net/record/" + publication.recid
   return parameters
}
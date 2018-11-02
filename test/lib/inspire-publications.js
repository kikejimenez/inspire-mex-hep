//TEST
const publications = require('../../lib/request.js')
const inspireUrl = require('../../config/inspire.js')
const assert = require('assert')

 module.exports=function(){

  inspireParameters = {
    countryCode: 'MX',
    daysBefore: 4
}

              describe('publications.js', function() {   
              it('When  scientific publications are found, they are returned as arrays', function(done){   
                publications( inspireUrl(inspireParameters).url(),function(err,data){   
                  if(!err){
                     assert.equal(JSON.parse(data).length ? true : false, true)                   
                  } 
                  done()  
              })            
           }) 
        }) 

 }       



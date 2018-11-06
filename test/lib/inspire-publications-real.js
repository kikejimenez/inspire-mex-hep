//TEST
const publications = require('../../lib/request.js')
const inspireUrl = require('../../config/inspire.js')
const assert = require('assert')

 module.exports=function(){

     inspireParameters = {
          countryCode: 'US',
          daysBefore: 4
     }
     
     describe('publications.js', function() {  
      it('When publications are found  it should return an array', async () => {
        const result = await publications(inspireUrl(inspireParameters).url())
        assert(result.length > 0, true)                      
      })
     })


 }


              
          
    



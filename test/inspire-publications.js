 //TEST
 const publications = require('../lib/request.js')
 const assert = require('assert')

module.exports=function(){

              describe('publications()', function() {   
              it('When  scientific publications are found, they are returned as arrays', function(done){   
                publications(function(err,data){              
                  assert.equal(JSON.parse(data).length ? true : false, true)   
                  done()  
              })            
           }) 
        }) 

}       



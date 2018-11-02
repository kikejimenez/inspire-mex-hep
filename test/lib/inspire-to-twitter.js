const  createRecordUrl = require('../../lib/inspire-to-twitter.js')
assert = require('assert')


module.exports = function() {

   publication ={
     title: { 
             title: "When the C in CP does not matter: anatomy of order-4 CP eigenstates and their Yukawa interactions "
            },
     recid : "1608.08922"
   }


describe("create-parameters.js", function(){
  it('publication.title.title has the same value as createRecordUrl(publication).status',function(done){
  assert(publication.title.title +  "http://inspirehep.net/record/" + publication.recid, createRecordUrl(publication).status)
  done()
  })

})


}

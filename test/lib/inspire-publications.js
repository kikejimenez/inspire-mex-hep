var nock = require('nock')
const publications = require('../../lib/request')
const inspireUrl = require('../../config/inspire.js')
const expect = require('chai').expect

module.exports=function(){

  inspireParameters = {
    countryCode: 'US',
    daysBefore: 4
}

    var nockInspire = nock('http://inspirehep.net')
                .get('/search?p=find+cc+'
                      + inspireParameters.countryCode + '+and+de+%3E%3D+today+-+'
                      + inspireParameters.daysBefore + '&rg=10&of=recjson&ot=title,recid'
                    )
                .reply(200, '['+
                        '{"recid": 1701918, "title": {"title": "Bridging Time-Like and Space-Like N* Form Factors"}},'+
                        '{"recid": 1701547, "title": {"title": "Tests of General Relativity with GW170817"}}'+
                        ']'
                 )
  
 
    
    describe('publications.js', function() {  
     it('Should return publication with recid = 1701918 ', async () => {
       const result = await publications(inspireUrl(inspireParameters).url())
                            .then( (publications) => Promise.resolve( 
                                                         JSON.parse(publications)
                                                        .filter( (
                                                          (publication) => publication.recid == 1701918
                                                        ))
                                                        [0].title.title                                     
                            ))
                            .catch()
       expect(result).to.equal("Bridging Time-Like and Space-Like N* Form Factors")                      
     })
    })
 
  
}




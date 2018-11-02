//TEST
const inspireConfig = require('../../config/inspire.js')
const assert = require('assert')

 module.exports=function(){

           //console.log(inspireConfig('mexico',1).url())
    
              describe('/config/inspire.js', function() {  
                  
              const inspireUrl = inspireConfig({countryCode:'brasil', daysBefore: 3}).url()  

              it('Must return ' + inspireUrl, function(){  
                   assert.equal( inspireUrl, 
                   'http://inspirehep.net/search?p=find+cc+brasil+and+de+>'+
                   '%3D+today+-+3&rg=10&of=recjson&ot=title,recid') 
   
           }) 
        }) 
        
    }

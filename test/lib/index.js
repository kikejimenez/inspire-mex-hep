const publications = require('../../lib/request.js')
//const twit = require('./lib/bot.js')

const format = require('../../lib/create-parameters.js')
var assert = require('assert')
//module.exports = function(){


  //describe('index.js',function(){
  //  it('formatted publications are strings ', function(done){

        publications(function(err, data){
            if(err) return console.log(err);
           // console.log(data)
            JSON.parse(data)
             .forEach(function(publication){
                console.log(format(publication))
                assert(typeof format(publication),'string') 
             })
         })
    
    
  //    })
        
    //})
   
 
//}



const  createParameters = require('../../lib/create-parameters.js')
const twit = require('../../lib/bot.js')

module.exports = function(){
params = {
    title:  {title: "testing...\n"},
    recid: "451647"
  }


      describe("twit-url.js", function(){
        it('this params must be error-free when twitted',function(){

          twit(createParameters(params))
       //   assert(true,true)
          })
      })
      
      
 }      
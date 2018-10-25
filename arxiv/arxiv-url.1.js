const request = require('request')
const inspire = require('./inspire-url.js')

module.exports = function(callback){
/*
IsPublicationArxiv = function(inspirePublication) {
 
   if(inspirePublication.system_control_number.institute){
     return inspirePublication.system_control_number.institute == "arXiv"
   } else {
     return inspirePublication.system_control_number
            .some(
            (item)=> item.institute == "arXiv"
            )
   }
   
 }


 getArxivCode = function(inspirePublication) {

  if(inspirePublication.system_control_number.institute){
    return inspirePublication.system_control_number
                             .value
                             //.slice(-10)
  } else {
    return inspirePublication.system_control_number
           .find((item)=> item.institute == "arXiv")
           .value
          // .slice(-10)
  }
  
}
*/
 
  request(inspire.url(), function(error, response, body) {
      if (!error && response.statusCode == 200) {
        result = //JSON.stringify(                  
                   //JSON.parse(body)
                  body 
                  //.filter(IsPublicationArxiv)
                 // .map(getArxivCode)
            //    )     
          return callback(false,result);
      } else {            
          return callback(error,null);;
      }
  });

 
}
    


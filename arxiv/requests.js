// The 'https' module can also be used

const index = require('./index.js');


// Example route

//module.exports=function(url){
  // 
// request(url, function (error, response, body) {
//     if(error) throw error;
//     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//     console.log('body:', body); // Print the HTML for the Google homepage.
// })}

exports.arxivUrls = function(){
   
}

 module.exports= function(url){

    
    request(url, function (error, response, body) {
        if(error) throw error;
   
    }); // Print the HTML for the Google homepage.
    }

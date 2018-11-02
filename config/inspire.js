

//Inspire-HEP search especifications

module.exports = function(inspireParameters){
        
        const urlObj = {
                      //defaults
                 searchPage:"http://inspirehep.net/search?",
                 recordsDisplayed: 10,  
                 outputFormat: "recjson",
                 outputTags: [
                    "title",
                    "recid"
                     ], 
              }
  
        urlObj.searchOptions =  [
                                 "cc+" + inspireParameters.countryCode,
                                 "and+de",
                                 ">%3D+today",
                                 "-+" + inspireParameters.daysBefore
                                ]

        urlObj.url = function(){
            return  urlObj.searchPage +
                    "p=find+" + urlObj.searchOptions.join("+")+
                    "&"+"rg=" + urlObj.recordsDisplayed +
                    "&"+"of=" + urlObj.outputFormat +  
                    "&"+"ot=" + urlObj.outputTags.join()       
    }

    return urlObj
}

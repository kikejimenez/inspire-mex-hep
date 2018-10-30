

//Inspire-HEP search especifications

module.exports = {
        searchPage:"http://inspirehep.net/search?",
        recordsDisplayed: 10,  
        outputFormat: "recjson",
        outputTags: [
                   "title",
                 "recid"
                    ],    
        searchOptions: [
        "cc+mexico",
        "and+de+>%3D+today+-+3"
        ],
        url: function(){
            return  this.searchPage+
                    "p=find+"+this.searchOptions.join("+")+
                    "&"+"rg=" + this.recordsDisplayed +
                    "&"+"of=" + this.outputFormat +  
                    "&"+"ot=" + this.outputTags.join()       
    }
}
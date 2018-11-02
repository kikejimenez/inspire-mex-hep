const  inspirePublications = require('./lib/inspire-publications.js')
const  inspireToTwitter = require('./lib/inspire-to-twitter.js')
const  inspireUrl = require('./lib/inspire-url.js')
const  twit = require('./lib/twit-url.js')


inspireUrl()
inspireToTwitter()
twit()
inspirePublications()
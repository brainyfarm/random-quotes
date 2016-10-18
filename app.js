/* Random Quote Console app */ 
const request = require('request');
const requestPromise = require('request-promise');
const API_URL = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';

/**
 * @func getQuote
 * Fetches a random quote from the server
 */
const getQuote = (() => {
    
    /* request options */
    const OPTIONS = {
        uri: API_URL,
        json: true
    };

    /* Fetch a quote */
    requestPromise( OPTIONS )
        /* Successful call */
        .then( (response) => {
            if ( !response )
                getQuote();

            let quoteText = response.quoteText;
            let author = response.quoteAuthor || "Unknown";
            let fullQuote = quoteText + "- " + author
            
            printQuote( fullQuote );
        })

        /* Handling errors */
        .catch( (err) => {
            console.log("Unable to retrieve quote, try again");
        })
})();

/**
 * @func printQuote 
 * prints a string to the console
 * @param {string} - String to print to the console.
 */
let printQuote = (fullQuote) => {
    console.log( fullQuote )
} 
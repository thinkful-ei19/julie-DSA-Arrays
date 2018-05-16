'use strict';

// Input: tauhida parveen
// Output: tauhida%20parveen


function urlString(url) {
    let newString = url.replace(/ /g,"%20");
    return newString; 
}

console.log(urlString("jay and bey"))
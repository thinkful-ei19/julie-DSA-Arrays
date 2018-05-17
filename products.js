'use strict';
//Given an array of numbers, write an algorithm to find out the 
//products of every number, except the one at that index.

const exampleArr = [1, 3, 9, 4];
//Output:[108, 36, 12, 27]

function products(arr) {
    // for(var i = 0; i < arr.length; i++) {
    //     let firstIndex = arr.substring(i, i+1);
    //     let remainingIndex = arr.substring(i+1);
        
    // }
    const rearr = []
    for(var i = 0; i < arr.length; i++) {
        let num = 1;
        for(var j= 0; j < arr.length; j++) {
            //ignore when index matches, when it doesn't match multiply array
            if(i != j) {
                // console.log('anything') should return 12 times
                num = num * arr[j];

            }
        }
        rearr.push(num)
    }
    return rearr;
}

console.log(products(exampleArr))
//O(n^2) - Polynomial Time 
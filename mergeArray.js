'use strict';

const input1 = [1, 3, 6, 8, 11]
const input2 = [2, 3, 5, 8, 9, 10]

function mergeArrays(inp1, inp2) {
    const input3 = [...inp1, ...inp2]
    // return input3.sort();
    input3.sort(function(a,b){
        return a-b;
    });
    console.log(input3)
}

mergeArrays(input1, input2)
//O(n) - Linear Time
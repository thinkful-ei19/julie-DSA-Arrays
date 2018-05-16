'use strict';

const example = [4,6, -3, 5, -2, 1]

function maxSum(arr) {
    let sum = 0;
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if( sum > max) {
            max = sum;
        }
    }

    return max;
}

console.log(maxSum(example));
//O(n) - Linear Time
'use strict';

const arr = [2, 4, 6, 9]

function filterArray(array) {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        if(array[i] >=5) {
            newArr.push(array[i]);
        }
    }
    return newArr;
}

console.log(filterArray(arr));
//O(n) - Linear Time
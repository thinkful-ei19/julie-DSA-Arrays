'use strict';

//Write an algorithm which searches through a 2D array, 
//and whenever it finds a zero should set the entire row and column to zero.

    const Input=
    [[1,0,1,1,0],
    [0,1,1,1,0],
    [1,1,1,1,1],
    [1,0,1,1,1],
    [1,1,1,1,1]];
// Output:
// [[0,0,0,0,0],
// [0,0,0,0,0],
// [0,0,1,1,0],
// [0,0,0,0,0],
// [0,0,1,1,0]];

function twoD(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            newArray.push(0)
        }
        for (let j = 0; j < array.length; j++) {

        }
    }
}

//going through 2 sets of arrays
//grid
//for loop is going through x coord
//based on the i and j value, x, y coordinate and update
//nested for loop 

//O(n^2) - Polynomial Time 

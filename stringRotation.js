'use strict';

//making sure it can be in "rotation" word will sound out the original input


// Input: amazon, azonam

// Output: true


function strRotation(input1, input2) {
    const rotation = input1 + input2;
    return rotation.includes(input1);
}

console.log(strRotation('amazon', 'azonam'));

// O(n) - Linear Time
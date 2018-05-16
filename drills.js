'use strict';

const mem = require('./memory');
const memory = new mem();

class Array {
    constructor() {
        this.length = 0;
        this._capacity = 0;
        this.ptr = memory.allocate(this.length);
    }

    push(value) { 
        if(this.length >= this._capacity) {
          this._resize((this.length + 1) * Array.SIZE_RATIO);
        }
        memory.set(this.ptr + this.length, value);
        this.length++;
      }
    //O(1) & O(n)

    _resize(size) {
        //_ helper other core functions of array class 
        //push pop are public 
        //this is a private function
        //just a naming convention to display private function 
        const oldPtr = this.ptr;
        this.ptr = memory.allocate(size);
        if(this.ptr === null) {
            throw new Error('Out of memory');
        }
        memory.copy(this.ptr, oldPtr, this.length);
        memory.free(oldPtr); //free isn't doing anything 
        //automatically calls free function in newer tech
        //mock up to tell you when resizing, other spaces are being freed up
        this._capacity = size;
    }
    //O(n) 

    get(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        return memory.get(this.ptr + index);
    }
    //O(1)

    pop() {
        if (this.length == 0) {
            throw new Error('Index error');
        }
        const value = memory.get(this.ptr + this.length - 1);
        this.length--;
        return value;
    }
    //O(1)

    insert(index, value) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }

        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }

        memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
        memory.set(this.ptr + index, value);
        this.length++;
    }
    //O(1) && O(n)

    remove(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
        this.length--;
    }
    //O(1) 
}

function main(){
    Array.SIZE_RATIO = 3;

    //create an instance of the array class
    let julieArr = new Array();

    //add an item to the array
    julieArr.push(3);
    //Array { length: 1, _capacity: 3, ptr: 0 }
    julieArr.push(5);
    //Array { length: 2, _capacity: 3, ptr: 0 }
    julieArr.push(15);
    //Array { length: 3, _capacity: 3, ptr: 0 }
    julieArr.push(19);
    //Array { length: 4, _capacity: 12, ptr: 3 }
    julieArr.push(45);
    //Array { length: 5, _capacity: 12, ptr: 3 }
    julieArr.push(10);
    //Array { length: 6, _capacity: 12, ptr: 3 }
    julieArr.push(2);
    //Array { length: 6, _capacity: 12, ptr: 3 }
    //for length, there are 6 items, capacity refers to the size
    //and how many times you can hold without needing to resize
    //pointer first set at that capacity so moved to a new location
    //pointer in array tells first location of array
    //before array started at address 0, but over capacity, so had to find new location which gives bigger capacity
    //copy and move to new one 

    julieArr.pop();
    //Array { length: 6, _capacity: 12, ptr: 3 }
    julieArr.pop();
    //Array { length: 5, _capacity: 12, ptr: 3 }
    julieArr.pop();  
    //Array { length: 4, _capacity: 12, ptr: 3 }  
    console.log(julieArr);
    //pop takes off one keys of the array
    //slots that the elements in array are still bare 
    //just holding values to be overwritten
    console.log(julieArr.get(0));
    //3
    julieArr.remove(0);
    julieArr.remove(0);
    julieArr.remove(0);
    julieArr.push("tauhida");
    julieArr.remove(0);    
    console.log(julieArr);
    // pushing tauhida NaN has to do with memory CLASS
    // when inserting string, memory class accepts numbers
    // array is contiguous block of memory and wants to keep it in same type

}





// js does things in a certain way, other language won't do it the same
// js class has been implemented in a way that can accept different types
// have array but each block is set to different size (min and max)
// this is done at js at run time, it isn't pre allocated
// do you understand the type? and understand why it's being restricted?









//for solving interview questions, using built in arrays
//1 change url, keep in mind what happens in memory 
 

main();
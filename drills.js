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
        const oldPtr = this.ptr;
        this.ptr = memory.allocate(size);
        if(this.ptr === null) {
            throw new Error('Out of memory');
        }
        memory.copy(this.ptr, oldPtr, this.length);
        memory.free(oldPtr);
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
    // Array { length: 1, _capacity: 3, ptr: 0 }
    julieArr.push(5);
    julieArr.push(15);
    julieArr.push(19);
    julieArr.push(45);
    julieArr.push(10);
    //
    console.log(julieArr);
}


main();
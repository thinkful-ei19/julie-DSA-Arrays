'use strict';

const memory = require('./memory');


class juArray {
    constructor() {
        this.length = 0;
        this.ptr = memory.allocate(this.length);
    }

    push(value) {
        if(this.length >= this._capacity) {
            this._resize((this.length +1) * Array.SIZE_RATIO);
        }
        memory.set(this.ptr + this.length, value);
        this.length++;
    }

}
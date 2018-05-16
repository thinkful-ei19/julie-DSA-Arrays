'use strict';

//Input:'Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'
//Output: 'Bttl f th Vwls: Hw vs. Grzny'


function removeCharacters(toBeRemoved, sentence) {
    let str = '';
    for(let i = 0; i < sentence.length; i++) {
        let flag = true;
        // console.log(individChar);
        for(let j = 0; j < toBeRemoved.length; j++) {
            // console.log(toBeRemoved[j])
            if(sentence[i] === toBeRemoved[j]) {
                //unmatched.push(toBeRemoved[j])
                flag = false;
                // let newInput = toBeRemoved.replace(sentence, '');
            }
        }
        if(flag) {
            // unmatched.push(sentence[i])
            str += sentence[i];
        } 

    } 
    // for(let i = 0; i < unmatched.length; i++) {
    //     str += unmatched[i];
    // }
    return str
}

console.log(removeCharacters('aou','Battle of the Vowels: Hawaii vs. Grozny'))

//O(n^2) - Polynomial Time
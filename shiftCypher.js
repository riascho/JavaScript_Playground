/** A shift cipher takes a plain text message and shifts each letter forward in the alphabet by a given number. For example, a shift cipher with a shift of 1 would turn the string 'hello' to 'ifmmp'.

Create a class ShiftCipher that takes the numerical value of the shift as a constructor parameter. The class should have two methods:

encrypt: takes a plain text string and returns a capitalized string with each letter shifted forward in the alphabet based on the set shift value.
decrypt: takes an encrypted message and returns a lower case string with each letter shifted back in the alphabet based on the set shift value.
In both methods, any character outside the alphabet should remain the same.
But if a character is shifted outside the alphabet in either direction it should be wrapped around to the other side. For example, encrypting a y with a shift of 4 results in C and decrypting an A with a shift of 1 result in z.
Example:

const cipher = new ShiftCipher(2);
cipher.encrypt('I love to code!'); // returns 'K NQXG VQ EQFG!'
cipher.decrypt('K <3 OA RWRRA'); // returns 'i <3 my puppy' 

Notes:

unicode character is &#nnnn; -> where nnnn is decimal number

toUpperCase(), toLowerCase(), charCodeAt() and fromCharCode()
*/

class ShiftCipher {
    constructor(shiftValue) {
        shiftValue;
    }
}

// encode letter from string (only if between range of alphabet letters)
// string.charCodeAt(i);

// decode unicode number
// String.fromCharCode(74);

// only consider alphabet letters!
// unicodes between 65 - 90 (uppercase)
// unicodes between 97 - 122 (lowercase)

const sentence = 'I love puppies <3';
const sentence2 = sentence.toUpperCase();
let unicodes;
for (let i = 0; i < sentence2.length; i++) {
    let letter = sentence2.charCodeAt(i);
    if ((letter > 64) & (letter < 91)) {
        letter += 2;
    }
    unicodes += String.fromCharCode(letter);
}
console.log(unicodes);

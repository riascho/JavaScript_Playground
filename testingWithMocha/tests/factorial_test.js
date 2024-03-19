var assert = require('assert');
var Calculate = require('../factorial.js');

describe('Calculate', () => {
    describe('.factorial', () => {
        it('returns factorial of 12!', () => {
            const expectedResult = 479001600;
            const input = 12;
            const result = Calculate.factorial(input);
            assert.strictEqual(result, expectedResult);
        });
        it('returns factorial of 5!', () => {
            const expectedResult = 120;
            const input = 5;
            const result = Calculate.factorial(input);
            assert.strictEqual(result, expectedResult);
        });
        it('returns factorial of 3!', () => {
            const expectedResult = 6;
            const input = 3;
            const result = Calculate.factorial(input);
            assert.strictEqual(result, expectedResult);
        });
        it('returns factorial of 1!', () => {
            const expectedResult = 1;
            const input = 1;
            const result = Calculate.factorial(input);
            assert.strictEqual(result, expectedResult);
        });
        it('returns factorial of 0!', () => {
            const expectedResult = 1;
            const input = 0;
            const result = Calculate.factorial(input);
            assert.strictEqual(result, expectedResult);
        });
        it('throws error when input is not a number', () => {
            const input = '3';
            assert.throws(() => {
                Calculate.factorial(input);
            }, TypeError);
        });
    });
});

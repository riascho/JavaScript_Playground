const Calculate = {
    factorial(number) {
        if (typeof number !== 'number') {
            throw TypeError('not a number!');
        }
        let result = 1;
        if (number > 1) {
            console.time('factorial test WHILE loop');
            while (number > 1) {
                result *= number;
                number -= 1;
            }
            console.timeEnd('factorial test WHILE loop');
            console.time('factorial test FOR loop');
            for (let i = 1; i <= number; i++) {
                result *= i;
            }
            console.timeEnd('factorial test FOR loop');
        }
        return result;
    }
};

module.exports = Calculate;

console.log(Calculate.factorial(4));
console.log(Calculate.factorial('4'));

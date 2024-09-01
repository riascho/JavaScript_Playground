var findNumbers = function (nums) {
    let count = 0;
    nums.map((num) => {
        if (num.toString().length % 2 === 0) {
            count++;
        }
    });
    return count;
};

const nums = [12, 345, 2, 6, 7896];
console.log(findNumbers(nums)); // Output: 2

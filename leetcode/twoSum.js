/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// try brute force first!

var twoSum = function (nums, target) {
    let indices = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                indices.push(i, j);
            }
        }
    }
    return indices;
};

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
console.log(twoSum([3, 3], 6)); // [0, 1]
console.log(twoSum([-3, 4, 3, 90], 0)); // [0, 2]

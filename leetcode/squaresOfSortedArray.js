// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

const nums = [-4, -1, 0, 3, 10];

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    return nums.map((num) => num ** 2).sort((a, b) => a - b);
};

console.log(sortedSquares(nums)); // [0, 1, 9, 16, 100]

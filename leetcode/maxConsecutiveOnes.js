// Given a binary array nums, return the maximum number of consecutive 1's in the array.

const dvds = new Array(15).fill(0).map(() => Math.floor(Math.random() > 0.5 ? 1 : 0));
console.log(dvds);

var findMaxConsecutiveOnes = function (nums) {
    let count = 0;
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            count++;
            max = Math.max(max, count);
        } else {
            count = 0;
        }
    }
    return max;
};
console.log(findMaxConsecutiveOnes(dvds));

// Next challenge: return the max consecutive count of either 0 or 1 !

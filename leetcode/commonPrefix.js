/**
 * @param {string[]} strs
 * @return {string}
 */

const example1 = ['flower', 'flow', 'flight'];
const example2 = ['dog', 'racecar', 'car'];

var longestCommonPrefix = function (strs) {
    // sort for the shortest word to be the first (so to limit iterations)
    strs.sort((a, b) => a.length - b.length);
    const commonPrefix = [];
    for (let i = 0; i < strs[0].length; i++) {
        // the shortest word will be the max of iterations
        if (strs.every((str) => str[i] === strs[0][i])) {
            // only return letters that are the same compared to the index of the letter of the first word
            commonPrefix.push(strs[0][i]);
        } else {
            break;
        }
    }
    return commonPrefix.join('');
};

console.time('with sorting first');
console.log(longestCommonPrefix(example1)); // "fl"
console.log(longestCommonPrefix(example2)); // ""
console.timeEnd('with sorting first');

var longestCommonPrefix2 = function (strs) {
    // sort for the shortest word to be the first (so to limit iterations)
    // strs.sort((a, b) => a.length - b.length);
    const commonPrefix = [];
    for (let i = 0; i < strs[0].length; i++) {
        // the shortest word will be the max of iterations
        if (strs.every((str) => str[i] === strs[0][i])) {
            // only return letters that are the same compared to the index of the letter of the first word
            commonPrefix.push(strs[0][i]);
        } else {
            break;
        }
    }
    return commonPrefix.join('');
};

console.time('without sorting first');
console.log(longestCommonPrefix2(example1)); // "fl"
console.log(longestCommonPrefix2(example2)); // ""
console.timeEnd('without sorting first');

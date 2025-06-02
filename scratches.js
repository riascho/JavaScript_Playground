function uniqueLength(nums) {
    if (nums.length === 0) {
        return 0;
    }
    let i = 0;
    let j = 1;
    while (j < nums.length) {
        if (nums[j] != nums[i]) {
            i++;
            nums[i] = nums[j];
            j++;
        } else {
            j++;
        }
    }
    return i + 1;
}

// Should return 5
const result = uniqueLength([1, 1, 2, 3, 4, 5, 5]);
console.log(result);

// Should return 1
const result2 = uniqueLength([1, 1, 1, 1]);
console.log(result2);

var canConstruct = function (ransomNote, magazine) {
    for (let i = 0; i < ransomNote.length; i++) {
        if (magazine.includes(ransomNote[i])) {
            magazine = magazine.replace(ransomNote[i], '');
        } else return false;
    }
    return true;
};

console.log(canConstruct('a', 'aab')); //true
console.log(canConstruct('abb', 'aab')); //false

const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const weekday = weekdays[(Math.random() * 7) | 0];
console.log(weekdays); //random weekday

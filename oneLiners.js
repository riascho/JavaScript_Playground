// JavaScript One-Liners to Use in Every Project

// 1: Capitalize Text
const capitalize = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
const username = "robert";
capitalize(username) // "Robert";

// 2: Calculate Percent
const calculatePercent = (value, total) => Math.round((value / total) * 100)
const questionsCorrect = 6;
const questionsTotal = 11;
calculatePercent(questionsCorrect, questionsTotal); // 55

// 3: Get random element
const getRandomItem = (items) => items[Math.floor(Math.random() * items.length)];
const items = ["Nicely done!", "Good job!", "Good work!", "Correct!"];
getRandomItem(items); // "Good job!"

// 4: Remove Duplicate Elements
const removeDuplicates = (arr) => [...new Set(arr)];
const monthList = ["Jan", "Feb", "Feb", "Mar"];
removeDuplicates(monthList); // ['Jan', 'Feb', 'Mar']

// 5: Sort Elements by Key
const sortBy = (arr, key) => arr.sort((a, b) => a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0);
const dinos = [
    { "name": "Tyrannosaurus Rex", "size": 12, "speed": 5, "intelligence": 1, "ferocity": 9 },
    { "name": "Tricerotops", "size": 7, "speed": 3, "intelligence": 2, "ferocity": 5 },
    { "name": "Archaeopteryx", "size": 5, "speed": 6, "intelligence": 3, "ferocity": 4 },
    { "name": "Brontosaurus", "size": 18, "speed": 1, "intelligence": 2, "ferocity": 2 },
    { "name": "Velociraptor", "size": 8, "speed": 8, "intelligence": 4, "ferocity": 6 },
    { "name": "Stegosaurus", "size": 16, "speed": 2, "intelligence": 2, "ferocity": 2 },
    { "name": "Spinosaurus", "size": 15, "speed": 4, "intelligence": 2, "ferocity": 7 },
    { "name": "Brachiosaurus", "size": 20, "speed": 1, "intelligence": 2, "ferocity": 1 }, 
    { "name": "Allosaurus", "size": 10, "speed": 7, "intelligence": 1, "ferocity": 10 },
    { "name": "Dilophosaurus", "size": 9, "speed": 5, "intelligence": 4, "ferocity": 3 }
];
sortBy(dinos, 'size');

// 6: Count Number of Occurrences
const countOccurrences = (array, value) => array.reduce((accumulator, currentVal) => (currentVal === value ? accumulator + 1 : accumulator), 0);
const pollResponses = ["Yes", "Yes", "No", "Yes", "No"];
const response = "Yes";
countOccurrences(pollResponses, response); // 3

// 7: Extract Object Properties from Object Array and return separate array
const extract = (objs, key) => objs.map((obj) => obj[key]);
extract(dinos, 'name'); // []

// 8: Insert an Element at a Certain Position
const insert = (arr, index, newItem) => [...arr.slice(0, index), newItem, ...arr.slice(index)];
const numbers = [1, 2, 4, 5];
// insert the number 3 at index 2:
insert(numbers, 2, 3); // [1, 2, 3, 4, 5]
// JavaScript One-Liners to Use in Every Project

// 1: Capitalize Text
const capitalize = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

// 2: Calculate Percent
const calculatePercent = (value, total) => Math.round((value / total) * 100);

// 3: Get random element
const getRandomItem = (items) =>
  items[Math.floor(Math.random() * items.length)];

// 4: Remove Duplicate Elements
const removeDuplicates = (arr) => [...new Set(arr)];

// 5: Sort Elements by Key
const sortBy = (arr, key, order = "asc") =>
  arr.sort((a, b) => {
    if (order === "desc") {
      return a[key] < b[key] ? 1 : a[key] > b[key] ? -1 : 0;
    } else {
      return a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0;
    }
  });

// 6: Count Number of Occurrences
const countOccurrences = (array, value) =>
  array.reduce(
    (accumulator, currentVal) =>
      currentVal === value ? accumulator + 1 : accumulator,
    0,
  );

// 7: Extract Object Properties from Object Array and return separate array
const extract = (objs, key) => objs.map((obj) => obj[key]);

// 8: Insert an Element at a Certain Position
const insert = (arr, index, newItem) => [
  ...arr.slice(0, index),
  newItem,
  ...arr.slice(index),
];

// TESTING

const dinos = [
  {
    name: "Tyrannosaurus Rex",
    size: 12,
    speed: 5,
    intelligence: 1,
    ferocity: 9,
  },
  { name: "Tricerotops", size: 7, speed: 3, intelligence: 2, ferocity: 5 },
  { name: "Archaeopteryx", size: 5, speed: 6, intelligence: 3, ferocity: 4 },
  { name: "Brontosaurus", size: 18, speed: 1, intelligence: 2, ferocity: 2 },
  { name: "Velociraptor", size: 8, speed: 8, intelligence: 4, ferocity: 6 },
  { name: "Stegosaurus", size: 16, speed: 2, intelligence: 2, ferocity: 2 },
  { name: "Spinosaurus", size: 15, speed: 4, intelligence: 2, ferocity: 7 },
  { name: "Brachiosaurus", size: 20, speed: 1, intelligence: 2, ferocity: 1 },
  { name: "Allosaurus", size: 10, speed: 7, intelligence: 1, ferocity: 10 },
  { name: "Dilophosaurus", size: 9, speed: 5, intelligence: 4, ferocity: 3 },
];

const questionsCorrect = 6;
const questionsTotal = 11;
const monthList = ["Jan", "Feb", "Feb", "Mar"];
const pollResponses = ["Yes", "Yes", "No", "Yes", "No"];
const response = "Yes";

console.log("1: Should print 'Size'");
console.log(capitalize(Object.getOwnPropertyNames(dinos[0])[1]));

console.log("2: Should print 55");
console.log(calculatePercent(questionsCorrect, questionsTotal));

console.log("3: Should print any dino name");
console.log(getRandomItem(dinos.map((dino) => dino.name)));

console.log("4: Should print ['Jan', 'Feb', 'Mar']");
console.log(removeDuplicates(monthList));

console.log("5: Should sort dinos by size descending");
console.log(sortBy(dinos, "size", "desc"));

console.log("6: Should print 3");
console.log(countOccurrences(pollResponses, response));

console.log("7: Should print list of dinos");
console.log(extract(dinos, "name"));

console.log(
  "8: Should print new list of dinos but with Flip-Flop-Saurus at the top",
);
console.log(insert(extract(dinos, "name"), 0, "Flip-Flop-Saurus"));

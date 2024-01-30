const nouns = ["pasta", "movie", "music", "species", "cake", "color", "island", "salt", "umbrella", "bathtub", "meeting"];
const adjectives = ["new", "expensive", "rich", "pink", "futuristic", "free", "important", "ugly", "spicey"];
const verbs = ["create","invent","discover","imagine","notice","complain about","wonder about", "think about"];

function getRandom(wordCollection) {
    if (!wordCollection.length) return "";
    else return wordCollection[Math.floor(Math.random() * wordCollection.length)];
}

function vowelFirstLetter(word) {
    if (["o","u","e","a","i"].includes(word[0])) return "an";
    else return "a";
}

let verb = getRandom(verbs);
let adjective = getRandom(adjectives);
let article = vowelFirstLetter(adjective);
let noun = getRandom(nouns);

const output = (verb, adjective, noun) => {
if (verb === "" || adjective === "" || noun === "") {console.log("You will have a great day today!")}
else 
console.log(`You will ${verb} ${article} ${adjective} ${noun} today.`);
}

output(verb, adjective, noun);


// TESTS

// list of words is empty, should print default string

// const nounsEmpty = [];
// noun = getRandom(nounsEmpty);
// console.log(`TEST:\nShould print 'You will have a great day today!`)
// output(verb, adjective, noun);
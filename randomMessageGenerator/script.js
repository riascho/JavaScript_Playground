const nouns = [
    'pasta',
    'movie',
    'music',
    'species',
    'cake',
    'color',
    'island',
    'salt',
    'umbrella',
    'bathtub',
    'meeting'
];
const adjectives = ['new', 'expensive', 'rich', 'pink', 'futuristic', 'free', 'important', 'ugly', 'spicey'];
const verbs = ['create', 'invent', 'discover', 'imagine', 'notice', 'complain about', 'wonder about', 'think about'];

function getRandomWord(wordCollection) {
    return wordCollection.length ? wordCollection[Math.floor(Math.random() * wordCollection.length)] : '';
}

function getIndefiniteArticle(word) {
    if (['o', 'u', 'e', 'a', 'i'].includes(word[0])) return 'an';
    else return 'a';
}

const verb = getRandomWord(verbs);
const adjective = getRandomWord(adjectives);
const article = getIndefiniteArticle(adjective);
const noun = getRandomWord(nouns);

const getOutput = (
    verb,
    adjective,
    noun // Implicit return by not using brackets in arrow functions
) =>
    !verb || !adjective || !noun
        ? 'You will have a great day today!'
        : `You will ${verb} ${article} ${adjective} ${noun} today.`;

console.log(getOutput(verb, adjective, noun));

// TESTS

// list of words is empty, should print default string

// const nounsEmpty = [];
// noun = getRandom(nounsEmpty);
// console.log(`TEST:\nShould print 'You will have a great day today!`)
// output(verb, adjective, noun);

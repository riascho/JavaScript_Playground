/* ISSUES & TODOs
- add music!!
- stop propagation / capture=true for when the keys are pressed (excluding the letters!)
- mouseup event not caught when mouseout before
- prevent key from overlapping the dark keys when it's being pressed
- fix skeuomorphic design for upper keys
*/

// The keys and notes variables store the piano keys
// plucks out the corresponding DOM elements and stores them as such
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = keys.map(function (key) {
    return document.getElementById(key);
})

// simple skeuomorphic design for when a key is played
function applyKeyDownVisual(event) {
    event.target.style.backgroundColor = 'darkgrey';
    event.target.style.position = 'relative';
    event.target.style.top = '5px';
    event.target.style.left = '5px';
}
function applyKeyReleaseVisual(event) {
    event.target.style.backgroundColor = '';
    event.target.style.position = '';
    event.target.style.top = '';
    event.target.style.left = '';
}
function attachKeyPlayEventListeners(note) {
    note.addEventListener('mousedown', applyKeyDownVisual);
    note.addEventListener('mouseup', applyKeyReleaseVisual);
}

// loop that assigns the eventListeners to each key DOM element
notes.forEach(attachKeyPlayEventListeners);

// These variables store the buttons that progress the user through the lyrics
const nextOne = document.getElementById('first-next-line');
const nextTwo = document.getElementById('second-next-line');
const nextThree = document.getElementById('third-next-line');
const startOver = document.getElementById('fourth-next-line');

// This variable stores the '-END' lyric element
const lastLyric = document.getElementById('column-optional');

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden = true;

// anonymous event handler property and function for the first progress button
nextOne.onclick = function () {
    document.getElementById('letter-note-five').innerHTML = 'D';
    document.getElementById('letter-note-six').innerHTML = 'C';
    nextTwo.hidden = false;
    nextOne.hidden = true;
}

// anonymous event handler property and function for the second progress button
nextTwo.onclick = function () {
    document.getElementById('word-five').innerHTML = 'DEAR';
    document.getElementById('word-six').innerHTML = 'FRI-';
    document.getElementById('letter-note-three').innerHTML = 'G';
    document.getElementById('letter-note-four').innerHTML = 'E';
    document.getElementById('letter-note-five').innerHTML = 'C';
    document.getElementById('letter-note-six').innerHTML = 'B';
    nextThree.hidden = false;
    nextTwo.hidden = true;
    lastLyric.style.display = 'inline-block';
}

// anonymous event handler property and function for the third progress button
nextThree.onclick = function () {
    document.getElementById('word-one').innerHTML = 'HAP-';
    document.getElementById('word-two').innerHTML = 'PY';
    document.getElementById('word-three').innerHTML = 'BIRTH';
    document.getElementById('word-four').innerHTML = 'DAY';
    document.getElementById('word-five').innerHTML = 'TO';
    document.getElementById('word-six').innerHTML = 'YOU!';
    document.getElementById('letter-note-one').innerHTML = 'F';
    document.getElementById('letter-note-two').innerHTML = 'F';
    document.getElementById('letter-note-three').innerHTML = 'E';
    document.getElementById('letter-note-four').innerHTML = 'C';
    document.getElementById('letter-note-five').innerHTML = 'D';
    document.getElementById('letter-note-six').innerHTML = 'C';
    startOver.hidden = false;
    nextThree.hidden = true;
    lastLyric.style.display = 'none';
}

// This is the event handler property and function for the startOver button
startOver.onclick = function () {
    document.getElementById('word-one').innerHTML = 'HAP-';
    document.getElementById('letter-note-one').innerHTML = 'G';
    document.getElementById('word-two').innerHTML = 'PY';
    document.getElementById('letter-note-two').innerHTML = 'G';
    document.getElementById('word-three').innerHTML = 'BIRTH-';
    document.getElementById('letter-note-three').innerHTML = 'A';
    document.getElementById('word-four').innerHTML = 'DAY';
    document.getElementById('letter-note-four').innerHTML = 'G';
    document.getElementById('word-five').innerHTML = 'TO';
    document.getElementById('letter-note-five').innerHTML = 'C';
    document.getElementById('word-six').innerHTML = 'YOU!';
    document.getElementById('letter-note-six').innerHTML = 'B';
    nextOne.hidden = false;
    startOver.hidden = true;
}
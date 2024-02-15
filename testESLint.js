// this should trigger ESLINT -> shadowing

const greeting = 'Hello, world!';

function sendGreeting(name) {
    let greeting;
    if (name) {
        greeting = `Hello, ${name}!`;
        return greeting;
    } else {
        return greeting;
    }
}

sendGreeting();

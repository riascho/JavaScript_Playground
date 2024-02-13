const techStack = ['Python', 'Flask', 'Javascript', 'HTML', 'CSS'];
const techStackSpan = document.getElementById('typewriter');
const intervalMilliSeconds = 1500;
let indexTechStack = 0;

function updateTechStack() {
    techStackSpan.innerText = techStack[indexTechStack];
    if (indexTechStack < techStack.length - 1) {
        indexTechStack++;
    } else {
        indexTechStack = 0;
    }
}

document.addEventListener('DOMContentLoaded', setInterval(updateTechStack, intervalMilliSeconds));

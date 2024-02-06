# Random Message Generator

## Purpose & Description

This is a program that will output a random message when it's run. The message will be a statement addressed to the user, telling them about their day ahead (similar to a fortune-cookie).

This project was built as part of the [Codecademy Full-Stack Engineer Career Path](https://www.codecademy.com/career-journey/full-stack-engineer):

- [Portfolio Project: JavaScript Syntax](https://www.codecademy.com/career-journey/full-stack-engineer/path/fscj-22-building-interactive-websites/track/fscj-22-portfolio-project-javascript-syntax)

## Requirements

1. The output message must consist of at least 3 different pieces of data.
2. It's a simple CLI programm _(for now)_ run with Node. No Web Interface as of yet.

## Tasks

[x] **Plan the project** - Visualize your end result. What is it built with? What can it do? Make sure that it satisfies all of the project objectives.

[x] **Make a timeline** - Avoid the temptation to build things that aren’t required. Setting firm boundaries and deadlines to stay on track and prevent scope creep.

[x] **Come Up with a Topic** - What types of messages should be the output?

[x] **Create Script and run it locally** - create JavaScript file locally and run with Node.

[x] **Set up version control** - set up Git tracking in working directory and add and commit changes

[x] **Store message components** - Need to provide at least 3 different sources of data and how to store these components?

[x] **Create the message** - Add functionality to randomly select the different message components so they create a cohesive message.

[x] **Put the program together** - Combine the different parts of the program so the random messages are selected, combined, and then displayed to the user each time they run the program.

## Approach

### 1. Conceptualize and visualize the program

The output message will be a fortune-cookie-style statement about your day ahead. The statement will consist of a `noun`, an `adjective` and a `verb`, which are each time randomly generated and put together. 

For example:
```
"You will invent a new pasta today."
```

There will be an individual collection of nouns, adjectives and verbs stored _(for now)_ in JavaScript code.
The interface is _(for now)_ the CLI. The user will simply run the script and receive the output in the CLI. 

### 2. Set timeline and schedule tasks

| Task | Effort in hours | Scheduled |
| ------------ | ------------ | ------------ | 
| come up with collections of words (nouns, adjectives, verbs) | 0.5 | `30 Jan` |
| write pseudo-code script | 0.5 | `30 Jan` |
| transform pseudo-code into JavaScript syntax | 3 | `30 Jan` |
| write tests | 1.5 | `30 Jan` |
| finish up documentation | 1 | `30 Jan` |
| **TOTAL** | **6.5** |  | 

### 3. Build, Test & Deploy

🐳 **Ship it!**

### 4. Obstacles

- certain combination of words require the template string 

    "You will [`VERB`] a [`ADJECTIVE`] [`NOUN`] today."

    to be switched to 

    "You will [`VERB`] ***an*** [`ADJECTIVE`] [`NOUN`] today.`

- what happens when no word can be retrieved? (output a default fall-back message)

## Conclusion

This project gave me the opportunity to think about software design and project management. Apart from being able to break the project up into small tasks, it taught me being specific enough about the requirements while at the same time maintaining focus on the crucial features only in order to keep the timeline.

When writing tests, I thought about scenarios that might happen and that made me build defaults templates for those cases. For example, if any list of words is empty, the output should be a default fall-back message.

## Next Steps

- separate out database for word collections
- separate out test scripts and make part of the CI/CD pipeline
- pull in random words from external source (e.g. https://www.randomlists.com/nouns)
- turn script into Web Application
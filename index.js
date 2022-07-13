// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [   
{
    type: 'input',
    message: 'What is your name?',
    name: 'name',
  },
  {
    type: 'checkbox',
    message: 'What languages do you know?',
    name: 'tech_languages',
    choices: ['HTML', 'CSS', 'Javascript']
  },
  {
    type: 'list',
    message: 'What is your preferrred method of communication?',
    name: 'contact',
    choices: ['Gmail', 'phone', 'slack']
  },];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile('README.md', generateMarkdown({...answers}))
    })
}

// Function call to initialize app
init();

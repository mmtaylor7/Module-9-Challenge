// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [   
{
    type: 'title',
    message: 'What is your project title?',
    name: 'title',
  },
  {
    type: 'section',
    message: 'What is the description?',
    name: 'description',
  },
  {
    type: 'section',
    message: 'What are the installation instructions?',
    name: 'installation',
  },
  {
    type: 'section',
    message: 'What is the usage information? ',
    name: 'usage',
  },
  {
    type: 'section',
    message: 'What are the contribution guidelines?',
    name: 'contribution',
  },
  {
    type: 'section',
    message: 'What are the test instructions?',
    name: 'test',
  },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    console.log(questions)

    inquirer.prompt(questions).then((answers) => {
        console.log(answers)
        writeToFile('README.md', generateMarkdown({...answers}))
    })
}

// Function call to initialize app
init();

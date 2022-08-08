// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Required: What is the name of your project?",
        validate: (title) => {
            if (title) {
                return true;
            } else {
                console.log("Please enter a project name.");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "description",
        message: "Required: Provide a description of the project",
        validate: (description) => {
            if (description) {
                return true;
            } else {
                console.log("Please enter a project description.");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "githubLink",
        message: "Required: Enter the GitHub link to your project repository.",
        validate: (githubLink) => {
            if (githubLink) {
                return true;
            } else {
                console.log("Please enter a GitHub project repository link.");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "githubUser",
        message: "Required: Enter your GitHub username.",
        validate: (githubUser) => {
            if (githubUser) {
                return true;
            } else {
                console.log("Please enter your GitHub username.");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "email",
        message: "Required: Enter your email address.",
        validate: (email) => {
            if (emailValidator.isEmail(email)) {
                return true;
            } else {
                console.log("Please enter a valid email address.");
                return false;
            }
        },
    },
    {
        type: 'input',
        name: 'install',
        message: 'Optional: Enter instructions on how to install your project:',
        validate: install => {
             if(install){
                return true;
              } else {
                   console.log('Please enter instructions to install your project.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter description on how your project can be used:',
        validate: usage => {
            if(usage){
               return true;
             } else {
                  console.log('Please enter description on how your project can be used.');
               return false;
           }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please enter contribution instructions:',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please enter instructions for how to test the application:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a license',
        choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'No License']
    },
    {
        type: 'input',
        name: 'screenshot',
        message: 'Please enter file source for screenshot:',
    },
    {
        type: 'input',
        name: 'url',
        message: 'Please enter live deployed link of the application:',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize appS
function init() {}

// Function call to initialize app
init();

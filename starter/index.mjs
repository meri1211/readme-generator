//const fs = require("fs");
import fs from 'fs/promises'
//const path = require("path");


//const inquirer = require("inquirer");
import inquirer from "inquirer";
//const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  "What is the project title?",
  "Project description",
  "What is the table of contents?",
  "How to install the app?",
  "How to use the app?",
  "What license are you using?",
  "Who can contribute to this project?",
  "How to test the app?",
  "Any future questions?",
];

/* function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

 function call to initialize program
init();*/

let response = await inquirer
  .prompt([
    {
      type: "input",
      message: "What is your project title?",
      name: "title",
    },
    {
      type: "input",
      message: "What is your project description?",
      name: "description",
    },
    {
      type: "input",
      message: "What does your project contain?",
      name: "contents",
    },
    {
      type: "input",
      message: "How to install the app?",
      name: "installation",
    },
    {
      type: "input",
      message: "How to use the app?",
      name: "usage",
    },
    {
      type: "checkbox",
      message: "What license are you using?",
      name: "license",
      choices: ["MIT", "Apache", "Mozilla", "IBM", "Perl", "Eclipse"],
    },
    {
      type: "input",
      message: "Who can contribute to this project?",
      name: "contributors",
    },
    {
      type: "input",
      message: "How to test the app?",
      name: "testing",
    },
    {
      type: "input",
      message: "Any future questions?",
      name: "questions",
    },
  ])
  .then((response) => {
    console.log(response);
  });

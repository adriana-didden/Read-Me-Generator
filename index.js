const axios = require("axios");
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./Util/generateMarkdown.js')
const api = require('./util/api.js')

const questions =
    [
        {
            type: "input",
            name: "username",
            message: "what's your GitHub username?",
        },
        {
            type: "input",
            name: "ContactEmail",
            message: "what's your email address?",
        },

        {
            type: "input",
            name: "title",
            message: "what's your project's name?",
        },
        {
            type: "input",
            name: "description",
            message: "please write a short description of your project",
        },
        {
            type: "list",
            name: "license",
            choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
            message: "what kind of license should your project have?",
        },
        {
            type: "input",
            name: "install",
            message: "what command should be run to install dependencies?",
            default: "npm install"
        },
        {
            type: "input",
            name: "runTest",
            message: "what command should be run to run tests?",
            default: "npm test"
        },
        {
            type: "input",
            name: "usage",
            message: "what does the user need to know about using the repo?",
        },
        {
            type: "input",
            name: "contribute",
            message: "what does the user need to know about contributing to the repo?"
        }
    ]
    
const writeToFile = async (name, data) => {
    fs.writeFile(name, generateMarkdown(data), err => {
        if (err) throw err;
        console.log('...saving')
    })

}

const init = async () => {
    try {

        const answers = await inquirer.prompt(questions)

        const { data } = await api.getUser(answers.username)
        writeToFile('test.md', { ...answers, ...data })
    }
    catch{
        err => concole.log(err)
    }
}

init();

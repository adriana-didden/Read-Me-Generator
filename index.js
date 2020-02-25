
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./Util/generateMarkdown.js')

const api = require('./Util/api.js')
const questions =
    [
        {
            type: "input",
            name: "username",
            question: "what's your GitHub username?",
        },
        {
            type: "input",
            name: "email",
            question: "what's your email address?",
        },

        {
            type: "input",
            name: "title",
            question: "what's your project's name?",
        },
        {
            type: "input",
            name: "description",
            question: "please write a short description of your project",
        },
        {
            type: "list",
            name: "typeLicense",
            choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
            question: "what kind of license should your project have?",
        },
        {
            type: "input",
            name: "commandInstall",
            question: "what command should be run to install dependencies?",
        },
        {
            type: "input",
            name: "commandRunTest",
            question: "what command should be run to run tests?",
        },
        {
            type: "input",
            name: "usingRepo",
            question: "what does the user need to know about using the repo?",
        },
        {
            type: "input",
            name: "contributeRepo",
            question: "what does the user need to know about contributing to the repo?"
        }
    ]
    ;
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

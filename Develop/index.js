
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
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
                name: "projectName",
                question: "what's your project's name?",
            },
            {
                type: "input",
                name: "description",
                question: "please write a short description of your project",
            },
            {
                type: "input",
                name: "typeLicense",
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
    ]);
};
function writeToFile(fileName, data) {


}

function init() {

}

init();

//Dependencies/Imports
const inquirer = require('inquirer');
const answers = require('./promptAnswers.js')

//Initial Prompt
function inquirerPrompts() {
    inquirer
      .prompt({
        type: "list",
        name: "choices"
        message: "Please select what you would like to do?",
        choices: [
        "Add new Department",
        "Add new Role",
        "Add new Employee",
        "View all Departments",
        "View all Roles",
        "View all Employees",
        "Update Department",
        "Update Role",
        "Update Employee",
        "Exit",
        ],
    }).then(answers.answers);
}

module.exports = startingPrompt;
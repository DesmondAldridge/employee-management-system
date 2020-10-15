const inquirer = require('inquirer');


const department = require("./department");
const role = require("./role");
const employee = require("./employee");
const connection = require("./server");

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
    }).then(function(answers) {

        switch(answers) {

            case "Add Department":
            department.create();
            break;
        
            case "Add Role":
            role.create();
            break;

            case "Add Employee":
            employee.create();
            break;
            
            case "View Departments":
            department.read();
            break;

            case "View Roles":
            role.read();
            break;

            case "View Employees":
            employee.read();
            break;

            case "Update Department":
            department.update();
            break;

            case "Update Role":
            role.update();
            break;

            case "Update Employee Role":
            employee.updateRole();
            break;
            
            case "Exit":
            default:
            connection.end();
           };
    }),

module.exports = {startingPrompt}
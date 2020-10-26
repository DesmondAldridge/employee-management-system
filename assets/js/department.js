//Dependencies/Imports
const inquirer = require('inquirer');
const cTable = require('console.table');
const begin = require('./assets/js/startingPrompt');
const connection = require('./config/connection.js');

function addDept() {
  
    inquirer.prompt([
        {
          name: "newDepartment",
          type: "input",
          message: "What is the name of the new department you would like to add?",
        },
      ]).then(function(answer) {
        
        const query = "INSERT INTO department SET ?";
        const theNewDepartment = {
          name: answer.newDepartment,
        };
        
        connection.query(query, theNewDepartment, function(err, res) {
          if (err) throw err;
          begin.inquirerPrompts;
        });
    });
};

function viewDept() {
    
    const query = "SELECT * FROM department";

        connection.query(query, function(err, res) {
          if (err) throw err;
          
          const table = cTable.getTable(res);
          console.log(table);

          begin.inquirerPrompts;
        });
};

module.exports = department;
//Dependencies/Imports
const inquirer = require('inquirer');
const cTable = require('console.table');
const begin = require('./assets/js/startingPrompt');
const connection = require('./config/connection.js');

function addDept() {
  
    inquirer

      .prompt([
        {
          name: "newDepartment",
          type: "input",
          message: "What is the name of the new department you would like to add?",
        },
      ]).then(function(answer) {
        
        const query = "INSERT INTO department SET ?";
        const newDepartment = {
          name: answer.newDepartment,
        };
        

        connection.query(query, newDepartment, function(err, res) {
          if (err) throw err;
          begin.inquirerPrompts;
        });
      });
  };
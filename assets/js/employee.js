//Dependencies/Imports
const inquirer = require('inquirer');
const cTable = require('console.table');
const begin = require('./assets/js/startingPrompt');
const connection = require('./config/connection.js');

function addEmployee() {
  
    inquirer.prompt([
        {
          name: "firstName",
          type: "input",
          message: "Please enter the new employee's given name (first name):",
        },
        {
          name: "lastName",
          type: "input",
          message: "Please enter the new employee's surname (last name):" 
        },
        {
          name: "theirRole",
          type: "input",
          message: "Please enter the new employee's role:" 
        }
      ]).then(function(answer) {
        
        const query = "INSERT INTO employee SET ?";
        const newEmployee = {
          given_name: answer.firstName,
          surname: answer.lastName,
          role_id: answer.theirRole,
        };
        
        connection.query(query, newEmployee, function(err, res) {
          if (err) throw err;
          begin.inquirerPrompts;
        });
    });
};

function viewEmployee() {
    
    const query = "SELECT * FROM employee";

        connection.query(query, function(err, res) {
          if (err) throw err;
          
          const table = cTable.getTable(res);
          console.log(table);

          begin.inquirerPrompts;
        });
};

function updateEmployee() {
  
  inquirer.prompt([
      {
        name: "employeeID",
        type: "input",
        message: "Please enter the ID of the employee you wish to update:",
      },
      {
        name: "employeeRole",
        type: "input",
        message: "Please enter the role (by ID) of the employee you wish to update:" 
      }
    ]).then(function(answer) {
      
      const query = "UPDATE employee SET ? WHERE ?";
      const updatedRole = [{
        role_id: answer.employeeRole,
        surname: answer.employeeID,
      }];
      
      connection.query(query, newEmployee, function(err, res) {
        if (err) throw err;
        begin.inquirerPrompts;
      });
  });
};



module.exports = employee;
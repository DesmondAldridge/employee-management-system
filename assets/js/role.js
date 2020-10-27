//Dependencies/Imports
const inquirer = require('inquirer');
const cTable = require('console.table');
const begin = require('./assets/js/startingPrompt');
const connection = require('./config/connection.js');

function addRole() {
  
    inquirer.prompt([
        {
          name: "roleName",
          type: "input",
          message: "Please provide the title/name of this new role:",
        },
        {
          name: "salary",
          type: "input",
          message: "Please provide the salary of this new role:" 
        },
        {
          name: "department_id",
          type: "input",
          message: "Please provide the department (by ID) of this new role:" 
        }
      ]).then(function(answer) {
        
        const query = "INSERT INTO role SET ?";
        const newRole = {
          title: answer.roleName,
          salary: answer.salary,
          department_id: answer.department_id,
        };
        
        connection.query(query, newRole, function(err, res) {
          if (err) throw err;
          begin.inquirerPrompts;
        });
    });
};

function viewRole() {
    
    const query = "SELECT * FROM role";

        connection.query(query, function(err, res) {
          if (err) throw err;
          
          const table = cTable.getTable(res);
          console.log(table);

          begin.inquirerPrompts;
        });
};

function updateRole() {
  
  inquirer.prompt([
      {
        name: "roleID",
        type: "input",
        message: "Please enter the ID of the role you wish to update:",
      },
      {
        name: "newTitle",
        type: "input",
        message: "Please enter the new title/name of the role you wish to update:" 
      },
      {
        name: "newSalary",
        type: "input",
        message: "Please enter the new salary of the role you wish to update:" 
      },
      {
        name: "newDeptID",
        type: "input",
        message: "Please enter the new department (by ID) of the role you wish to update:" 
      },
    ]).then(function(answer) {
      
      const query = "UPDATE role SET ? WHERE ?";
      const updatedRole = [{
        title: answer.newTitle,
        salary: answer.newSalary,
        department_id: answer.newDeptID,
      }];
      
      connection.query(query, updatedRole, function(err, res) {
        if (err) throw err;
        begin.inquirerPrompts;
      });
  });
};

module.exports = role;
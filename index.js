const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/employee');
const Manager = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const newTeam = [];
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
const questions = async () => {
    const answers = await inquirer
     .prompt([
        { 
            type: 'input',
            message: "Please enter the manager's name:",
            name: 'name',
        },
        {
            type: 'input',
            message: "Please enter the manager's employee ID:",
            name: 'id',
        },
        {
            type: 'input',
            message: "Please enter the manager's email address:",
            name: 'email',
        },
        {
            type: 'input',
            message: "Please enter the manager's office number:",
            name: 'office', 
        }
     ])
        // add manager js here to create manager
}


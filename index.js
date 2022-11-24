const fs = require('fs');
const inquirer = require('inquirer');
// const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
// const Engineer = require('./lib/engineer');
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern');
const CreateTeam = require('./src/createHtml')

const newTeam = [];
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
const managerQuestions = async () => {
    let answers = await inquirer
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
        const manager = new Manager(
            answers.name,
            answers.id,
            answers.email,
            answers.office
        )
        newTeam.push(manager);
        console.info('New manager added!');
        return teamQuestions();
}

const engQuestions = async () => {
  let answers = await inquirer
   .prompt([
    { 
        type: 'input',
        message: "Please enter the engineer's name:",
        name: 'name',
    },
    {
        type: 'input',
        message: "Please enter the engineer's employee ID:",
        name: 'id',
    },
    {
        type: 'input',
        message: "Please enter the engineer's email address:",
        name: 'email',
    },
    {
        type: 'input',
        message: "Please enter the engineer's GitHub username:",
        name: 'github', 
    }
   ])

   const engineer = new Engineer (
    answers.name,
    answers.id,
    answers.email,
    answers.github
   )
   newTeam.push(engineer);
   console.info('New engineer added!');
   return teamQuestions();
}

const internQuestions = async () => {
    let answers = await inquirer
     .prompt([
      { 
          type: 'input',
          message: "Please enter the intern's name:",
          name: 'name',
      },
      {
          type: 'input',
          message: "Please enter the intern's employee ID:",
          name: 'id',
      },
      {
          type: 'input',
          message: "Please enter the intern's email address:",
          name: 'email',
      },
      {
          type: 'input',
          message: "Please enter the intern's current school:",
          name: 'school', 
      }
     ])
  
     const intern = new Intern (
      answers.name,
      answers.id,
      answers.email,
      answers.github
     )
     newTeam.push(intern)
     console.info('New intern added!')

    return teamQuestions()
  }

const teamQuestions = async () => {
    // await managerQuestions()

    // add prompt to ask if adding engineer or

    const addMember = await inquirer
     .prompt([
        { 
            name: 'addMember',
            type: 'list',
            choices: ['Add Engineer', 'Add Intern', 'Create Team']

        }
     ])

     if(addMember.addMember === 'Add Engineer'){

        return engQuestions()

     } else if(addMember.addMember === 'Add Intern'){
        
        return internQuestions()

     } else{ 
        console.info('build team')
    }
    console.log(newTeam)
}
managerQuestions()
// teamQuestions();

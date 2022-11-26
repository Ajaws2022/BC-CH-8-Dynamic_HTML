// constructor using the team member data
//  for each employee in data
// const { name } = data.name
// const { position } = data.
// const { name } = data.name
// const { email } = data.email
class CreateHtml{

    writeFile(){

        const fs = require('fs');

        const cards = [];

        const data = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
         <meta charset="UTF-8">
         <meta http-equiv="X-UA-Compatible" content="IE=edge">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>Team</title>
        </head>
        <body>
    
        </body>
        </html>;`

        fs.writeFileSync('./dist/index.html', data, (err) => {
        if (err){
        console.log(err);
        } 
        console.log('file created successfully')

      })
    }

    createTeam(data){
      // create generic elements for each team members name, id, and email
      // create an if statement to filter the employee roles and create elements accordingly
      // const { name } = data.name
      // const { email } = data.email
      // const { id } = data.id
      // if(data)
      const managers = data.filter(obj => {
        return obj.office
      });

      const engineers = data.filter(obj => {
        return obj.github
      });

      const interns = data.filter(obj => {
        return obj.school
      });

      managers.forEach((manager) => {
        console.log(manager)
      });

      engineers.forEach((engineer) => {
        console.log(engineer)
      });

      interns.forEach((intern) => {
        console.log(intern)
      })
    }
    
}

// class BuildTeam{
//     constructor(data){
//         const { name } = data.name;
//         const { role } = data.role;
//         const { email } = data.email
//     }
// }

module.exports = CreateHtml;
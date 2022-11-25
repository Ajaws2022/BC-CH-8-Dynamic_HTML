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
}

// class BuildTeam{
//     constructor(data){
//         const { name } = data.name;
//         const { role } = data.role;
//         const { email } = data.email
//     }
// }

module.exports = CreateHtml;
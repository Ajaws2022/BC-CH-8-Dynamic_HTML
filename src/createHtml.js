// constructor using the team member data
//  for each employee in data
// const { name } = data.name
// const { position } = data.
// const { name } = data.name
// const { email } = data.email
class CreateHtml{
    writeFile(){
        const fs = require('fs')
        const data = '<script src="./src/createHtml.js"></script>'

        fs.writeFileSync('./dist/index.html', data, (err) => {
        if (err){
        console.log(err);
    } console.log('file created successfully')
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

module.exports = CreateHtml
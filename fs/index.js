const  fs = require('fs');

fs.readFile('meu-arquivo.txt', 'utf-8', (err, data) => {
    if(err) throw err;
    console.log(data);
})


const users = [
    { name: 'Juno' , age: 27},
    { name: 'Maria' , age: 25},
    { name: 'pedrita' , age: 23},
    { name: 'Olivia' , age: 21},
    { name: 'ops' , age: 22},
];

fs.writeFile('users.txt', JSON.stringify(users),{
    encoding: 'utf-8',
    flag: 'a'
}, (err) =>{
   if(err) throw err
    console.log('escrito com sucesso');
});


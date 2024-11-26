const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('home page')
});

app.get('/about', (req,res) => {
    res.send('about page')
})

app.get('/usuarios/:name', (req,res) => {
    const name = req.params.name;
    res.send(`Este é o perfil do usuário ${name}`)
})
app.get('/opa', (req,res)=> {
    res.send('opafion')
});
app.listen(3000, () => {
    console.log('servidor em execucao em http://localhost:3000');
});
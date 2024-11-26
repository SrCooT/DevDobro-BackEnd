const express = require('express');
const app = express();

app.get('/usuarios/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Este é o prefil do usuario ${name}`);
});

app.put ('/usuarios/:name', (req,res)=>{
    const name = req.params.name;
    res.send(`Este é o prefil do usuario ${name} utilizando o PUT`);
})


app.listen(3000, () => {
    console.log('Servidor em execução em http://localhost:3000');
});
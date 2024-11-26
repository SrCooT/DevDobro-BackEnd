const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log(`Requisição recebida em ${new Date()} ai sim meu nobre `);
    next();
});
app.get('/users', (req, res) => {
    console.log('caiu na rota do usuario');
    res.send('caiu na rota do usuario ');
});
    
app.get('/', (req, res) => {
    console.log('caiu na rota de raiz');
    res.send('caiu na rota raiz');
});
    

app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
});

const express = require('express');
const app = express();


// usando uma função de callback simples 
// app.get('/', (req, res) => {
//     res.send('Olá,mundo');
// });

//usando uma função nomeada
// const mostrarOlaMundo = (req, res) =>{
//     res.send('Olá , mundo com função nomeada');
// }

// app.get('/', mostrarOlaMundo)

// criando um handler na propria rota e usar next para passar o controle para o proximo route handler:
// app.get('/', (req,res,next)=>{
//     console.log('Olá,mundo');
//     next();

// },(req,res) =>{
//     res.send('esse é o segundo route handler ')
// })

//chamando uma função como argumento da rota

// function loqResquest(req, res, next) {
//     console.log('nova requicisão recebida!!');
//     next();
// }
// app.get('/', loqResquest, (req,res) =>{
//     res.send('olá ,mundo')
// })


//definir  um array de funções   que serão executadas em sequência

// const cb0 = (req,res,next)=>{
//     console.log('CB0');
//     next();
// }
// const cb1 = (req,res,next)=>{
//     console.log('Cb1');
//     next();
// }
// const cb2 = (req,res,next)=>{
//     res.send('CB2');
// }

// app.get('/',[cb0,cb1,cb2])
const router = require('./router');

app.use('/', router)
const cb0 = (req, res, next) => {
    console.log('CB0');
    next();
}
const cb1 = (req, res, next) => {
    console.log('Cb1');
    next();
}

app.get('/', [cb0, cb1], (req, res, next) => {
    console.log('a resposta vai ser enviada na proxima seção..');
    next();
}, (req, res) => {
    res.send('ultima parada')
})


app.listen(3000, () => {
    console.log('servidor rodando em http://localhost:3000');
});
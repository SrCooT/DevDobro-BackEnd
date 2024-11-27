const express = require('express');
const postRouter = express.Router();

postRouter.get('/', (req,res)=>{
    res.send('Ta funcionando a posta rodas');
});
postRouter.get('/save', (req,res)=>{
    res.send('Ta funcionando a post rodas');
});

module.exports = postRouter;
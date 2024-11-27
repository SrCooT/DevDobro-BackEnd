const express = require('express');
const userRouter = express.Router();

userRouter.get('/', (req,res)=>{
    res.send('Ta funcionando a route rodas');
});
userRouter.get('/save', (req,res)=>{
    res.send('Ta funcionando a route rodas');
});

module.exports = userRouter;
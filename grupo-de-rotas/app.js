const express = require('express');
const app = express();

const userRouter = require('./userRoutes')
const postRouter = require('./postRoutes')

app.use('/users', userRouter);
app.use('/posts', postRouter);

app.listen(3000, ()=>{
    console.log('servidor rodando na porta http://localhost:3000');
})

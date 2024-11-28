const express = require('express');
const userRouter = express.Router();

const router = userRouter.get('/', (req, res) => {
    res.send('Lista d elivreo')
}).post('/', (req, res) => {
    res.send('Adicionado novo livreo ')
});

module.exports = router
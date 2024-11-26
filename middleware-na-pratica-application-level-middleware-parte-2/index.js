const express = require('express');
const app = express();
var cookieParser = require('cookie-parser');

app.use(cookieParser());

app.post('/cookies', (req, res) => {
    res.cookie('idade', '27').send('cookies estão onlines ');
});


app.get('/cookies', (req,res)=>{
    console.log(req.cookies);
    res.send('pegando os cookies');
})
app.listen(3000, () => {
    console.log('servidor iniciado na porta http://localhost:3000');
});
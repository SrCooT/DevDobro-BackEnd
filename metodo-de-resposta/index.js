const express = require('express');
const app = express();

const users = [
    { id: 1, name: 'juno cristian' },
    { id: 2, name: 'maria eduarda' },
    { id: 3, name: 'Olivia Meireles' }
];

app.get('/users/:id', (req, res)=> {
    res.redirect('http://google.com')
    
    // const id = req.params.id;
    // const user = users.find(u => u.id == id);

    // if(!user) { 
    //     return res.status(404).send('user not found')
    // }

    // return res.json(user);
});


app.listen(3000, ()=> {
    console.log('servidor em execução em http://localhost:3000');
})
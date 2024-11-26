const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    if (req.url === '/') {
        res.statusCode = 200;
        res.end("Home Page ");
    }//esse mode de criar  o server e utiliza o else if para ir integrando mais se quiser 
    else if (req.url === '/about') {
        res.statusCode = 200;
        res.end('About pagee');
    }
});


server.listen(3000, () => {
    console.log('Servidor em execução em  http://localhost:3000');
})

//  node --watch server.js  codigo usando para rodar o servidor semprecisar ficar reiniciando toda vez
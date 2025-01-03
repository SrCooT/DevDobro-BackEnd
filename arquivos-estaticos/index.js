const express = require('express');
const app = express();
const path = require('path');

const publicDirectoryPath = path.join(__dirname, 'public');
console.log(__dirname);

app.use(express.static(publicDirectoryPath));


app.listen(3000, () => {
    console.log('servidor iniciado na porta http://localhost:3000');
});
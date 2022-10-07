const express = require('express');
const server = express();
const fs = require('fs');



server.use(express.static('public'));

server.get('/', (req, res) => {
    fs.readFile('public/index.html', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
});

server.get('/contacts', (req, res) => {
    fs.readFile('data.json', (err, data) => {

        res.send(JSON.stringify(data));
    });
    
});

server.listen(8080);
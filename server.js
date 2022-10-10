const express = require('express');
const server = express();
const fs = require('fs');
const bodyParser = require('body-parser');

server.use(express.static('public'));
server.use(bodyParser.urlencoded({extended: true}));

var contacts;

fs.readFile('data.json', (err, data) => {
    contacts = JSON.parse(data);
});

server.get('/', (req, res) => {
    fs.readFile('public/index.html', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
});

server.get('/contacts', (req, res) => {
        res.send(JSON.stringify(contacts));
});

server.post('/', (req, res) => { 
    
        contacts.push(req.body);
        console.log(contacts);
        var anka = JSON.stringify(contacts);
        console.log(anka);

    fs.writeFile('data.json', anka, (err) => {});
        return res.end();
    });

server.listen(8080);
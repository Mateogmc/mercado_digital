// Realizo todos los imports
const socketIO = require('socket.io');
const http = require('http')
const express = require('express');
const path = require('path');
const port = 3000;

const app = express();
const server = http.createServer(app);
const sIO = socketIO(server);

app.use(express.json());

// Me conecto a la base de datos
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'marketuser',
    password: '_ppedS5.ePE9lo[W',
    database: 'md'
});

connection.connect(err => {
    if (err) throw err;
    console.log('Connected to MySQL!');
});

connection.query("SELECT name FROM users", function (err, result, fields) {
    if (err) throw err;
    //console.log(result);
});

// Servir los archivos estáticos de la carpeta dist
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/test', (req, res) => {
    console.log('Test');
    res.send('<h1>holi</h1>');
});

app.post('/post-test', (req, res) => {
    const jsonData = req.body;
    console.log('Recibido:', jsonData);
    res.send('JSON recibido');
});

// Redireccionar todas las peticiones al index.html
app.get('*', (req, res) => {
    console.log('Test2');
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, ()=> {
    console.log(`Server running at http://localhost:${port}/`);
});
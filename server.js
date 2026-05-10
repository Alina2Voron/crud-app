const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(express.static('public'));

let tasks = [];

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.post('/tasks', (req, res) => {
    tasks.push(req.body);
    res.send('Dodano');
});

app.put('/tasks/:id', (req, res) => {
    tasks[req.params.id] = req.body;
    res.send('Zmieniono');
});

app.delete('/tasks/:id', (req, res) => {
    tasks.splice(req.params.id, 1);
    res.send('Usunięto');
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Serwer wystartował na porcie ${PORT}`);
});
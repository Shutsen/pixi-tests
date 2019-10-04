const express = require('express')
const path = require('path')
const app = express()
const port = 3030

app.use(express.static('public'))
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')))
app.get('/1', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index-01.html')))
app.get('/2', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index-02.html')))
app.get('/3', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index-03.html')))
app.get('/4', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index-04.html')))
app.get('/5', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index-05.html')))
app.get('/6', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index-06.html')))

app.listen(port, () => console.log(`App is listening on port ${port}`))
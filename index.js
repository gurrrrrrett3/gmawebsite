const express = require('express')
const { homedir } = require('os')
const app = express()
const port = 3001
var path = require('path')

app.use(express.static(path.join(__dirname, 'docs')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + "/docs/home.html"))
})

app.listen(port, () => {
  console.log(`Website at http://localhost:${port}`)
})
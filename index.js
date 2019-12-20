const express = require('express')
const app = express()
const port = process.env.PORT || 3000
app.use(express.static('frontend'))
app.get('/', (req, res) => res.sendFile(__dirname+'/frontend/html/home.html'))
app.get('/login', (req, res) => res.send('Login'))
app.get('/register', (req, res) => res.send('register'))
var student = {"name":"anil mikey",
                "collage":"VNRVJIET",
                "regno": "122544647"}
app.get('/data',(req, res)=> res.json(student))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
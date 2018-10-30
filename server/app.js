
const express = require('express')
const bodyParser = require('body-parser')
const Chore = require('./chore')

const app = express()
const port = 3000

let chores = []

app.use(bodyParser.json())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  




app.get('/', (req, res) => {
    res.send('Hello World')
  })

app.post("/chores", (req, res) => {

    let chore = new Chore(req.body.choreName)
    chores.push(chore)

    res.send("New chore added")
})
  

  app.get('/chores', (req, res) => {
    res.json(chores)
})

  app.listen(port, () => {
    console.log("server started");
})
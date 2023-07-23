//mongodb://localhost:27017/?directConnection=true&readPreference=primary

const connectToMongo = require('./db');
connectToMongo();
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port at http://localhost:${port}`)
})
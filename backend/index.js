//mongodb://localhost:27017/?directConnection=true&readPreference=primary

const connectToMongo = require('./db');
connectToMongo();
const express = require('express')
const app = express()
const port = 5000


app.use(express.json())

//Available routes
app.use('/api/auth/createuser',require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));


// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port at http://localhost:${port}`)
})


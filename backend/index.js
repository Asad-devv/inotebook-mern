const connectToMongo = require('./db')
require('dotenv').config()
const express = require('express')
var cors = require('cors')
const app = express()
const PORT = process.env.PORT || 3000;



app.use(express.json())
app.use(cors())

app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))
app.get('/v1/login', (req, res) => {
    res.send('Hello login!')
  })
app.get('/',async(req,res)=>{

  res.send('Welcome to INOTEBOOK')
})


  app.get('/v1/signup', (req, res) => {
    res.send('Hello Signup!')
  }) 
app.listen(PORT, () => {
    console.log(`Example app listening on localhost:${PORT}`)

})

connectToMongo()
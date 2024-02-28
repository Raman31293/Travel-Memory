const express = require('express') 
const cors = require('cors')
require('dotenv').config()

const app = express()

// middleware to handle json file
app.use(express.json())
// apply CORS middleware before defining routes
app.use(cors())
// calling routes
const tripRoutes = require('./routes/trip.route')
app.use('/trip',tripRoutes)

// importing/require connection 
// const conn = require('./connection')
app.get('/hello',(req,res)=>{
    res.send('hello')
})

app.listen(3001,()=>{console.log('server is listining at http://localhost:3001')})
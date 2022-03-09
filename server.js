//1.require express
const express = require('express');


//2.instance of express
const app = express()

//4.require dotenv & config
require('dotenv').config()
//5.connectBD
const connectDB = require('./config/connectDB');
connectDB()
  
//global middleware
app.use(express.json())
//middleware

//6. routes
app.use('/api/contacts/', require('./routes/contact'))


//3.create server
const port = process.env.PORT
app.listen(port, (err) => { 
    err?
    console.error('failed to connect',error):
    console.log(`Server is running on  http://localhost:${port} `)
 })
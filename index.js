require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require("mongoose");
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, ()=>{console.log('hi')})
app.use(express.json());
app.use('/books', require('./controllers/books'))


app.get('/', (req,res) =>{
    res.send('Hello Book index!')
})
app.get('*', (req,res)=>{
    res.status(404)('<h1>404 Page</h1>')
})
app.listen(process.env.PORT)
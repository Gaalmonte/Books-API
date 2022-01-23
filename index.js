require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req,res) =>{
    res.send('Hello Book index!')
})
app.get('*', (req,res)=>{
    res.status(404)('<h1>404 Page</h1>')
})
app.listen(3000)
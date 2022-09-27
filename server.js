const express = require('express')

const app = express()
var bodyParser= require('body-parser')
bodyParser=bodyParser.urlencoded({extended:true})
app.get('/',(req,res,next)=>{
res.send('<form action="/form" method="POST"><input type = "text" name="firstName" /><button type="submit">send</button></form>')
})

app.post('/form',bodyParser,(req,res,next)=>{
    res.send(req.body.firstName)
    res.end()
})

app.listen(5000,()=>{console.log('running up....')})
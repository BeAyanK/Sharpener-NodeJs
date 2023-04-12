const http = require('http');

const express = require('express');

const app = express();

app.use((req, res, next)=>{
    console.log('In the middleware!')
    next();
})

app.use((req, res, next)=>{
    console.log('In other middleware!')
    res.send("<h1>Hello World!</h1>");
})

app.listen(3000);

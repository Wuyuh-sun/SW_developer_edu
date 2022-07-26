const http = require('http');
const express = require('express');
const app = express();
const cors = require('cors');

// public 폴더를 static 설정
app.use(express.static('public'));

app.get("/", (req,res)=>{
    res.end("<h1>Hello nodejs world12</h1>");
})
app.get("/car/list", (req,res)=>{
    res.end("<h1>부릉부릉</h1>");
})

const server = http.createServer(app);
server.listen(3000, ()=>{
    console.log("run on Server : http://localhost:3000")
})

const http = require('http');
const express = require('express');
const app = express();

app.set('port', 3000);


app.get("/", (req, res)=>{
    res.end('<h1>Hello nodejs</h1>');
});

const server = http.createServer(app);
server.listen(app.get('port'), ()=>{
    console.log('서버 실행 중 : http://localhost:3000');
});
const http = require('http');
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.static(__dirname + "/public/"))

app.get('/form', (req, res) =>{
    console.log("GET - /form 요청 받음");
    let title = req.query.title;
    let name = req.query.name;
    let content = req.query.content;

    let resData = { title,name,content };
    res.send(resData);
});

const server = http.createServer(app);
server.listen(3000, function() {
    console.log("서버 실행 중>>> http://localhost:3000");
});
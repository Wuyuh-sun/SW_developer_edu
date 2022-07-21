const http = require('http');
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/form', function(req, res) {
    
    res.send(resData);
});

const server = http.createServer(app);
server.listen(3000, function () {
    console.log("server operating >>> http://localhost:3000");
});
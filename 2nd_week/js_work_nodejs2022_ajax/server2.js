const http = require('http');
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

// 새로운 속성 추가
app.set('port', 3000);
app.set('views', __dirname + '/views'); // 폴더 경로
app.set('view engine', 'ejs'); // 확장자

// 미들웨어 추가
app.use(cors());
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const server = http.createServer(app);
server.listen(app.get('port'), ()=>{
    console.log('서버 실행 중 : http://localhost:3000');
});

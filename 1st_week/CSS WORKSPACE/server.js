const http = require('http')
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/', function(req, res){
    console.log(">>> GET - / 요청 받음...")
    res.end("<h1>Hello node.js</h1>")
})

app.get('/hello_ko', function(req, res){
    console.log(">>> GET - / 요청 받음...")
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    //한글처리
    res.write("<h1>진욱이의 홈페이지</h1>");
    res.end();
})
/*
app.get('/data', function(req, res){
    console.log(">>> GET - / 요청 받음...")

    let resData = {
        "user":req.query.user,
        "message":req.query.message
    }
    res.send(resData)
    //res.send({:}) = 딕셔너리, 맵 형태의 자료구조
    
    //end : 문자열을 보여준다.
    //res.send()
    //send : 객체를 보여준다.
    //http://localhost:3000/data?user=LEE&message=HELLO
})
*/
app.get("/calc/:op/:num1/:num2", (req,res)=>{
    console.log("GET - /calc/:op/:num1/:num2")
    //(req,res)=>{} = function(req,res){}
    let num1 = Number(req.params.num1);
    let num2 = Number(req.params.num2);
    let resultValue = 0 ;
    switch(req.params.op){
        case "+": resultValue = num1 + num2; break;
        case "-": resultValue = num1 - num2; break;
        case "*": resultValue = num1 * num2; break;
        case "div": resultValue = num1 / num2; break;
        case "share": resultValue = num1 % num2;
        }
        res.send({resultValue});
        //파라미터명과 값이 일치하면 하나만 적어도 된다.
});
// : -> 파라미터 변수( 넘겨지는 데이타 )
app.get("/data/:title/:name/:content", (req,res)=>{
    console.log("GET - /data/:title/:name/:content");
    console.log("server log");
    console.log(req.params.title,req.params.name,req.params.content);
    res.send({
        "title":req.params.title,
        "name":req.params.name,
        "content":req.params.content
    });
})

const server = http.createServer(app);
server.listen(3000, function(){
    console.log("서버 실행 중 >>> http://localhost:3000");
})
//터미널 창에서 
//node server.js 
//입력하여 서버 실행
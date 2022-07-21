const http = require("http");
const express = require("express");
const app = express("app");
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  console.log(">>> GET - / 요청 받음...");
  res.end("<h1>Hello nodejs</h1>");
});

app.get("/data", (req, res) => {
  console.log(">>> GET - /data 요청 받음...");
  // res.end() : 문자열 처리
  // res.send() : 객체 처리

  let resData = {
    user: req.query.user,
    message: req.query.message,
  };
  res.send(resData);
});

app.get("/calc/:oper/:num1/:num2", (req, res) => {
  let num1 = Number(req.params.num1);
  let num2 = Number(req.params.num2);
  let resultValue = 0;
  switch (req.params.oper) {
    case "add":
      resultValue = num1 + num2; break;
    case "min":
      resultValue = num1 - num2; break;
    case "mul":
      resultValue = num1 * num2; break;
    case "div":
      resultValue = num1 / num2; break;
    case "per":
      resultValue = num1 % num2; break;
  }
  res.send({resultValue});
  console.log("/calc/:oper/:num1/:num2");
});

const server = http.createServer(app);
server.listen(3000, () => {
  console.log("서버 실행 중 >>> http://localhost:3000");
});

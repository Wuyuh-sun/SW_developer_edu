const http = require("http");
const express = require("express");
const app = express();
const bodyParser = require('body-parser');


app.get("/", function (req, res) {
    const template = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        h1 {
            border: 1px solid rgb(60, 129, 243);
            display: inline;
            padding: 10px 20px 10px 20px;

            background: linear-gradient(175deg,
                    rgba(255, 255, 255, 1) 0%,
                    rgba(97, 135, 237, 1) 100%);
            color: rgb(95, 95, 95);
            font-weight: 500;
        }

        ul {
            padding: 0;
        }

        li {
            list-style: none;
        }

        label {
            font-weight: bold;
        }
    </style>
</head>

<body>
    <p></p>
    <h1 id="h1">• 클라이언트</h1>
    <form action="" method="POST">
        <ul>
            <li>
                <label for="title">제목:</label>
                <input type="text" id="title" name="title">
            </li>
            <li>
                <label for="name">이름:</label>
                <input type="text" id="name" name="name">
            </li>
            <li>
                <label for="content">내용:</label>
                <textarea name="content" id="content" cols="30" rows="7"></textarea>
            </li>
            <li>
                <input type="submit" value="저장">
            </li>
        </ul>
    </form>
</body>
</html>
`;
  res.send(template);
});

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post('/', urlencodedParser, (req, res)=>{

    const template = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        h1 {
            border: 1px solid black;
            display: inline;
            padding: 10px 20px 10px 20px;

            background: linear-gradient(
                175deg,
                rgba(255, 255, 255, 1) 0%,
                rgba(120, 120, 120, 1) 100%
              );
        }
        .comment{
            font-weight: bold;
            font-size: 1.2em;
            margin: 20px 0 20px 0;
        }
        ul {
            padding: 0;
        }

        li {
            list-style: none;
        }

        label {
            font-weight: bold;
        }
    </style>
</head>

<body>
    <p></p>
    <h1 id="h1">• Node.js 서버</h1>
    <p></p>
    <div class="comment">입력하신 데이터는 다음과 같습니다.</div>
    <div><span>제목 : </span><span>${req.body.title}</span></div>
    <div><span>이름 : </span><span>${req.body.name}</span></div>
    <div><span>내용 : </span><span>${req.body.content}</span></div>
</body>
</html>
`;
    res.send(template);
})

const server = http.createServer(app);
server.listen(3000, function () {
  console.log("server operating >>> http://localhost:3000");
});

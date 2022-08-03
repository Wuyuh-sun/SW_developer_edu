const http = require('http');
const express = require('express');
const app = express();
const fs = require('fs');

const axios = require('axios');
const cheerio = require('cheerio');
// axios 한글 깨짐 해결 하는 모듈
const iconv = require('iconv-lite');

app.set('port', 3000);

const sleep = (ms) => {
    return new Promise(resolve=>{
        setTimeout(resolve,ms)
    })
}
app.get('/axios_test2', (req, res) => {
    // Promise - 콜백 헬에 빠지는것을 방지(흐름제어) - 메소드체인.then([콜백])
    // Async - 리스트 형식으로 한다. [콜백, 콜백, 콜백 ...]
    let getUrlVal = "https://news.naver.com/main/main.naver?mode=LSD&mid=shm&sid1=100";
    axios.get(getUrlVal, {responseType:"arraybuffer"}).then(async(response) => {
        const htmlContent = response.data;
        let htmlCMD = iconv.decode(htmlContent,"EUC-KR").toString();
        // cheerio를 이용한 DOM셀렉터
        const $ = cheerio.load(htmlCMD);
        //#main_content > div > div._persist > div:nth-child(1) > div:nth-child(4) > div.cluster_body > ul > li:nth-child(1) > div.cluster_thumb > div > a > img
        let imgData = $('ul > li > div.cluster_thumb > div > a > img');
        for(var i=0, cnt=0; i<10; i++) {
            let imgUrl = imgData[i].attribs.src
            //console.log(imgUrl.split('?')[0]);
            let imgDataUrl = imgUrl.split('?')[0];
            //console.log(imgDataUrl);
            axios.get(imgDataUrl, {responseType: 'arraybuffer'}).then( (imgRes)=>{
                //console.log(imgRes.data);
                fs.writeFile("./download/"+cnt+".jpg", imgRes.data, (err, data1)=>{
                    console.log(">>> 다운로드 완료 " + cnt++);
                });
            });
            await sleep(100);
        }
    });
    res.end();
});


app.get('/', (req, res)=>{
    res.end('<h1>Hello nodejs world</h1>');
});

app.get('/fs', (req, res)=>{
    let message = req.query.message;
    fs.writeFile('mynewfile3.txt', message, function (err) {
        if (err) throw err;
        console.log('Saved!');
        res.redirect('/fs_read');
    });
});

app.get('/fs_read', (req, res)=>{
    fs.readFile('mynewfile3.txt', function(err, data) {
        res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'} );
        res.write(`<h2>${data}</h2>`);
        res.end('<h1>파일 쓰기 테스트</h1>');
    });
});




const server = http.createServer(app);
server.listen(app.get('port'), ()=> {
    console.log('서버 실행 중 : http://localhost:' + app.get('port') );
});



// ---- nodemon으로 서버 실행 하기 ----
// npm install express --save
// npm install nodemon -D
//--------------------------------------------
// package.json에 "script"속성에 "start"항목 추가
// "start": "nodemon index.js",
//---------------------------------------------
// npm run start
///--------------------------------------------
// 외부에서 프로젝트 폴더를 받은 경우
// package.json에 등록된 모듈을 한꺼번에 모두 설치
// npm install 
import "./App.css";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // css impor

function InputBox() {
  const [value, onChange] = useState(new Date());
  window.addEventListener("load", () => {
    document.querySelector(".react-calendar").style.display = "none";
  });
  // console.dir(Calendar);
  return (
    <>
      <div id="form">
        <input type="text" placeholder="제목을 입력하세요" id="title" />
        <Calendar onChange={onChange} value={value} />
        <input
          type="text"
          placeholder="개봉 날짜를 입력하세요"
          value={value}
          id="date"
          onFocus={(e) => {
            document.querySelector(".react-calendar").style.display = "block";
            let tileClick = document.querySelectorAll(".react-calendar__tile");
            tileClick.forEach((item, i) => {
              console.di(item);
              item.addEventListener("click", () => {
                document.querySelector(".react-calendar").style.display =
                  "none";
              });
            });
          }}
        />
        <select name="score" id="score">
          <option value="5">5</option>
          <option value="4">4</option>
          <option value="3">3</option>
          <option value="2">2</option>
          <option value="1">1</option>
        </select>
        <button id="submitBtn">등록</button>
      </div>
    </>
  );
}

function Table() {
  let [movieData, setMovieData] = useState([
    {
      no: 1,
      title: "이상한 변호사 우영우",
      date: "Wed Jun 22 2022 00:00:00 GMT+0900 (한국 표준시)",
      score: 5,
    },
    {
      no: 2,
      title: "이태원 클라스",
      date: "Fri Jan 31 2020 00:00:00 GMT+0900 (한국 표준시)",
      score: 5,
    },
    {
      no: 3,
      title: "쌈 마이웨이",
      date: "Mon May 22 2017 00:00:00 GMT+0900 (한국 표준시)",
      score: 5,
    },
    {
      no: 4,
      title: "스토브 리그",
      date: "Fri Dec 13 2019 00:00:00 GMT+0900 (한국 표준시)",
      score: 5,
    },
  ]);
  return (
    <>
      <table cellSpacing="1">
        <thead>
          <tr>
            <th>순서</th>
            <th>영상 제목</th>
            <th>개봉 날짜</th>
            <th>평점</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {movieData.map((item, i) => {
            return (
              <tr key={i}>
                <td key={i}>{item.no}</td>
                <td key={i}>{item.title}</td>
                <td key={i}>{item.date}</td>
                <td key={i}>{item.score}</td>
                <td key={i}>
                  <button key={i}>삭제</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
function App() {
  return (
    <>
      <div className="App">
        <div className="container">
          <h1>Media Info App</h1>
          <InputBox />
          <Table />
        </div>
      </div>
    </>
  );
}

export default App;

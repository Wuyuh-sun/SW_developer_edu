import { useState } from "react";
import "./App.css";

function App() {
  //input form
  const [name, setName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState();

  //list form
  const [phoneBook, setPhoneBook] = useState([
    {
      name: "홍길동",
      phoneNumber: "010 - 0000 - 0000",
      email: "email1@naver.com",
    },
    {
      name: "김길동",
      phoneNumber: "010 - 0000 - 0001",
      email: "email2@naver.com",
    },
    {
      name: "이길동",
      phoneNumber: "010 - 0000 - 0002",
      email: "email3@naver.com",
    },
    {
      name: "우길동",
      phoneNumber: "010 - 0000 - 0003",
      email: "email4@naver.com",
    },
  ]);
  function listUpdate(name, phoneNumber, email){
    // console.log(name, phoneNumber, email)
    let newData = {name:name, phoneNumber:phoneNumber, email:email};
    let newList = [...phoneBook, newData];
    // console.log(newList)
    setPhoneBook(newList);
  }
  return (
    <>
      <div className="App">
        <h1>전화번호부</h1>

        <div className="inputForm">
          <label htmlFor="">이름</label>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              console.log(e.currentTarget);
              setName(e.currentTarget.value);
            }}
          />

          <label htmlFor="">전화번호</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => {
              console.log(e.currentTarget);
              setPhoneNumber(e.currentTarget.value);
            }}
          />

          <label htmlFor="">이메일</label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              console.log(e.currentTarget);
              setEmail(e.currentTarget.value);
            }}
          />

          <button
            onClick={(e) => {
              listUpdate(name,phoneNumber,email);
            }}
          >
            등록
          </button>
        </div>
        <hr />

        <ul className="list">
          {phoneBook.map((item, i) => {
            return (
              <li className="listOb" key={i}>
                <li>
                  <span>{i + 1}. </span>
                  <span>{item.name} </span>/
                  <span> {item.phoneNumber} </span>/
                  <span> {item.email} </span>
                </li>
                <li>
                  <button>삭제</button>
                  <button>이메일 전송</button>
                </li>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;

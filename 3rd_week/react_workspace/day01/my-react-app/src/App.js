import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import TodoList from './TodoList'

// 1. 클래스형 콤포넌트
// 2. 함수형 콤포넌트
// 3. 외부 파일에 콤포넌트 선언

// 구조 분해 할당
function InputWork({todoList, setTodoList}) {
  const [work, setWork] = useState("새로운 일");
  return (<div>
    <label>할 일 : </label>
    <input value={work} onChange={(e)=>{
      setWork(e.currentTarget.value)
    }} />
    <button onClick={(e)=>{
      setTodoList([...todoList, {work, isDone:false}])
    }}>저장</button>
    <div>{work}</div>
  </div>)
}

function TodoList2(props) {
  const [todoList, setTodoList] = useState([
    {work:'첫 번째 할 일', isDone:false},
    {work:'두 번째 할 일', isDone:false},
    {work:'세 번째 할 일', isDone:false}
  ]);
  
  return (<>
  <h3>{props.title}</h3>
    <InputWork todoList={todoList} setTodoList={setTodoList}  />
    <ol>
      {todoList.map((item, i)=>{
        return (<li ky={i}>
        <span>{item.work}</span>
        <button>완료</button>
        <button>삭제</button>
      </li>)
      })}
    </ol>
  </>)
}

function App() {
  return (
    <div>
      <h1>Hello Comstudy21</h1>
      <TodoList2 title="할 일 목록" />
    </div>
  );
}

export default App;
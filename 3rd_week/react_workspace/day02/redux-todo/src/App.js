import "./App.css";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function App() {
  return (
    <>
      <div className="app">
        <div className="container">
          <h1>To Do List</h1>
          <hr />
          <hr />
          <TodoInput></TodoInput>
          <hr />
          <hr />
          <TodoList></TodoList>
        </div>
      </div>
    </>
  );
}

export default App;

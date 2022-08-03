import React from "react";

class TodoList extends React.Component {
  constructor(props) {
    console.log(props.title);
    super(props);

    this.state = {
      data: "hahahaha",
    };
  }

  render() {
    let styleObj = { color: "blue", textDecoration: "underline" };
    return (
      <>
        <h2>Todo List</h2>
        <div>
          <label htmlFor="">할일 : </label>
          <input
            type="text"
            value={this.state.data}
            onChange={(e) => {
              console.log(e.currentTarget.value);
              this.setState({ data: e.currentTarget.value });
            }}
          />
          <div id="status">상태 : {this.state.data}</div>
          <ol>
            <li>
              <span style={styleObj}>프로젝트 기획하기</span>
              <button>완료</button>
              <button>삭제</button>
            </li>
          </ol>
        </div>
      </>
    );
  }
}

export default TodoList;

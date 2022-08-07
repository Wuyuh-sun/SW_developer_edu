import { useDispatch } from "react-redux";

export default function TodoInput() {
  let dispatch = useDispatch();
  let i = 2;
  return (
    <>
      <div className="inputForm">
        <input
          className="todoInputText"
          type="text"
          placeholder="할 일을 입력하세요"
        />
        <input className="todoInputDate" type="date" />
        <p>
          <button
            className="inputBtn"
            onClick={(e) => {
              i++;
              dispatch({
                type: "update",
                no:i,
                todo: document.querySelector(".todoInputText").value,
                date: document.querySelector(".todoInputDate").value});
            }}
          >
            글 쓰기
          </button>
        </p>
      </div>
    </>
  );
}

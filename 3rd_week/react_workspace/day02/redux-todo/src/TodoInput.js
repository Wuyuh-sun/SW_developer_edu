export default function TodoInput() {
  return (
    <>
      <div className="inputForm">
        <input
          className="todoInputText"
          type="text"
          placeholder="할 일을 입력하세요"
        />
        <input className="todoInputData" type="date" />
        <p>
          <button className="inputBtn">글 쓰기</button>
        </p>
      </div>
    </>
  );
}

import { useSelector } from "react-redux";

export default function TodoList() {
  
  return (
    <>
      <div className="listForm">
        <ul>
          {}
          <li className="listEle">
            <div className="todoTop">
              <span>2022-05-10</span>
              <span>
                <button>✔️</button>
                <button>❌</button>
              </span>
            </div>
            <span>
              Lorem ipsum dolor sit amet adipisicing elit. Ex optio dolor
              officia vitae,{" "}
            </span>
            <hr />
          </li>
        </ul>
      </div>
    </>
  );
}

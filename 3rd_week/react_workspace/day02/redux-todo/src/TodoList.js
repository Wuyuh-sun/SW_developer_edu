import { useSelector, useDispatch } from "react-redux";

export default function TodoList() {
  let list = useSelector((state) => {
    return state;
  });
  let dispatch = useDispatch();
  let todoContent = null;
  return (
    <>
      <div className="listForm">
        <ul>
          {list.map((item, i) => {
            return (
              <li className="listEle" key={item.no}>
                <div className="todoTop">
                  <span>{item.date}</span>
                  <span>
                    <button onClick={(e)=>{
                      todoContent = e.currentTarget.parentNode.parentNode.parentNode.childNodes[1];
                      if(todoContent.style.textDecoration == "line-through red"){
                        todoContent.style.textDecoration = "none";
                      } else{
                        todoContent.style.textDecoration = "line-through red";
                      }
                      
                    }}>✔️</button>
                    <button onClick={(e)=>{
                      dispatch({
                        type: "delete",
                        contentNum: i
                      });
                    }}>❌</button>
                  </span>
                </div>
                <span className={"todoContent"+i}>{item.todo}</span>
                <hr />
              </li>
            );
          })}
          {/* <li className="listEle">
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
          </li> */}
        </ul>
      </div>
    </>
  );
}

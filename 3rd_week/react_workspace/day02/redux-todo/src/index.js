import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./App";

const date = new Date();

const currentState = [
  {
    no: 0,
    date: "2022-06-11",
    todo: "Lorem ipsum dolor sit amet adipisicing elit. Ex optio dolor officia vitae,",
  },
  {
    no: 1,
    date: "2022-06-12",
    todo: "Lorem ipsum dolor sit amet adipisicing elit. Ex optio ",
  },
  {
    no: 2,
    date: "2022-06-13",
    todo: "Lorem ipsum dolor sit amet adipisicing elit.",
  },
];


function reducer(state = currentState, action) {
  if (action.type === "update") {
    if(action.date === ""){
      action.date = String(date.getFullYear()) + "-" + String(date.getMonth() + 1).padStart(2, "0") + "-" + String(date.getDay()).padStart(2, "0");
    }
    if(action.todo === ""){
      action.todo = "빈 글입니다.";
    }
    state = [...state, {no:action.no, date: action.date, todo: action.todo}];
  }
  if(action.type === "delete"){
    state.splice(action.contentNum, 1);
    state = [...state];
  }
  return state;
}

let store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

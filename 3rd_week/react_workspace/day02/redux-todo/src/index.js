import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./App";

const currentState = [
  {
    date: "2022-06-11",
    todo: "Lorem ipsum dolor sit amet adipisicing elit. Ex optio dolor officia vitae,",
  },
  {
    date: "2022-06-12",
    todo: "Lorem ipsum dolor sit amet adipisicing elit. Ex optio ",
  },
  {
    date: "2022-06-13",
    todo: "Lorem ipsum dolor sit amet adipisicing elit.",
  },
];


function reducer(state = currentState, action) {
  if (action.type === "update") {
    state.push({ date: action.date, todo: action.todo });
    console.log(state);
  }
}

let store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import initialState from './store/initialState';
import App from "./components/App";

const rootReducer = (state = initialState) => {
  return state;
}

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.querySelector("#root")
);
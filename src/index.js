import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import initialState from './store/initialState';
import App from "./components/App";
import configureStore from "./store/configureStore";
import "./style.css";

const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
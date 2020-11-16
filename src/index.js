import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Head from "./counter.js";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <div>
    <Head />
    <App />
  </div>,
  rootElement
);

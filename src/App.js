import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import "./styles.css";

export default function App() {
  const [text, settext] = useState(0);
  function increment() {
    settext(text + 1);
  }
  function dectement() {
    settext(text - 1);
  }
  function reset() {
    settext(0);
  }
  return (
    <div className="App">
      <h1 className="text">{text}</h1>
      <div className="btn-container">
        <button className="btn-decre btn" onClick={dectement}>
          <RemoveIcon />
        </button>
        <button className="btn-reset btn" onClick={reset}>
          <DeleteOutlinedIcon />
        </button>
        <button className="btn-incre btn" onClick={increment}>
          <AddIcon />
        </button>
      </div>
    </div>
  );
}

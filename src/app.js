import React from "react";
import { useState, useEffect } from "react";

export default function App() {
  //Create a counter

  var [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked count ${count} times`;
  });

  return (
    <div>
      <div>
        <b>{count}</b>
      </div>
      <button style={buttonStyle} onClick={() => setCount(++count)}>
        <b>Touch me</b>
      </button>
    </div>
  );
}

var buttonStyle = {
  color: "black",
  border: "2px solid black",
  padding: "10px",
  background: "white"
};

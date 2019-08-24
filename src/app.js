import React from "react";
import { useState, useEffect } from "react";

export default function App() {
  //Create a counter

  var [count, setCount] = useState(0);

  return (
    <div>
      <div>{count}</div>
      <button style={buttonStyle} onClick={() => setCount(++count)}>
        Touch me
      </button>
    </div>
  );
}

var buttonStyle = {
  color: "blue"
};

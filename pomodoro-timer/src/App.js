import React from "react";
import "./App.css";

const min = 25;
const sec = 10;

const start = (sec) => {
  while (sec >= 0) {
    sec--;
  }
};

function App() {
  return (
    <div className="App">
      <h1>POMODORO</h1>

      <div className="timer">
        <span>{min}</span>
        <span>:</span>
        <span>{`${sec}`}</span>
      </div>

      <div className="buttons">
        <button onClick={start(sec)}>Start</button>
        <button>Stop</button>
        <button>Reset</button>
      </div>
    </div>
  );
}

export default App;

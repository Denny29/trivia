import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

let questionNum = 0;

function App() {
  return (
    <div className="app">
      <h1>Trivia!</h1>
      <Question text="How many states are in the United States?" />
      <NextQuestion />
    </div>
  );
}

function Question(props) {
  return <p>{props.text}</p>;
}

function NextQuestion() {
  return <button>NextQuestion</button>;
}

export default App;

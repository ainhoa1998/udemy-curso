import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Bienvenidos a este curso</h2>
        </div>
        <h3>Vamos a aprender React</h3>
        <p>Hola mundo, estoy usando React</p>
        <strong>Esto es un strong</strong>
      </div>
    );
  }
}

export default App;

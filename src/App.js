import React, { Component } from "react";
import "./App.css";
import { Word } from "./components/Word/Word";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Word silentLetters={[2]} pronunciation="ˈtɔːk/">
          talk
        </Word>
      </div>
    );
  }
}

export default App;

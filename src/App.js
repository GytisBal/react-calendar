import React, { Component } from "react";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="md-form mt-0">
        <input
          className="form-control"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
      </div>
    );
  }
}

export default App;

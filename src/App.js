import React, { Component } from "react";
import Palette from "./components/Palette";
import SeedColors from "./components/SeedColors";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Colors app</h1>
        <Palette {...SeedColors} />
      </div>
    );
  }
}

export default App;

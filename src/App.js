import React, { Component } from "react";
import Palette from "./components/Palette";
import SeedColors from "./components/SeedColors";
class App extends Component {
  render() {
    return (
      <div>
        <Palette {...SeedColors[6]} />
      </div>
    );
  }
}

export default App;

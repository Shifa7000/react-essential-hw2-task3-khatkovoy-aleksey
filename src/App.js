import React from "react";
import "./App.css";
import DivText from "./DivText";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <DivText div1Text="Some random text 1" div2Text="Some random text 2" div3Text="Some random text 3" />
      </div>
    );
  }
}

export default App;

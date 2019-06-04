import React from "react";
import { render } from "react-dom";
import OutputState from "./components/OutputState.jsx"
//import "./../scss/main.scss";


class App extends React.Component {
  render() {
    return (
      <div >
        <OutputState name = "testsssse"/>
        <OutputState name = "testsssse"/>
      </div>
    );
  }
}

render(<App />, document.getElementById("app"));

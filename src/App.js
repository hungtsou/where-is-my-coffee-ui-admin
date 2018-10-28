import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Test from "./components/Test";
import Register from "./components/Register";
import MainNav from "./components/MainNav";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <MainNav />

            <hr />
            <Route path="/" component={Register} />
            <Route path="/test" component={Test} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

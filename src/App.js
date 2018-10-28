import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Test from "./components/Test";
import Register from "./components/Register";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Register</Link>
              </li>
              <li>
                <Link to="/test">test</Link>
              </li>
            </ul>

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

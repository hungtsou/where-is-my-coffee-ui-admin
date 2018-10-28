import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import { Grid } from "react-bootstrap";
import Register from "./components/Register";
import Orders from "./components/Orders";
import Order from "./components/Order";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Grid>
            <ul>
              <li>
                <Link to="/">Register</Link>
              </li>
              <li>
                <Link to="/orders">Orders</Link>
              </li>
            </ul>

            <hr />
            <Route path="/" component={Register} />
            <Route path="/orders" component={Orders} />
            <Route path="/order/:id" component={Order} />
          </Grid>
        </Router>
      </div>
    );
  }
}

export default App;

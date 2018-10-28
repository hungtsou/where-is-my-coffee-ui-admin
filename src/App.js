import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { Grid } from "react-bootstrap";
import Register from "./components/Register";
import MainNav from "./components/MainNav";
import Orders from "./components/Orders";
import Order from "./components/Order";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <React.Fragment>
            <MainNav />
            <Grid>
              <Route path="/" exact component={Register} />
              <Route path="/orders" component={Orders} />
              <Route path="/order/:id" component={Order} />
            </Grid>
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;

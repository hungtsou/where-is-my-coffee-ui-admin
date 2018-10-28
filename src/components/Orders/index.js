import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "react-bootstrap";

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ordersData: null
    };
  }
  componentDidMount() {
    fetch("http://localhost:10100/cafe/", {
      method: "GET"
    })
      .then(response => response.json())
      .then(data => this.setState({ ordersData: data }));
  }

  render() {
    const { ordersData } = this.state;
    const ordersList =
      ordersData &&
      ordersData.map(order => (
        <ListGroupItem key={order.id}>
          <Link to={`order/${order.id}`}>{order.id}</Link>
        </ListGroupItem>
      ));

    return <div>{<ListGroup>{ordersList}</ListGroup>}</div>;
  }
}

export default Orders;

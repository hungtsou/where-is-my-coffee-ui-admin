import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "react-bootstrap";

const ordersData = [
  {
    id: "123",
    name: "Perro Loko"
  },
  {
    id: "12ds4433d3",
    name: "Fulanito Nano"
  },
  {
    id: "a12ds4sa433d3",
    name: "Mengano Sutanito"
  }
];

const ordersList = ordersData.map(order => (
  <ListGroupItem>
    <Link to={`order/${order.id}`}>{order.name}</Link>
  </ListGroupItem>
));

const Orders = () => {
  return (
    <div>
      <ListGroup>{ordersList}</ListGroup>
    </div>
  );
};

export default Orders;

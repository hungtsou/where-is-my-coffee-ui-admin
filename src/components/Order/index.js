import React, { Component } from "react";
import CategorizeForm from "./CategorizeForm";
import { Button } from "react-bootstrap";
import QRCode from 'qrcode.react';

const stylesQR = {
  margin: "0 auto 4rem",
  display: "block"
}

const stylesOrderDetail = {
  textAlign: "center",
  margin: 0,
  padding: 0,
  listStyle: "none",
  fontSize: "3rem"
}

const stylesWrapper = {
  textAlign: "center"
}

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ordersData: null,
      displayForm: false
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
    const { ordersData, displayForm } = this.state;
    const { match, history } = this.props;
    const order =
      ordersData && ordersData.filter(order => order.id === match.params.id)[0];

    return (
      <div style={stylesWrapper}>
        {order &&
          !displayForm && (
            <div style={stylesWrapper}>
              <QRCode value="{order.id}" style={stylesQR} />
              <ul style={stylesOrderDetail}>
                <li>Número de Recibo: #{order.id}</li>
                <li>Silo: {order.category || 'Sin Asignar'}</li>
              </ul>
              <Button
                bsStyle="primary"
                onClick={() => this.setState({ displayForm: true })}
              >
                Mover
              </Button>
            </div>
          )}

        {displayForm && <CategorizeForm orderId={order.id} history={history} />}
      </div>
    );
  }
}

export default Order;

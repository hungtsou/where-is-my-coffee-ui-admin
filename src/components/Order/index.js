import React, { Component } from "react";
import CategorizeForm from "./CategorizeForm";
import { Button } from "react-bootstrap";

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
      <div>
        {order &&
          !displayForm && (
            <div>
              <ul>
                <li>Id: {order.id}</li>
                <li>Category: {order.category}</li>
              </ul>
              <Button
                bsStyle="primary"
                onClick={() => this.setState({ displayForm: true })}
              >
                Editar
              </Button>
            </div>
          )}

        {displayForm && <CategorizeForm orderId={order.id} history={history} />}
      </div>
    );
  }
}

export default Order;

import React from "react";
import CategorizeForm from "./CategorizeForm";

const Order = ({ match }) => {
  return (
    <div>
      <h2>Order: {match.params.id}</h2>
      <CategorizeForm />
    </div>
  );
};

export default Order;

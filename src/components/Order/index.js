import React from "react";
import CategorizeForm from "./CategorizeForm";

const Order = ({ match, history }) => {
  return (
    <div>
      <h2>Order: {match.params.id}</h2>
      <CategorizeForm history={history} />
    </div>
  );
};

export default Order;

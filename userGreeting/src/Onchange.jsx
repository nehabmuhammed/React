import React, { useState } from "react";

function Onchange() {
  const [name, setName] = useState("");
  const [quantity, quantityChange] = useState();
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");

  function changeValue(event) {
    setName(event.target.value);
  }
  function changeQuantity(event) {
    quantityChange(event.target.value);
  }
  function changeComment(event) {
    setComment(event.target.value);
  }
  function changePayment(event) {
    setPayment(event.target.value);
  }
  function changeShipping(event) {
    setShipping(event.target.value);
  }

  return (
    <>
      <div>
        <input type="text" value={name} onChange={changeValue} />
        <p>Name:{name}</p>
        <input type="number" value={quantity} onChange={changeQuantity} />
        <p>Quantity:{quantity}</p>
        <textarea value={comment} onChange={changeComment} />
        <p>comment:{comment}</p>
        <select value={payment} onChange={changePayment}>
          <option value="">Select an option</option>
          <option value="Visa">Visa</option>
          <option value="UPI">UPI</option>
          <option value="Cash on delivery">Cash on Delivery</option>
        </select>
        <p>Payment:{payment}</p>
        <label>
          <input
            type="radio"
            value="pick up"
            checked={shipping === "pick up"}
            onChange={changeShipping}
          />
          pick Up
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="Delivery"
            checked={shipping === "Delivery"}
            onChange={changeShipping}
          />
          Delivery
        </label>
        <p>Shipping:{shipping}</p>
      </div>
    </>
  );
}

export default Onchange;

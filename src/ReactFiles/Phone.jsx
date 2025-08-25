import React, { useState } from "react";

const Phone = () => {
  const [phone, setPhone] = useState({ //function to update that object
    brand: "Apple",
    model: "iPhone 14",
    price: 80000
  });

  const updatePrice = () => {
    setPhone({ ...phone, price: phone.price + 5000 });  //{ ...phone } this is the spread operator, it copies all existing properties (brand, model, price)
  };

  return (
    <div style={{ border: "2px solid gray", padding: "15px", margin: "10px", borderRadius: "8px" }}>
      <h2>📱 Phone Details</h2>
      <p><strong>Brand:</strong> {phone.brand}</p>
      <p><strong>Model:</strong> {phone.model}</p>
      <p><strong>Price:</strong> ₹{phone.price}</p>

      <button
        onClick={updatePrice}
        style={{
          padding: "8px 15px",
          background: "green",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "10px"
        }}
      >
        Update Price
      </button>
    </div>
  );
};

export default Phone;

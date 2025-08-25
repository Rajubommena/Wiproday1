import React, { useState } from "react"; //allows functional components to have state ,data that can change over time

const Electronics = () => { //declaring a functional component ele
  
  const [name, setName] = useState("Laptop");  //current value (name, brand, price) function to update that value (setName, setBrand, setPrice)
  const [brand, setBrand] = useState("Dell");
  const [price, setPrice] = useState(60000);

  
  const updateBrand = () => {
    setBrand("HP");
  };

  
  const increasePrice = () => {
    setPrice(price + 5000);
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "8px", margin: "10px" }}>
      <h2>Electronic Item Details</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Brand:</strong> {brand}</p>
      <p><strong>Price:</strong> ₹{price}</p>

      <button 
        onClick={updateBrand} 
        style={{ marginRight: "10px", padding: "8px 15px", background: "blue", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
      >
        Update Brand
      </button>

      <button 
        onClick={increasePrice} 
        style={{ padding: "8px 15px", background: "green", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
      >
        Increase Price
      </button>
    </div>
  );
};

export default Electronics;

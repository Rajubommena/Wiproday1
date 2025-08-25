import React from "react";

const SweetsList = () => {
  
  const sweets = [
    { id: 1, name: "Gulab Jamun", price: 150 },
    { id: 2, name: "Rasgulla", price: 120 },
    { id: 3, name: "Jalebi", price: 100 },
    { id: 4, name: "Kaju Katli", price: 300 },
    { id: 5, name: "Laddu", price: 180 }
  ];

  return (
    <div style={{ padding: "15px", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h2>Available Sweets</h2>
      {sweets.map((sweet) => (
        <div key={sweet.id} style={{ marginBottom: "8px" }}>
          {sweet.name} - Price: ₹{sweet.price}
        </div>
      ))}
    </div>
  );
};

export default SweetsList;

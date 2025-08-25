import React from "react";
import CanteenItem from "./CanteenItem";

const CanteenMenu = () => {
  return (
    <div style={{ padding: "15px", border: "2px solid #444", borderRadius: "10px" }}>
      <h1>🍴 College Canteen</h1>
      <p><strong>Location:</strong> Ground Floor, Block A</p>
      <p><strong>Open Hours:</strong> 8:00 AM - 8:00 PM</p>
      <hr />

      <h2>Menu</h2>
      <CanteenItem name="Idli" price={30} category="Breakfast" available="Yes" />
      {/*<CanteenItem name="Veg Thali" price={120} category="Lunch" available="Yes" />
      <CanteenItem name="Samosa" price={15} category="Snack" available="No" />
      <CanteenItem name="Tea" price={10} category="Snack" available="Yes" />*/}
    </div>
  );
};

export default CanteenMenu;

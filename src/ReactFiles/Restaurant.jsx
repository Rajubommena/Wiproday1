import React, { Component } from "react";  // Imports React also imports Component so we can create
   //class components by extending it.


class MenuItem extends Component { //we define a reusabl component for a single menu row, inherits from Component
  render() {    //every class component needs render method that returns JSX
    const { name, price, category, available } = this.props; //uses object destructuring to extract values passed from parent into props
    return (
      <tr>
        <td>{name}</td>
        <td>₹{price}</td>
        <td>{category}</td>
        <td>{available}</td>
      </tr>
    );
  }
}


class Restaurant extends Component {
  render() {
    return (
      <div
        style={{
          padding: "20px",
          maxWidth: "600px",
          margin: "30px auto",
          textAlign: "center",
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#fafafa",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
        }}
      >
        <h1 style={{ color: "#333" }}>🍽️ Foodie Hub</h1>
        <p><strong>Location:</strong> MG Road, Hyderabad</p>
        <p><strong>Open Hours:</strong> 10:00 AM - 11:00 PM</p>
        <hr />

        <h2 style={{ margin: "15px 0" }}>📋 Menu</h2>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "10px"
          }}
          border="1"
        >
          <thead style={{ backgroundColor: "#f2f2f2" }}>
            <tr>
              <th>Name of Item</th>
              <th>Price</th>
              <th>Category</th>
              <th>Available</th>
            </tr>
          </thead>
          <tbody>
            <MenuItem name="Paneer Butter Masala" price={180} category="Main Course" available="Yes" />
            <MenuItem name="Veg Biryani" price={150} category="Main Course" available="Yes" />
            <MenuItem name="Chicken 65" price={200} category="Starter" available="No" />
            <MenuItem name="Masala Dosa" price={80} category="Breakfast" available="Yes" />
            <MenuItem name="Coffee" price={30} category="Beverage" available="Yes" />
          </tbody>
        </table>
      </div>
    );
  }
}

export default Restaurant; //in App.js you can use <Restaurant /> to render the whole restaurant page

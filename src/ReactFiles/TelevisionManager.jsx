import React, { Component } from "react";  // Import React and Component

// ✅ Functional Component - Displays list of televisions
const TelevisionList = ({ televisions }) => {
  return (
    <div>
      <h3>Television Models</h3>
      <ul>
        {/* Map through televisions array and display each model */}
        {televisions.map((tv, index) => (
          <li key={index}>{tv}</li>  // key is required for list rendering
        ))}
      </ul>
    </div>
  );
};

// ✅ Class Component - Manages television models
class TelevisionManager extends Component {
  constructor(props) {
    super(props); // Call parent constructor
    this.state = {
      televisions: ["Samsung QLED", "Sony Bravia", "LG OLED"], // Initial state with few TV models
      newModel: "" // Input field value stored here
    };
  }

  // Handle input box change (updates newModel in state)
  handleChange = (event) => {
    this.setState({ newModel: event.target.value }); // update state as user types
  };

  // Add a new television model to the list
  addTelevision = () => {
    if (this.state.newModel.trim() !== "") { // Check input is not empty
      this.setState((prevState) => ({
        televisions: [...prevState.televisions, prevState.newModel], 
        // Use spread operator (...) to copy old models and add new one
        newModel: "" // Reset input box
      }));
    }
  };

  render() {
    return (
      // Center the box for nice UI
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        {/* Inner box with border */}
        <div style={{ padding: "20px", border: "2px solid gray", width: "350px", textAlign: "center" }}>
          <h2>Television Manager</h2>

          {/* Input field to type new television model */}
          <input
            type="text"
            value={this.state.newModel}
            onChange={this.handleChange}
            placeholder="Enter TV model"
          />

          {/* Button to add new television */}
          <button onClick={this.addTelevision} style={{ marginLeft: "10px" }}>
            Add Model
          </button>

          {/* Pass television list as props to functional component */}
          <TelevisionList televisions={this.state.televisions} />
        </div>
      </div>
    );
  }
}

// ✅ Export the class component
export default TelevisionManager;

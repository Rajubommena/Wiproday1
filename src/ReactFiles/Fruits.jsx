import React, { Component } from "react";

// defining a functional component named `FruitList`
//It receives a single prop called `fruits` we use object destructuring to pull it out
const FruitList = ({ fruits }) => {
  return (
    <div>
      <h3>Fruit List</h3>
      <ul>
      

        {fruits.map((fruit, index) => ( ////Loop over the `fruits` array `index` is used as the key
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};
//a class component named `Fruits` that manages state
class Fruits extends Component {
  // constructor runs once when the component is created
  constructor(props) {
    super(props); // // Call the parent component constructor with incoming props
    this.state = {
      fruits: ["Apple", "Banana", "Mango"],
      newFruit: []
    };
  }

  handleChange = (event) => { // Event handler to update `newFruit` as the user types
    this.setState({ newFruit: event.target.value }); // Set state with the new value from the input field
  };

  addFruit = () => {// Event handler this add a new fruit to the list
    if (this.state.newFruit.trim() !== "") {// Prevent adding empty strings
      this.setState((prevState) => ({ // Use functional setState to safely rely on previous state
        fruits: [...prevState.fruits, prevState.newFruit], // Create a new array: copy old fruits and append the new one
        newFruit: []// Clear the input field after adding
      }));
    }
  };

  render() {
    return (
      // ✅ Center the box using flexbox
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <div style={{ padding: "20px", border: "2px solid gray", width: "320px" }}>
          <h2>Manage Fruits</h2>

          <input
            type="text"
            value={this.state.newFruit}
            onChange={this.handleChange} //Click handler to add fruit 
            placeholder="Enter fruit name"
          />
          /* Click handler to add fruit */
          <button onClick={this.addFruit} style={{ marginLeft: "10px" }}>
            Add Fruit
          </button>
           {/* Child component that receives the fruits array as a prop and renders it */}
          <FruitList fruits={this.state.fruits} />
        </div>
      </div>
    );
  }
}

export default Fruits;

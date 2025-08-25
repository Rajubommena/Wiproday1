// Import React and necessary hooks from React
import React, { useState, createContext, useContext } from "react";

// Create a Context object for sharing data between siblings
const FruitContext = createContext();

// ChildA Component 
function ChildA({ fruits }) { 
  // Extract setSelectedFruit function from context
  const { setSelectedFruit } = useContext(FruitContext);

  return (
    // A styled container box
    <div style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "8px", margin: "10px", background: "white" }}>
      <h3>Fruit List</h3>
      {/* Unordered list without default bullets */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {/* Loop through fruits array and display each fruit */}
        {fruits.map((fruit, index) => (
          <li
            key={index} // Unique key for each item
            style={{ cursor: "pointer", padding: "5px 0" }} // Pointer cursor on hover
            onClick={() => setSelectedFruit(fruit)} // Set selected fruit in context on click
          >
            {fruit} {/* Display fruit name */}
          </li>
        ))}
      </ul>
    </div>
  );
}

//ChildB Component 
function ChildB({ addFruit }) {
  return (
    // A styled container box
    <div style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "8px", margin: "10px", background: "white", flex: 1 }}>
      <h3>Sender</h3>
      {/* Button to send "Orange" fruit to parent */}
      <button onClick={() => addFruit("Orange")} style={{ padding: "6px 12px", cursor: "pointer" }}>
        Send Fruit
      </button>
    </div>
  );
}

//ChildC Component
function ChildC() {
  // Extract selectedFruit from context
  const { selectedFruit } = useContext(FruitContext);

  return (
    // A styled container box
    <div style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "8px", margin: "10px", background: "white", flex: 1 }}>
      <h3>Selected Fruit</h3>
      {/* Display selected fruit from context, or "None selected" if empty */}
      <p>{selectedFruit || "None selected"}</p>
    </div>
  );
}

// Parent Component 
function RelationPro() {
  // State to hold fruits list (shared with ChildA)
  const [fruits, setFruits] = useState(["Apple", "Mango"]);
  
  // State to hold selected fruit (shared with ChildC)
  const [selectedFruit, setSelectedFruit] = useState("");

  // Function to add a new fruit (used by ChildB)
  const addFruit = (fruit) => {
    if (!fruits.includes(fruit)) {
      setFruits([...fruits, fruit]); // Update fruits list in parent
    }
  };

  return (
    // Main container with background and padding
    <div style={{ textAlign: "center", padding: "30px", fontFamily: "Arial, sans-serif", background: "#f5f5f5", minHeight: "100vh" }}>
      <h2>React – Parent / Child / Sibling Communication</h2>

      {/* Provide context values to children */}
      <FruitContext.Provider value={{ selectedFruit, setSelectedFruit }}>
        {/* Child A (Fruit list) */}
        <div style={{ maxWidth: "400px", margin: "20px auto" }}>
          <ChildA fruits={fruits} />
        </div>

        {/* Child B (Sender) and Child C (Receiver) placed side by side */}
        <div style={{ display: "flex", justifyContent: "center", maxWidth: "600px", margin: "0 auto" }}>
          <ChildB addFruit={addFruit} />
          <ChildC />
        </div>
      </FruitContext.Provider>
    </div>
  );
}

// Export parent component as default
export default RelationPro;

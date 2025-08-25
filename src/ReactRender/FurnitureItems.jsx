
import React, { useState } from "react"; // Import React and useState hook

//Chair Component 
const Chair = ({ details }) => ( // Functional component Chair, receives "details" props
  <div style={styles.card}> {/* Apply card style */}
    <h2>🪑 {details.name}</h2> {/* Display chair name */}
    <p><b>Price:</b> ₹{details.price}</p> {/* Display price */}
    <p><b>Material:</b> {details.material}</p> {/* Display material */}
    <p><b>Size:</b> {details.size}</p> {/* Display size */}
    <p><b>Brand:</b> {details.brand}</p> {/* Display brand */}
  </div>
);

// Table Component
const Table = ({ details }) => ( // Functional component Table
  <div style={styles.card}> {/* Apply card style */}
    <h2>🍽️ {details.name}</h2> {/* Display table name */}
    <p><b>Price:</b> ₹{details.price}</p>
    <p><b>Material:</b> {details.material}</p>
    <p><b>Size:</b> {details.size}</p>
    <p><b>Brand:</b> {details.brand}</p>
  </div>
);

//Sofa Component 
const Sofa = ({ details }) => ( // Functional component Sofa
  <div style={styles.card}> {/* Apply card style */}
    <h2>🛋️ {details.name}</h2> {/* Display sofa name */}
    <p><b>Price:</b> ₹{details.price}</p>
    <p><b>Material:</b> {details.material}</p>
    <p><b>Size:</b> {details.size}</p>
    <p><b>Brand:</b> {details.brand}</p>
  </div>
);

// Bed Component 
const Bed = ({ details }) => ( // Functional component Bed
  <div style={styles.card}> {/* Apply card style */}
    <h2>🛏️ {details.name}</h2> {/* Display bed name */}
    <p><b>Price:</b> ₹{details.price}</p>
    <p><b>Material:</b> {details.material}</p>
    <p><b>Size:</b> {details.size}</p>
    <p><b>Brand:</b> {details.brand}</p>
  </div>
);

// FurnitureItems Component 
const FurnitureItems = () => {
  const [selectedFurniture, setSelectedFurniture] = useState("Chair"); // State to track which furniture is selected, default is "Chair"

  // All business logic: Furniture Data
  const furnitureData = { // Object containing details of each furniture
    Chair: {
      name: "Wooden Chair",
      price: 2500,
      material: "Teak Wood",
      size: "Standard",
      brand: "Durafurn",
    },
    Table: {
      name: "Dining Table",
      price: 15000,
      material: "Rosewood",
      size: "6-Seater",
      brand: "UrbanLiving",
    },
    Sofa: {
      name: "Luxury Sofa",
      price: 35000,
      material: "Leather",
      size: "3-Seater",
      brand: "ComfyHome",
    },
    Bed: {
      name: "King Size Bed",
      price: 45000,
      material: "Sheesham Wood",
      size: "King",
      brand: "SleepWell",
    },
  };

  // Switch–Case Function for Rendering
  const renderFurniture = () => { // Function decides which component to render
    switch (selectedFurniture) {
      case "Chair":
        return <Chair details={furnitureData.Chair} />; // Pass chair data to Chair component
      case "Table":
        return <Table details={furnitureData.Table} />;
      case "Sofa":
        return <Sofa details={furnitureData.Sofa} />;
      case "Bed":
        return <Bed details={furnitureData.Bed} />;
      default:
        return <h3>Select a furniture item</h3>; // Default fallback
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}> {/* Center aligned container */}
      <h1>🛋️ Furniture Store</h1> {/* Title */}

      {/* Dropdown for Selection */}
      <select
        value={selectedFurniture} // Controlled dropdown, value bound to state
        onChange={(e) => setSelectedFurniture(e.target.value)} // Update state when user selects new value
        style={styles.dropdown} // Apply dropdown styles (this is your line!)
      >
        <option value="Chair">Chair</option> {/* Dropdown option */}
        <option value="Table">Table</option>
        <option value="Sofa">Sofa</option>
        <option value="Bed">Bed</option>
      </select>

      {/* OR Buttons for Selection */}
      <div style={{ marginTop: "15px" }}> {/* Container for buttons */}
        {["Chair", "Table", "Sofa", "Bed"].map((item) => ( // Map through furniture types
          <button
            key={item} // Unique key for React
            onClick={() => setSelectedFurniture(item)} // Update state when clicked
            style={{
              ...styles.button, // Apply base button style
              backgroundColor: selectedFurniture === item ? "#4CAF50" : "#ccc", // Highlight selected button
            }}
          >
            {item} {/* Button text */}
          </button>
        ))}
      </div>

      {/* Dynamic Rendering */}
      <div style={{ marginTop: "20px" }}>{renderFurniture()}</div> {/* Show selected furniture */}
    </div>
  );
};

// Styles
const styles = {
  card: { // Card style used for furniture items
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "15px",
    width: "300px",
    margin: "20px auto",
    boxShadow: "2px 2px 8px rgba(0,0,0,0.1)",
    textAlign: "left",
  },
  dropdown: { // Dropdown style (used in <select style={styles.dropdown}>)
    padding: "8px",
    fontSize: "16px",
    borderRadius: "6px",
  },
  button: { // Button style
    padding: "8px 12px",
    margin: "5px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px",
  },
};

export default FurnitureItems; // Export main component

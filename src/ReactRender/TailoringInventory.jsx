// Import React and React hooks: useEffect (for lifecycle) and useState (for state management)
import React, { useEffect, useState } from "react";

// Import Axios for making HTTP requests
import axios from "axios";

// Define a functional component named TailoringInventory
const TailoringInventory = () => {
  // Declare a state variable `items` (initially empty array) and its setter `setItems`
  const [items, setItems] = useState([]);

  // useEffect runs after the component is rendered 
  useEffect(() => {
    //REACT(FRONTEND)+BACKEND(LOCAL JSON SERVER) INTEGRATION:
    //@GetMapping
    // Make a GET request to JSON Server API
    axios
      .get("http://localhost:5000/tailoringItems")
      .then((response) => {
        // On success, update state with response data
        setItems(response.data);
      })
      .catch((error) => {
        // On failure, log error in the console
        console.error("Error fetching data:", error);
      });
  }, []); // Empty array → run only once when component mounts
  //useEffect runs once (due to empty dependency array []).

  // JSX returned by the component (what will be rendered on screen)
  return (
    <div className="container mt-5">
      {/* Heading for the page */}
      <h2 className="text-center mb-4">Tailoring Inventory</h2>

      {/* Bootstrap styled table */}
      <table className="table table-bordered table-striped shadow">
        <thead className="table-dark">
          <tr>
            {/* Table headers */}
            <th>ID</th>
            <th>Name</th>
            <th>Size</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {/* Conditional rendering:
              If items exist, map through and display them
              Otherwise, show "Loading items..." row */}
          {items.length > 0 ? (
            items.map((item) => (
              // Each row must have a unique key here we use item.id
              <tr key={item.id}>
                {/* Display each property of tailoring item */}
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.size}</td>
                <td>{item.price}</td>
              </tr>
            ))
          ) : (
            // If no items yet (loading), show a message spanning 4 columns
            <tr>
              <td colSpan="4" className="text-center">
                Loading items...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

// Export component so it can be imported in App.js
export default TailoringInventory;

// Importing React library and two React hooks (useState, useEffect)
import React, { useState, useEffect } from "react";

//  Component shown while data is still loading
const LoadingComponent = () => (
  // A blue text message centered on the screen
  <h2 style={{ color: "blue", textAlign: "center" }}>
    Loading product details...
  </h2>
);

// Component shown when there is an error fetching data
const ErrorComponent = () => (
  // A red error message centered on the screen
  <h2 style={{ color: "red", textAlign: "center" }}>
    Error fetching product details
  </h2>
);

//  Component to display product details when data is available
const ProductComponent = ({ product }) => (
  // Outer card container with custom styles
  <div style={styles.card}>
    {/* Product name with a box emoji */}
    <h2>📦 {product.name}</h2>

    {/* Product brand */}
    <p><b>Brand:</b> {product.brand}</p>

    {/* Product price + inline check for Premium or Budget */}
    <p>
      <b>Price:</b> ₹{product.price} →{" "}
      {product.price > 50000 ? " Premium Product" : " Budget Product"}
    </p>

    {/* Product category */}
    <p><b>Category:</b> {product.category}</p>

    {/* Product warranty (shows years if > 0, else 'No Warranty') */}
    <p>
      <b>Warranty:</b>{" "}
      {product.warranty > 0 ? `${product.warranty} years` : " No Warranty"}
    </p>

    {/* Product availability (boolean condition) */}
    <p>
      <b>Availability:</b>{" "}
      {product.availability ? " In Stock" : " Out of Stock"}
    </p>

    {/* Extra message if product category is Laptop */}
    {product.category === "Laptop" ? (
      <p style={{ color: "green" }}> Free Laptop Bag Offer!</p>
    ) : null}
  </div>
);

// CSS-like styling object for the product card
const styles = {
  card: {
    border: "1px solid #ccc",             // Light gray border
    borderRadius: "10px",                 // Rounded corners
    padding: "20px",                      // Inner spacing
    width: "350px",                       // Fixed width
    margin: "20px auto",                  // Center align with margin
    boxShadow: "2px 2px 8px rgba(0,0,0,0.2)", // Drop shadow effect
    textAlign: "left",                    // Align text to left
    fontSize: "16px",                     // Default font size
  },
};

//  Main App Component
function ElectronicApp() {
  // Local states
  const [loading, setLoading] = useState(true);   // Tracks if data is loading
  const [error, setError] = useState(false);      // Tracks if error occurred
  const [product, setProduct] = useState(null);   // Stores product details

  // useEffect hook runs after initial render (like componentDidMount)
  useEffect(() => {
    // Simulating API call with 2 seconds delay
    setTimeout(() => {
      // Random success/failure (70% chance success, 30% error)
      const success = Math.random() > 0.3;

      if (success) {
        // Mock product data (pretend we got it from API)
        setProduct({
          name: "MacBook Pro",
          brand: "Apple",
          price: 120000,
          category: "Laptop",
          warranty: 2,
          availability: true,
        });
        setError(false); // Reset error state
      } else {
        setError(true); // Mark as error if fetch fails
      }

      setLoading(false); // Stop loading after API response
    }, 2000); // Delay = 2 seconds
  }, []); // Empty dependency → runs only once (on mount)

// Conditional Rendering using ternary operator
//   If loading → show LoadingComponent
//   Else if error → show ErrorComponent
//   Else → show ProductComponent with product details
  return (
    <div>
      {/* Main heading */}
      <h1 style={{ textAlign: "center" }}>🔌 Electronics Store</h1>

      {loading ? (
        <LoadingComponent />   // Case 1: Still loading
      ) : error ? (
        <ErrorComponent />     // Case 2: Error occurred
      ) : (
        <ProductComponent product={product} /> // Case 3: Data loaded successfully
      )}
    </div>
  );
}

// Exporting the main component so it can be used in index.js
export default ElectronicApp;

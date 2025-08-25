import React, { useState, useEffect } from "react"; 

// Component: RestaurantRegistration
const RestaurantRegistration = () => {
  // State 
  // Initial state for form fields (restaurantName, ownerName, etc.)
  const [formData, setFormData] = useState({
    restaurantName: "",
    ownerName: "",
    email: "",
    contactNumber: "",
    address: "",
    cuisineType: "",
    openingHours: "",
  });

  // State to store submitted form data
  const [submittedData, setSubmittedData] = useState(null);

  // Handlers
  // Handle input changes and update formData dynamically
  const handleChange = (e) => {
    const { name, value } = e.target; // Extract name & value from input
    setFormData((prev) => ({ ...prev, [name]: value })); // Update corresponding field
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    setSubmittedData(formData); // Save form data into submittedData
  };


  //  Run on every render
  useEffect(() => {
    console.log("Component rendered/re-rendered");
  });

  //  Run only once (on mount)
  useEffect(() => {
    console.log("Component mounted (runs only once)");
  }, []);

  //  Run whenever form data changes
  useEffect(() => {
    console.log("Form data changed:", formData);
  }, [formData]);

  //  Auto-save every 5 seconds (with cleanup to avoid memory leaks)
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Auto-saving form data...", formData);
      localStorage.setItem("restaurantForm", JSON.stringify(formData)); // Save to localStorage
    }, 5000);

    // Cleanup function to clear interval when component unmounts
    return () => clearInterval(interval);
  }, [formData]);

  return (
    <div style={styles.container}>
      <h1 style={{ textAlign: "center" }}>🍴 Restaurant Registration</h1>

      {/* Form Section */}
      <form onSubmit={handleSubmit} style={styles.form}>
        <label>
          Restaurant Name:
          <input
            type="text"
            name="restaurantName"
            value={formData.restaurantName}
            onChange={handleChange} // Update state on change
          />
        </label>

        <label>
          Owner Name:
          <input
            type="text"
            name="ownerName"
            value={formData.ownerName}
            onChange={handleChange}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>

        <label>
          Contact Number:
          <input
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
          />
        </label>

        <label>
          Address:
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
          ></textarea>
        </label>

        <label>
          Cuisine Type:
          <input
            type="text"
            name="cuisineType"
            value={formData.cuisineType}
            onChange={handleChange}
          />
        </label>

        <label>
          Opening Hours:
          <input
            type="text"
            name="openingHours"
            value={formData.openingHours}
            onChange={handleChange}
          />
        </label>

        {/* Submit Button */}
        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>

      {/* Display submitted JSON data */}
      {submittedData && (
        <div style={styles.output}>
          <h2>📋 Submitted Data (JSON)</h2>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

// CSS in JS 
const styles = {
  container: {
    fontFamily: "Arial, sans-serif", // Font style
    padding: "20px", // Padding around container
  },
  form: {
    display: "flex", // Flexbox layout
    flexDirection: "column", // Arrange items vertically
    gap: "12px", // Space between inputs
    maxWidth: "400px", // Limit form width
    margin: "0 auto", // Center align
    padding: "20px", // Inner spacing
    border: "1px solid #ccc", // Border around form
    borderRadius: "10px", // Rounded corners
    boxShadow: "2px 2px 10px rgba(0,0,0,0.1)", // Light shadow
  },
  button: {
    padding: "10px", // Button padding
    backgroundColor: "#4CAF50", // Green background
    color: "white", // White text
    border: "none", // Remove border
    borderRadius: "6px", // Rounded corners
    cursor: "pointer", // Pointer on hover
    fontSize: "16px", // Bigger text
  },
  output: {
    marginTop: "20px", // Space above
    padding: "15px", // Inner spacing
    border: "1px solid #ddd", // Light border
    borderRadius: "8px", // Rounded corners
    backgroundColor: "#f9f9f9", // Light gray background
  },
};

// Export component
export default RestaurantRegistration;

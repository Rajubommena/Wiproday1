// Import React and the base `Component` class to create a class-based component
import React, { Component } from "react";

class MarriageForm extends Component {
  // Initialize state in the class component
  constructor(props) {
    super(props); // Call the parent constructor 
    // Keep multiple fields in a single `form` object; also keep a `submitted` snapshot
    this.state = {
      form: {
        brideName: "", 
        groomName: "", 
        date: "",      
        venue: ""  
      },
      submitted: null  // Will hold a copy of form data after submission
    };
  }

  // Generic change handler for all inputs
  handleChange = (e) => {
    const { name, value } = e.target; // Read input's name and value
    this.setState((prev) => ({
      // Create a new form object by copying previous values and updating the changed field using:name
      form: { ...prev.form, [name]: value }
    }));
  };

  // Handle form submission
  handleSubmit = (e) => { //defines a class method using an arrow function so it automatically binds this
    e.preventDefault(); // Stop the browser from reloading the page
    this.setState((prev) => ({
      // Save a snapshot of the current form data into `submitted` and display stored data
      submitted: { ...prev.form }
    }));
  };

  // Optional: clear the form fields
  handleReset = () => {
    this.setState({
      form: { brideName: "", groomName: "", date: "", venue: "" }
    });
  };

  // Render method describes the UI
  render() {
    // Destructure for cleaner JSX
    const { brideName, groomName, date, venue } = this.state.form;
    const { submitted } = this.state;

    return (
  
      <div className="container my-5">
        
        <div className="row justify-content-center">
         
          <div className="col-md-8">
            
            <div className="card shadow-sm">
              <div className="card-header">
                <h4 className="mb-0">Marriage Form</h4>
              </div>

              
              <div className="card-body">
                {/* Form element; onSubmit triggers our handler */}
                <form onSubmit={this.handleSubmit} autoComplete="off">
                  <div className="form-group mb-3">
                    <label htmlFor="brideName" className="form-label">
                      Bride Name
                    </label>
                    <input
                      type="text"                 
                      id="brideName"              
                      name="brideName"            
                      className="form-control"    
                      placeholder="Enter Bride Name" 
                      value={brideName}           
                      onChange={this.handleChange} 
                      required                   
                    />
                  </div>

                  <div className="form-group mb-3">
                    <label htmlFor="groomName" className="form-label">
                      Groom Name
                    </label>
                    <input
                      type="text"
                      id="groomName"
                      name="groomName"
                      className="form-control"
                      placeholder="Enter Groom Name"
                      value={groomName}
                      onChange={this.handleChange}
                      required
                    />
                  </div>

                  <div className="form-group mb-3">
                    <label htmlFor="date" className="form-label">
                      Date
                    </label>
                   
                    <input
                      type="date"
                      id="date"
                      name="date"
                      className="form-control"
                      value={date}
                      onChange={this.handleChange}
                      required
                    />
                  </div>

                  <div className="form-group mb-4">
                    <label htmlFor="venue" className="form-label">
                      Venue
                    </label>
                    <input
                      type="text"
                      id="venue"
                      name="venue"
                      className="form-control"
                      placeholder="Enter Venue"
                      value={venue}
                      onChange={this.handleChange}
                      required
                    />
                  </div>

                  <div className="d-flex gap-2">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={this.handleReset}
                    >
                      Clear
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {submitted && (
              <div className="card mt-4">
                <div className="card-header">
                  <h5 className="mb-0">Submitted Marriage Details</h5>
                </div>

                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <strong>Bride Name: </strong>
                    <span>{submitted.brideName || "-"}</span>
                  </li>
                  <li className="list-group-item">
                    <strong>Groom Name: </strong>
                    <span>{submitted.groomName || "-"}</span>
                  </li>
                  <li className="list-group-item">
                    <strong>Date: </strong>
                    <span>{submitted.date || "-"}</span>
                  </li>
                  <li className="list-group-item">
                    <strong>Venue: </strong>
                    <span>{submitted.venue || "-"}</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

// Export the component so it can be used in App.js
export default MarriageForm;

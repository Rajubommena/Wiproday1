import React, { Component, createRef } from "react";

class FlightBookingUncontrolled extends Component {
  constructor(props) {
    super(props);
    // Creating refs for each input field (uncontrolled components)
    this.flightNoRef = createRef(); // Reference for Flight Number input
    this.sourceRef = createRef();   // Reference for Source input
    this.destRef = createRef();     // Reference for Destination input
    this.dateRef = createRef();     // Reference for Date input
    this.termsRef = createRef();    // Reference for Terms Accepted checkbox

    // State to hold submitted booking details (initially null)
    this.state = { details: null }; 
  }

  // Function to handle form submission
  handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload on form submit
    
    // Collecting values directly from refs (uncontrolled approach)
    const details = {
      flightNo: this.flightNoRef.current.value,     // Get Flight Number
      source: this.sourceRef.current.value,         // Get Source
      destination: this.destRef.current.value,      // Get Destination
      date: this.dateRef.current.value,             // Get Travel Date
      terms: this.termsRef.current.checked,         // Get checkbox status
    };

    // Updating state with submitted details
    this.setState({ details });
  };

  render() {
    const { details } = this.state; // Destructuring details from state

    return (
      <div className="d-flex justify-content-center mt-4">
        <div className="col-md-6">
          <div className="card shadow p-4">
            {/* Form heading */}
            <h4 className="text-center mb-3">Uncontrolled Flight Booking Form</h4>
            
            {/* Form starts here */}
            <form onSubmit={this.handleSubmit}>
              
              {/* Flight Number input */}
              <div className="mb-3">
                <label>Flight Number</label>
                <input type="text" className="form-control" ref={this.flightNoRef} />
              </div>

              {/* Source input */}
              <div className="mb-3">
                <label>Source</label>
                <input type="text" className="form-control" ref={this.sourceRef} />
              </div>

              {/* Destination input */}
              <div className="mb-3">
                <label>Destination</label>
                <input type="text" className="form-control" ref={this.destRef} />
              </div>

              {/* Travel Date input */}
              <div className="mb-3">
                <label>Travel Date</label>
                <input type="date" className="form-control" ref={this.dateRef} />
              </div>

              {/* Terms and conditions checkbox */}
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" ref={this.termsRef} />
                <label className="form-check-label">Terms Accepted</label>
              </div>

              {/* Submit button */}
              <button className="btn btn-success w-100" type="submit">
                Submit
              </button>
            </form>

            {/* Display submitted details if available */}
            {details && (
              <div className="card mt-4">
                <div className="card-body">
                  <h5 className="card-title">Flight Details</h5>
                  <p>Flight Number: {details.flightNo}</p>
                  <p>Source: {details.source}</p>
                  <p>Destination: {details.destination}</p>
                  <p>Travel Date: {details.date}</p>
                  <p>Terms Accepted: {details.terms ? "Yes" : "No"}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

// Exporting the component for use in other files
export default FlightBookingUncontrolled;

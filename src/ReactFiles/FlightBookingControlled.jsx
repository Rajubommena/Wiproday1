import React, { Component } from "react";

class FlightBookingControlled extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passengerName: "",
      email: "",
      gender: "",
      meal: "Veg",
      request: "",
      submitted: false,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }); //Updates component state when any input changes
  };

  handleSubmit = (e) => {
    e.preventDefault(); //Stops the browser’s default form submission
    this.setState({ submitted: true });
  };

  render() {
    const { passengerName, email, gender, meal, request, submitted } =
      this.state;

    return (
      <div className="d-flex justify-content-center mt-4">
        <div className="col-md-6">
          <div className="card shadow p-4">
            <h4 className="text-center mb-3">Controlled Flight Booking Form</h4>
            <form onSubmit={this.handleSubmit}>
              <div className="mb-3">
                <label>Passenger Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="passengerName"
                  value={passengerName}
                  onChange={this.handleChange}
                />
              </div>

              <div className="mb-3">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                />
              </div>

              <div className="mb-3">
                <label>Gender</label> <br />
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={gender === "Male"}
                  onChange={this.handleChange}
                />{" "}
                Male
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={gender === "Female"}
                  onChange={this.handleChange}
                  className="ms-2"
                />{" "}
                Female
              </div>

              <div className="mb-3">
                <label>Meal Preference</label>
                <select
                  className="form-control"
                  name="meal"
                  value={meal}
                  onChange={this.handleChange}
                >
                  <option value="Veg">Veg</option>
                  <option value="Non-Veg">Non-Veg</option>
                </select>
              </div>

              <div className="mb-3">
                <label>Special Request</label>
                <input
                  type="text"
                  className="form-control"
                  name="request"
                  value={request}
                  onChange={this.handleChange}
                />
              </div>

              <button className="btn btn-primary w-100" type="submit">
                Submit
              </button>
            </form>

            {submitted && (
              <table className="table table-bordered mt-4">
                <thead>
                  <tr>
                    <th>Passenger Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Meal</th>
                    <th>Request</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{passengerName}</td>
                    <td>{email}</td>
                    <td>{gender}</td>
                    <td>{meal}</td>
                    <td>{request}</td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default FlightBookingControlled;

import React, { Component } from "react";

class AccessoriesForm extends Component {
  constructor(props) {
    super(props);

    // ✅ State to hold form inputs
    this.state = {
      accessoryName: "",
      description: "",
      category: "",
      brand: "",
      available: false,
      warranty: "",
      submitted: null // will store submitted form details
    };
  }

  // ✅ Handle input changes (for text, textarea, select, number, radio, checkbox)
  handleChange = (e) => {//Defines an arrow function handleChange that will run whenever a form input changes
    //e.target is the input element that triggered the event (e.g., a text box, checkbox, radio)
    const { name, value, type, checked } = e.target;//e.target is the input element that triggered the change
    this.setState({
      [name]: type === "checkbox" ? checked : value//input is a checkbox, update state with true or false
    });
  };

  // ✅ Handle form submission
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState((prev) => ({
      submitted: {
        accessoryName: prev.accessoryName,
        description: prev.description,
        category: prev.category,
        brand: prev.brand,
        available: prev.available,
        warranty: prev.warranty
      }
    }));
  };

  render() {
    const {
      accessoryName,
      description,
      category,
      brand,
      available,
      warranty,
      submitted
    } = this.state;

    return (
      <div className="container mt-4">
        <div className="card p-4 shadow">
          <h2 className="text-center">Accessories Form</h2>
          <form onSubmit={this.handleSubmit}>
            {/* ✅ Text input */}
            <div className="form-group mb-3">
              <label>Accessory Name</label>
              <input
                type="text"
                className="form-control"
                name="accessoryName"
                value={accessoryName}
                onChange={this.handleChange}
                required
              />
            </div>

           
            <div className="form-group mb-3">
              <label>Description</label>
              <textarea
                className="form-control"
                name="description"
                value={description}
                onChange={this.handleChange}
                rows="3"
              ></textarea>
            </div>

     
            <div className="form-group mb-3">
              <label>Category</label>
              <select
                className="form-control"
                name="category"
                value={category}
                onChange={this.handleChange}
                required
              >
                <option value="">Select Category</option>
                <option value="Electronics">Electronics</option>
                <option value="Fashion">Fashion</option>
                <option value="Home">Home</option>
              </select>
            </div>

            
            <div className="form-group mb-3">
              <label>Brand</label>
              <div>
                <input
                  type="radio"
                  name="brand"
                  value="Sony"
                  checked={brand === "Sony"}
                  onChange={this.handleChange}
                />{" "}
                Sony
                <br />
                <input
                  type="radio"
                  name="brand"
                  value="Samsung"
                  checked={brand === "Samsung"}
                  onChange={this.handleChange}
                />{" "}
                Samsung
                <br />
                <input
                  type="radio"
                  name="brand"
                  value="LG"
                  checked={brand === "LG"}
                  onChange={this.handleChange}
                />{" "}
                LG
              </div>
            </div>

            
            <div className="form-group mb-3">
              <input
                type="checkbox"
                name="available"
                checked={available}
                onChange={this.handleChange}
              />{" "}
              Available in stock
            </div>

            
            <div className="form-group mb-3">
              <label>Warranty (in years)</label>
              <input
                type="number"
                className="form-control"
                name="warranty"
                value={warranty}
                onChange={this.handleChange}
                min="0"
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </form>
        </div>

        {/* ✅ Display submitted details in Bootstrap table */}
        {submitted && (
          <div className="mt-4">
            <h3>Submitted Details</h3>
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <th>Accessory Name</th>
                  <td>{submitted.accessoryName}</td>
                </tr>
                <tr>
                  <th>Description</th>
                  <td>{submitted.description}</td>
                </tr>
                <tr>
                  <th>Category</th>
                  <td>{submitted.category}</td>
                </tr>
                <tr>
                  <th>Brand</th>
                  <td>{submitted.brand}</td>
                </tr>
                <tr>
                  <th>Available</th>
                  <td>{submitted.available ? "Yes" : "No"}</td>
                </tr>
                <tr>
                  <th>Warranty</th>
                  <td>{submitted.warranty} Years</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}

export default AccessoriesForm;

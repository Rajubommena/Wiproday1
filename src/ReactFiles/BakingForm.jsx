import React, { useState } from "react";

const BakingForm = () => {
  // State for form inputs (single object for all fields)
  const [form, setForm] = useState({
    itemName: "",
    quantity: "",
    ingredients: "",
    bakingTime: "",
    category: "Cake",
  });

  // State for storing submitted baking items (list)
  const [items, setItems] = useState([]);

  // Handle input changes (generic for all fields)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setItems([...items, form]); // add new item to list
    setForm({ itemName: "", quantity: "", ingredients: "", bakingTime: "", category: "Cake" }); // reset form
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow">
        <h3 className="mb-3">Baking Item Form</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label>Item Name</label>
            <input
              type="text"
              name="itemName"
              value={form.itemName}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="form-group mb-3">
            <label>Quantity</label>
            <input
              type="number"
              name="quantity"
              value={form.quantity}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="form-group mb-3">
            <label>Ingredients</label>
            <textarea
              name="ingredients"
              value={form.ingredients}
              onChange={handleChange}
              className="form-control"
              required
            ></textarea>
          </div>

          <div className="form-group mb-3">
            <label>Baking Time (in minutes)</label>
            <input
              type="number"
              name="bakingTime"
              value={form.bakingTime}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="form-group mb-3">
            <label>Category</label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="form-control"
            >
              <option value="Cake">Cake</option>
              <option value="Bread">Bread</option>
              <option value="Pastry">Pastry</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary">
            Add Item
          </button>
        </form>
      </div>

      {items.length > 0 && (
        <div className="mt-4">
          <h4>Baking Items List</h4>
          <table className="table table-bordered table-striped mt-2">
            <thead className="table-dark">
              <tr>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Ingredients</th>
                <th>Baking Time</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td>{item.itemName}</td>
                  <td>{item.quantity}</td>
                  <td>{item.ingredients}</td>
                  <td>{item.bakingTime} mins</td>
                  <td>{item.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default BakingForm;

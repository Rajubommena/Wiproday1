// Import React, useEffect & useState hooks, and axios for API calls
import React, { useEffect, useState } from "react";
import axios from "axios";

// Main functional component
const PlayerManager1 = () => {
  // State to store the list of players fetched from the server
  const [players, setPlayers] = useState([]);

  // State to store form data (for adding/updating players)
  const [form, setForm] = useState({
    id: null,
    name: "",
    age: "",
    position: "",
    club: "",
    nationality: "",
    goals: "",
    matchesPlayed: "",
    email: "",
    contactNumber: ""
  });

  // Fetch players when component loads
  useEffect(() => {
    fetchPlayers();
  }, []);

  // Function to fetch players from backend (JSON Server)
  const fetchPlayers = async () => {
    try {
      const response = await axios.get("http://localhost:5001/players");
      setPlayers(response.data);
    } catch (error) {
      console.error("Error fetching players:", error);
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle Add/Update submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.id === null) {
      await axios.post("http://localhost:5001/players", form);
    } else {
      await axios.put(`http://localhost:5001/players/${form.id}`, form);
    }

    setForm({
      id: null,
      name: "",
      age: "",
      position: "",
      club: "",
      nationality: "",
      goals: "",
      matchesPlayed: "",
      email: "",
      contactNumber: ""
    });

    fetchPlayers();
  };

  // Load data into form when editing
  const handleEdit = (player) => {
    setForm(player);
  };

  // Delete player by ID
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5001/players/${id}`);
    fetchPlayers();
  };

  return (
    <div className="container mt-4">
      <h2>Player Form</h2>

      {/* Player Form */}
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="row mb-2">
          <div className="col">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col">
            <label>Position:</label>
            <select
              name="position"
              className="form-control"
              value={form.position}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="Forward">Forward</option>
              <option value="Midfielder">Midfielder</option>
              <option value="Defender">Defender</option>
              <option value="Goalkeeper">Goalkeeper</option>
            </select>
          </div>
        </div>

        <div className="row mb-2">
          <div className="col">
            <label>Age:</label>
            <input
              type="number"
              name="age"
              className="form-control"
              value={form.age}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col">
            <label>Nationality:</label>
            <input
              type="text"
              name="nationality"
              className="form-control"
              value={form.nationality}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row mb-2">
          <div className="col">
            <label>Club:</label>
            <input
              type="text"
              name="club"
              className="form-control"
              value={form.club}
              onChange={handleChange}
            />
          </div>
          <div className="col">
            <label>Matches Played:</label>
            <input
              type="number"
              name="matchesPlayed"
              className="form-control"
              value={form.matchesPlayed}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row mb-2">
          <div className="col">
            <label>Goals:</label>
            <input
              type="number"
              name="goals"
              className="form-control"
              value={form.goals}
              onChange={handleChange}
            />
          </div>
          <div className="col">
            <label>Contact Number:</label>
            <input
              type="text"
              name="contactNumber"
              className="form-control"
              value={form.contactNumber}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mb-2">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        {/* Buttons */}
        <button type="submit" className="btn btn-primary me-2">
          {form.id === null ? "Add Player" : "Update Player"}
        </button>
      </form>

      {/* Player List */}
      <h3>Player List</h3>
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Position</th>
            <th>Club</th>
            <th>Goals</th>
            <th>Matches Played</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {players.length > 0 ? (
            players.map((player) => (
              <tr key={player.id}>
                <td>{player.name}</td>
                <td>{player.age}</td>
                <td>{player.position}</td>
                <td>{player.club}</td>
                <td>{player.goals}</td>
                <td>{player.matchesPlayed}</td>
                <td>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => handleEdit(player)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(player.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center">
                No players found...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

// Export the component so it can be used in App.js
export default PlayerManager1;

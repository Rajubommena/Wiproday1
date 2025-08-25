import React, { useState } from "react";
import { usePowerCut } from "./PowerCutContext";

const SendAnnouncement = () => {
  // Local state for form inputs
  const [street, setStreet] = useState("");
  const [message, setMessage] = useState("");

  // Get addAnnouncement function from context
  const { addAnnouncement } = usePowerCut();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload

    // Validation → ensure both fields are filled
    if (!street.trim() || !message.trim()) {
      alert("Please fill out both fields!");
      return;
    }

    // Call context function to add announcement
    addAnnouncement(street, message);

    // Clear input fields after submission
    setStreet("");
    setMessage("");
  };

  return (
    <div className="mb-3">
      <h4>Send Power Cut Announcement</h4>
      <form onSubmit={handleSubmit}>
        {/* Street Name Input */}
        <input
          type="text"
          placeholder="Street Name"
          className="form-control mb-2"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
        />

        {/* Announcement Message Input */}
        <textarea
          placeholder="Announcement Message"
          className="form-control mb-2"
          rows="3"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">
          Send Announcement
        </button>
      </form>
    </div>
  );
};

export default SendAnnouncement;

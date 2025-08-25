import React from "react";
import { usePowerCut } from "./PowerCutContext";

const AnnouncementList = () => {
  // Get announcements from context
  const { announcements } = usePowerCut();

  return (
    <div>
      <h4>Announcements</h4>
      {/* Scrollable container with max height */}
      <div style={{ maxHeight: "300px", overflowY: "auto" }}>
        {announcements.length === 0 ? (
          <p className="text-muted">No announcements yet.</p>
        ) : (
          announcements.map((a) => (
            <div
              key={a.id}
              className={`border p-2 rounded mb-2 ${
                a.message.toLowerCase().includes("urgent")
                  ? "bg-warning"
                  : "bg-light"
              }`}
            >
              {/* Street Name */}
              <strong>Street:</strong> {a.street} <br />
              {/* Message */}
              <strong>Message:</strong> {a.message} <br />
              {/* Time */}
              <small className="text-muted">Time: {a.time}</small>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AnnouncementList;

import React, { createContext, useContext, useState } from "react";

// Create context object → will hold state & functions globally
const PowerCutContext = createContext();

// Custom hook for easy access to context
export const usePowerCut = () => useContext(PowerCutContext);

// Provider component → wraps around the app to provide state
export const PowerCutProvider = ({ children }) => {
  // State to store list of announcements
  const [announcements, setAnnouncements] = useState([]);

  // Function to add a new announcement
  const addAnnouncement = (street, message) => {
    const newAnnouncement = {
      id: Date.now(), // unique ID based on timestamp
      street, // street name
      message, // announcement text
      time: new Date().toLocaleTimeString() // current time
    };

    // Add new announcement at the TOP of the array
    setAnnouncements([newAnnouncement, ...announcements]);
  };

  // Context value (state + function) shared with entire app
  return (
    <PowerCutContext.Provider value={{ announcements, addAnnouncement }}>
      {children}
    </PowerCutContext.Provider>
  );
};

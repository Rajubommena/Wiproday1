import React from "react";

const TempleList = () => {
  const temples = [
    {
      name: "Tirupati Balaji Temple",
      location: "Tirupati, Andhra Pradesh",
      deities: ["Lord Venkateswara", "Goddess Padmavathi"]
    },
    {
      name: "Chilkur Balaji Temple",
      location: "Chilkur, Hyderabad",
      deities: ["Lord Venkateswara"]
    },
    {
      name: "Jagannath Temple",
      location: "Banjara Hills, Hyderabad",
      deities: ["Lord Jagannath", "Lord Balabhadra", "Goddess Subhadra"]
    },
    {
      name: "Keesaragutta Temple",
      location: "Keesara, Hyderabad",
      deities: ["Lord Shiva", "Goddess Parvati", "Lord Ganesha"]
    },
    {
      name: "Peddamma Temple",
      location: "Jubilee Hills, Hyderabad",
      deities: ["Goddess Peddamma"]
    }
  ];

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "30px auto" }}>
      <h1>⛩️ Famous Temples in Hyderabad</h1>
      <table border="1" style={{ width: "100%", borderCollapse: "collapse", textAlign: "center" }}>
        <thead style={{ backgroundColor: "#f2f2f2" }}>
          <tr>
            <th>Temple Name</th>
            <th>Location</th>
            <th>Deities</th>
          </tr>
        </thead>
        <tbody>
          {temples.map((temple, index) => (
            <tr key={index}>
              <td>{temple.name}</td>
              <td>{temple.location}</td>
              <td>
                <ul style={{ paddingLeft: "20px", margin: 0, textAlign: "left" }}>
                  {temple.deities.map((deity, i) => (
                    <li key={i}>{deity}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

function App() {
  return (
    <div>
      <TempleList />
    </div>
  );
}

export default App;

import React from "react";

// Single Juice row component
const Juice = ({ id, name, price }) => { //functional component is Juice it receives props (id, name, price) using object destructuring
  return (
    <tr>
      <td style={{ border: "1px solid black" }}>{id}</td>
      <td style={{ border: "1px solid black" }}>{name}</td>
      <td style={{ border: "1px solid black" }}>₹{price}</td>
    </tr>
  );
};

// Juice List component with table
const JuiceList = () => { //another functional component JuiceList inside, creates an array of objects called juices
  const juices = [
    { id: 1, name: "Mango Juice", price: 50 },
    { id: 2, name: "Orange Juice", price: 40 },
    { id: 3, name: "Apple Juice", price: 60 },
    { id: 4, name: "Pineapple Juice", price: 55 }
  ];

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2> Juice Menu</h2>
      <table
        style={{
          margin: "0 auto",
          borderCollapse: "collapse",
          width: "60%",
          textAlign: "center"
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th style={{ border: "1px solid black" }}>ID</th>
            <th style={{ border: "1px solid black" }}>Name</th>
            <th style={{ border: "1px solid black" }}>Price (₹)</th>
          </tr>
        </thead>
        <tbody>
          {juices.map((juice) => (  //loops over the juices array
            <Juice key={juice.id} id={juice.id} name={juice.name} price={juice.price} /> 
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JuiceList;

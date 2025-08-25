import React from "react"; //React is imported to use jsx
import "bootstrap/dist/css/bootstrap.min.css";

const ServiceCard = ({ service }) => { //declaring a functional component ServiceCard, accepts a single property service.
  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow-sm border rounded h-100">
        <div className="card-body">
          <h4 className="card-title text-primary">{service.serviceName}</h4>
          <p><strong>Price:</strong> ₹{service.price}</p>
          <h6 className="text-secondary">Fabrics Available:</h6> 
          <ul className="list-group list-group-flush">
            {service.fabricsAvailable.map((fabric, index) => (
              <li key={index} className="list-group-item">{fabric}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};


export default function TailorShop() {
  const services = [
    { serviceName: "Shirt Stitching", price: 500, fabricsAvailable: ["Cotton", "Linen", "Polyester"] },
    { serviceName: "Pant Stitching", price: 700, fabricsAvailable: ["Denim", "Cotton", "Linen"] },
    { serviceName: "Lehenga Design", price: 3000, fabricsAvailable: ["Silk", "Georgette", "Net"] },
    { serviceName: "Blouse Stitching", price: 1200, fabricsAvailable: ["Silk", "Cotton", "Velvet"] }
  ];

  return (
    <div className="container mt-4">
      <h1 className="text-center text-success mb-4">👗 Tailoring Shop Services</h1>
      <div className="row">
        {services.map((service, index) => (  //Loops through the services array for each service, renders a ServiceCard component
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
}

import React from "react";

function ProductTable() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Product Table</h2>

       <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>P1</td>
            <td>IPhone</td>
            <td>15000</td>
          </tr>
          <tr>
            <td>P2</td>
            <td>HeadSet</td>
            <td>10000</td>
          </tr>
          <tr>
            <td>P3</td>
            <td>Phone</td>
            <td>20000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;

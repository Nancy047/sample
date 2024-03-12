import React from "react";

const CableTable = ({ cable }) => {
  return (
    <div className="tabulka-container">
      <table style={{ boxShadow: "12px #f2f2f2" }}>
        <thead
          style={{ color: "white", backgroundColor: "#2D1857" }}
          className="table_header"
        >
          <tr>
            <th rowspan="2" style={{ borderTopLeftRadius: "10px" }}>
              MAT Number
            </th>
            <th rowspan="2">Description</th>
            <th rowspan="2">Part Number</th>
          </tr>
          <tr>
            <th>Year</th>
            <th style={{ borderTopRightRadius: "10px" }}>Amount Purchased</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{cable.matCode}</td>
            <td>{cable.description}</td>
            <td>{cable.partNumber}</td>
            <td>
              {cable.history.map((item) => (
                <tr key={item.year}>
                  <td className="history">{item.year}</td>
                </tr>
              ))}
            </td>

            <td>
              {cable.history.map((item) => (
                <tr key={item.year}>
                  <td className="history">{item.amountSold}</td>
                </tr>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CableTable;

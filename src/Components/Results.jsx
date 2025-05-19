import React, { useState } from "react";

export default function Results() {
  return (
    <div>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interst(Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(10)].map((_, indexRow) => (
            <tr key={indexRow}>
              <td>{indexRow + 1}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

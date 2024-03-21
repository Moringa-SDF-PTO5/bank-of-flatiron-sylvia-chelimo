import React from "react";
import "./styles.css";

function Transaction({ date, description, category, amount }) {
  return (
    <div className="transaction-table">
      <table>
        <tbody>
          <tr>
            <td>{date}</td>
            <td>{description}</td>
            <td>{category}</td>
            <td>{amount}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Transaction;

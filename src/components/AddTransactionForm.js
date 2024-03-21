import React, { useState } from "react";
import "./styles.css";

function AddTransactionForm() {
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/transactions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error("Failed to add transaction");
      }

      alert("Transaction added successfully");
      setFormData({
        date: "",
        description: "",
        category: "",
        amount: ""
      });
    } catch (error) {
      console.error("Error adding transaction:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="add-transaction-form">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            value={formData.date}
            onChange={handleChange}
            type="date"
            name="date"
          />
          <input
            value={formData.description}
            onChange={handleChange}
            type="text"
            name="description"
            placeholder="Description"
          />
          <input
            value={formData.category}
            onChange={handleChange}
            type="text"
            name="category"
            placeholder="Category"
          />
          <input
            value={formData.amount}
            onChange={handleChange}
            type="number"
            name="amount"
            placeholder="Amount"
            step="0.01"
          />
        </div>
        <div className="button-container">
        <button type="submit">
          Add Transaction
        </button>
        </div>
      </form>
    </div>
  );
}

export default AddTransactionForm;

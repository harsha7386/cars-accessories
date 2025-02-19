import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function EnterAddress() {
  const navigate = useNavigate();
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Address entered:", address);

    // Future: Save address in the backend here.

    alert("Address saved successfully!");
    navigate("/dashboard"); // Redirect to a dashboard or another page after address entry
  };

  return (
    <div className="container mt-5">
      <h2>Enter Your Address</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Save Address</button>
      </form>
    </div>
  );
}

export default EnterAddress;

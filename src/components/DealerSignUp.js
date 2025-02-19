import React, { useState } from "react";
import "../styles/SignIn.css"; // Import the CSS file for custom styles
import { useNavigate } from "react-router-dom";
import axios from "axios";

function DealerSignUp() {
  const navigate = useNavigate();

  // State to store input values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Prepare the data to send to the backend
    const dealerData = { name, email, companyName, mobile, password };

    // Send data to the backend via POST request
    axios
      .post("http://localhost:8080/dealers/signup", dealerData) // Make sure this endpoint matches your backend
      .then((response) => {
        console.log("Signup Successful:", response.data);
        alert("Dealer Signup Successful");
        navigate("/dealer-login"); // Redirect to dealer login page
      })
      .catch((error) => {
        console.error(error);
        alert("Signup failed. Please try again.");
      });
  };

  return (
    <div className="auth-container">
      <div className="row w-100">
        {/* Left side - Image */}
        <div className="col-md-6 image-section">
          <img
            src="https://boodmo.com/assets/images/engine.png"
            alt="Car Engine"
            className="signin-image"
          />
          <p className="mt-3 text-light lead">
            Enter the best car spare parts marketplace in India
          </p>
        </div>

        {/* Right side - Dealer SignUp Form */}
        <div className="col-md-6">
          <div className="signin-form">
            <h2 className="text-center">Dealer Sign Up</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Company Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter company name"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Mobile</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter phone number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Sign Up
              </button>
              <p>
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => navigate("/dealer-login")}
                  style={{
                    background: "none",
                    border: "none",
                    color: "blue",
                    textDecoration: "underline",
                    cursor: "pointer",
                    padding: 0,
                  }}
                >
                  Dealer Login
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DealerSignUp;

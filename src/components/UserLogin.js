import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/SignIn.css"; // Import the CSS file for custom styles

function UserLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const loginData = { username, password };

    axios
      .post("http://localhost:8080/api/auth/login", loginData) // Update with your backend URL
      .then((response) => {
        console.log(response.data);
        navigate("/dashboard"); // Navigate to the dashboard or home page after successful login
      })
      .catch((error) => {
        console.error(error);
        alert("Login failed. Please try again.");
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

        {/* Right side - User Login Form */}
        <div className="col-md-6">
          <div className="signin-form">
            <h2 className="text-center">User Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
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
              <button type="submit" className="btn btn-primary w-100">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;

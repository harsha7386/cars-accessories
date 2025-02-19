import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const navigate = useNavigate();

  // State for input fields
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const signupData = { username, email, mobile, password };
  
    // Trigger a warning only if there's an issue
    if (!email) {
      console.warn(true, "Email cannot be empty");
      return;
    }
    if (!password) {
      console.warn(true, "Password cannot be empty");
      return;
    }
  
    axios
      .post("http://localhost:8080/users/signup", signupData)
      .then((response) => {
        console.log("Signup Successful:", response.data);
        navigate("/user-login");
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

        {/* Right side - Sign Up Form */}
        <div className="col-md-6">
          <div className="signin-form">
            <h2 className="text-center">User Sign Up</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
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
                  required
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
                  required
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
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Re-enter password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">Sign Up</button>
            </form>
            <p className="mt-3">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => navigate("/dealer-signup")}
                style={{
                  background: "none",
                  border: "none",
                  color: "blue",
                  textDecoration: "underline",
                  cursor: "pointer",
                  padding: 0,
                }}
              >
                DealerSignUp
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

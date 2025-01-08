import React from "react";
import "../styles/SignIn.css"; // Import the CSS file for custom styles
import { useNavigate } from "react-router-dom";
function DealerSignUp() {
  const navigate = useNavigate();
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
            <form>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Company Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter company name"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Mobile</label>
                <input type="mobile" className="form-control" placeholder="Enter phone Number" />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm your password"
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Sign Up
              </button>
              <p>
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => navigate("/user-login")} // Redirect to user login page
                  style={{
                    background: "none",
                    border: "none",
                    color: "blue",
                    textDecoration: "underline",
                    cursor: "pointer",
                    padding: 0,
                  }}
                >
                  User Login
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

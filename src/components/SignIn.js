import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SignIn.css"; // Import the CSS file for custom styles

function SignIn() {
  const navigate = useNavigate();

  const handleLoginRedirect = (type) => {
    navigate(type === "user" ? "/user-login" : "/dealer-login");
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

        {/* Right side - Sign In Form */}
        <div className="col-md-6">
          <div className="signin-form">
            <h2 className="text-center">Sign In</h2>
            <p className="text-center mb-4">Select your login type</p>
            <div className="d-flex justify-content-center">
              <button
                className="btn btn-outline-primary me-3 px-4 py-2"
                onClick={() => handleLoginRedirect("user")}
              >
                User Login
              </button>
              <button
                className="btn btn-outline-secondary px-4 py-2"
                onClick={() => handleLoginRedirect("dealer")}
              >
                Dealer Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;

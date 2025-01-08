import React from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  const handleDealerSignUpClick = () => {
    navigate("/dealer-signup");
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
            <form>
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input type="text" className="form-control" placeholder="Enter username" />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="Enter email" />
              </div>
              <div className="mb-3">
                <label className="form-label">Mobile</label>
                <input type="mobile" className="form-control" placeholder="Enter phone Number" />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" placeholder="Enter password" />
              </div>
              <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <input type="password" className="form-control" placeholder="ReEnter password" />
              </div>
              <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
            <p>
              Already have an account?{" "}
              <button
                type="button"
                onClick={handleDealerSignUpClick}
                style={{
                  background: "none",
                  border: "none",
                  color: "blue",
                  textDecoration: "underline",
                  cursor: "pointer",
                  padding: 0,
                }}
              >
                Dealer Sign Up
              </button>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

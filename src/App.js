import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignIn from "./components/SignIn";
import UserLogin from "./components/UserLogin";
import DealerLogin from "./components/DealerLogin";
import SignUp from "./components/SignUp";
import DealerSignUp from "./components/DealerSignUp";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">
              AutoCart Accessories
            </Link>
            <div>
              <Link className="btn btn-primary me-2" to="/signin">
                Sign In
              </Link>
              <Link className="btn btn-secondary" to="/signup">
                Sign Up
              </Link>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/user-login" element={<UserLogin />} />
          <Route path="/dealer-login" element={<DealerLogin />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dealer-signup" element={<DealerSignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

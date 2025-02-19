import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignIn from "./components/SignIn";
import UserLogin from "./components/UserLogin";
import DealerLogin from "./components/DealerLogin";
import SignUp from "./components/SignUp";
import DealerSignUp from "./components/DealerSignUp";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import EnterAddress from "./components/EnterAddress";
// import AddParts from "./components/AddParts";

import Cart from "./components/Cart";
import Footer from "./components/footer/Footer";
import CategoryIamge from "./components/CategoryIamge";
//  import Navbar from "./components/Navbar";
function App() {
  const [cartItems] = useState([]);

  // const addToCart = (item) => {
  //   setCartItems([...cartItems, item]);
  // };

  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">
              AutoCart Accessories
            </Link>
            <div className="d-flex align-items-center">
              <Link className="nav-link text-white me-3" to="/cart">
                <i className="fa-solid fa-cart-shopping"></i>
              </Link>
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
          <Route path="/enter-address" element={<EnterAddress />} />
          {/* <Route path="/add-parts" element={<AddParts />} /> */}
          {/* <Route path="/search-results" element={<SearchResults addToCart={addToCart} />} /> */}
          <Route path="/cart" element={<Cart cartItems={cartItems} />} />
          <Route path="/category-image/:id" element={<CategoryIamge />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

function Navbar({ cartCount }) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          AutoCart Accessories
        </Link>
        <Link to="/cart" className="btn btn-outline-light">
          <FaShoppingCart /> Cart ({cartCount})
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

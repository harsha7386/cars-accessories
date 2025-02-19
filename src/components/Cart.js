import React, { useState, useEffect } from "react";
import { Col, Button } from "react-bootstrap";

function Cart() {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage when Cart page loads
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart-items")) || [];
    if (storedCart.length > 0) {
      setCart(storedCart);
    }
  }, []);
  

  // Update localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("cart-items", JSON.stringify(cart));
  }, [cart]);

  // Increment quantity
  const incrementQuantity = (id) => {
    const updatedCart = cart.map((part) =>
      part.id === id ? { ...part, quantity: part.quantity + 1 } : part
    );
    setCart(updatedCart);
  };
  

  // Decrement quantity
  const decrementQuantity = (id) => {
    const updatedCart = cart
      .map((part) =>
        part.id === id && part.quantity > 1
          ? { ...part, quantity: part.quantity - 1 }
          : part
      )
      .filter((part) => part.quantity > 0); // Remove if quantity reaches 0
    setCart(updatedCart);
  };

  // Remove item from cart
  const removeProduct = (id) => {
    const updatedCart = cart.filter((part) => part.id !== id);
    setCart(updatedCart);
  };

  // Calculate total quantity and total amount
  const totalQuantity = cart.reduce((accumalator, part) => accumalator + part.quantity, 0);
  const totalAmount = cart.reduce((acc, part) => acc + (parseFloat(part.price) || 0) * (part.quantity || 1), 0);

  return (
    <div className="container  mb-5">
      <h2 className="text-center text-success">Cart Page</h2>

      {cart.length > 0 ? (
        <>
          {/* Total Summary */}
          <div className="text-center my-4">
            <h3>Total Quantity: {totalQuantity}</h3>
            <h3>Total Amount: ₹{totalAmount.toFixed(2)}</h3> 
          </div>

          <ul className="list-group">
            {cart.map((part) => (
              <li
                key={part.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div className="d-flex">
                  {part.image && (
                    <img
                      src={part.image}
                      alt={part.name}
                      className="me-4"
                      style={{
                        width: "200px",
                        paddingLeft: "0px",
                        marginTop: "50px",
                        height: "200px",
                        objectFit: "cover",
                      }}
                    />
                  )}
                 
                  <div
                    className="d-flex flex-column"
                    style={{ paddingLeft: "250px" }}
                  >
                    <h3 className="" style={{fontSize:"26px", paddingBottom:"12px"}}>{part.name}</h3>
                    <p>
                      <strong>Company:</strong> {part.company}
                    </p>
                    <p>
                      <strong>Model:</strong> {part.model}
                    </p>
                    <p>
                      <strong>Year:</strong> {part.year}
                    </p>
                    <p>
                      <strong>Description:</strong> {part.description}
                    </p>
                  </div>
                </div>

                {/* Price, Quantity, and Actions */}
                <div>
                  <div className="d-flex flex-column align-items-center mt-3">
                    <h4
                      className="text-success"
                      style={{ marginTop: "6px", marginBottom: "0px", marginRight:"70px" }}
                    >
                      ₹{part.price}
                    </h4>
                  </div>

                  {/* Quantity Controls */}
                  <div className="d-flex align-items-center my-3">
                    <Button
                      className="me-2"
                      onClick={() => decrementQuantity(part.id)}
                    >
                      -
                    </Button>
                    <span>{part.quantity}</span>
                    <Button
                      className="ms-2"
                      onClick={() => incrementQuantity(part.id)}
                    >
                      +
                    </Button>
                  </div>

                  {/* Remove & Buy Now Buttons */}
                  <div>
                    <Button
                      variant="danger"
                      style={{ marginRight: "10px" }}
                      onClick={() => removeProduct(part.id)}
                    >
                      <i className="fa-solid fa-trash"></i> 
                    </Button>
                    <Button variant="primary">Buy Now</Button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </>
      ) : (
        // Empty cart message
        <div className="text-center my-5">
          <img
            src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
            className="img-fluid"
            width="250px"
            alt="Empty cart"
          />
          <h2>Missing cart items?</h2>
        </div>
      )}
    </div>
  );
}

export default Cart;

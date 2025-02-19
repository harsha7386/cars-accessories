import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CategoryPage = () => {
  const { id } = useParams(); // Extract category ID from URL
  const [selectedParts, setSelectedParts] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from localStorage
    const storedData = JSON.parse(localStorage.getItem("samplePartsData"));
    if (storedData && storedData[id]) {
      setSelectedParts(storedData[id]);
    } else {
      setErrorMessage("No parts found for this category.");
    }
  }, [id]);

  const addToCart = (selectedPart) => {
    let cart = JSON.parse(localStorage.getItem("cart-items")) || [];

    // Check if part already exists in cart
    const existingPart = cart.find((part) => part.id === selectedPart.id);
    if (existingPart) {
      // If exists, increase quantity
      existingPart.quantity += 1;
    } else {
      // Otherwise, add new part with quantity 1
      cart.push({ ...selectedPart, quantity: 1 });
    }

    // Save updated cart to localStorage
    localStorage.setItem("cart-items", JSON.stringify(cart));

    alert(`${selectedPart.name} added to cart!`);
    navigate("/cart");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col sm-6">
          {errorMessage && <p className="text-danger">{errorMessage}</p>}
          {selectedParts.length > 0 ? (
            <div className="search-results">
              <h2>Search Results</h2>
              <ul className="list-group">
                {selectedParts.map((part) => (
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
                            width: "250px",
                            paddingLeft: "40px",
                            marginTop: "50px",
                            height: "220px",
                            objectFit: "cover",
                          }}
                        />
                      )}
                      <div className="d-flex flex-column" style={{ paddingLeft: "130px" }}>
                        <h3>{part.name}</h3>
                        <p><strong>Company:</strong> {part.company}</p>
                        <p><strong>Model:</strong> {part.model}</p>
                        <p><strong>Year:</strong> {part.year}</p>
                        <p><strong>Description:</strong> {part.description}</p>
                      </div>
                    </div>
                    <div>
                      <div className="d-flex flex-column align-items-center mt-4">
                        <h4 className="text-success" style={{ marginTop: "50px", marginBottom: "0px" }}> {part.price}</h4>
                      </div>
                      <div>
                        <Button
                          variant="primary"
                          style={{ marginRight: "50px", marginTop: "20px" }}
                          onClick={() => addToCart(part)}
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            !errorMessage && <p className="text-muted">No parts available for this category.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
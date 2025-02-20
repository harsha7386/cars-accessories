import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Col from 'react-bootstrap/Col';
//  import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
// import AddParts from "./AddParts";
function Home() {
  const [vehicleType, setVehicleType] = useState("");
  const [company, setCompany] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [companies, setCompanies] = useState([]);
  const [models, setModels] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();
  //  const [filteredProducts, setFilteredProducts] = useState([]);
  //  const [searchQuery, setSearchQuery] = useState("");
  const [cartProducts, setCartProducts] = useState([]);


  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart-items")) || []
  );
  console.log(cartItems);
  const vehicleTypes = ["2Wheeler", "4Wheeler", "Heavy Vehicle"];
  const availableCompanies = {
    "2Wheeler": ["Honda", "Yamaha", "Bajaj"],
    "4Wheeler": ["Toyota", "Ford", "BMW"],
    "Heavy Vehicle": ["Volvo", "Tata", "Scania"],
  };
  const availableModels = {
    Honda: ["CBR600", "CBR1000", "CBR300"],
    Yamaha: ["FZ", "R15", "FZ-S"],
    Toyota: ["Corolla", "Camry", "Fortuner"],
    Ford: ["Figo", "Mustang", "Endeavour"],
    Volvo: ["FM", "FMX"],
    Tata: ["712LPT", "710SFC", "610SFC", "510SFC"],
    Scania: ["P410"],
  };

  const part = [
    {
      id: 1,
      name: " Toyota Brake Pad",
      price: "$50",
      description: "High-quality brake pad.",
      company: "Toyota",
      model: "Camry",
      year: "2020",
      image: "data:image/jpeg;base64,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",
    },
    {
      id: 2,
      name: " Honda Engine Oil",
      price: "$30",
      description: "Synthetic engine oil.",
      company: "Honda",
      model: "CBR600",
      year: "2019",
      image: "https://m.media-amazon.com/images/I/61-WGFBqvAL.jpg",
    },
    {
      id: 3,
      name: " Ford Air Filter",
      price: "$20",
      description: "Efficient air filter.",
      company: "Ford",
      model: "Mustang",
      year: "2021",
      image: "https://m.media-amazon.com/images/I/51HS5YYp-DL.jpg",
    },
    {
      id: 4,
      name: "yamaha FZ Brake Pad",
      price: "$50",
      description: "High-quality brake pad.",
      company: "yamaha",
      model: "FZ",
      year: "2023",
      image: "data:image/jpeg;base64,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",
    },
    {
      id: 5,
      name: "yamaha R15 Brake Pad",
      price: "$50",
      description: "High-quality brake pad.",
      company: "yamaha",
      model: "R15",
      year: "2020",
      image: "data:image/jpeg;base64,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",
    },
    {
      id: 6,
      name: " Toyota Camry Brake Pad",
      price: "$50",
      description: "High-quality brake pad.",
      company: "Toyota",
      model: "Camry",
      year: "2020",
      image: "data:image/jpeg;base64,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",
    },
    {
      id: 7,
      name: "BMW X7 head light",
      price: "$50",
      description: "High-quality head light.",
      company: "BMW",
      model: "X7",
      year: "2020",
      image: "data:image/jpeg;base64,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",
    },
    {
      id: 7,
      name: "Tools Kit",
      price: "$100",
      description: "High-quality tools kit.",
      company: "spare parts",
      model: "All",
      year: "2020",
      image: "https://bpc.h-cdn.co/assets/16/05/980x490/gallery-1454343039-mechanic-tool-kits.jpg",
    },
  ];


  const categoryImages = [
    "https://boodmo.com/media/images/categories/ebba234.svg",
    "https://boodmo.com/media/images/categories/10f1952.svg",
    "https://boodmo.com/media/images/categories/51eb913.svg",
    "https://boodmo.com/media/images/categories/d5dd6ce.svg",
    "https://boodmo.com/media/images/categories/50008e4.svg",
    "https://boodmo.com/media/images/categories/fab8332.svg",
  ];

  const samplePartsData = useMemo(() => {
    return {
      "ebba234": [
        {
          id: 2,
          name: " Honda Engine Oil",
          price: "$30",
          description: "Synthetic engine oil.",
          company: "Honda",
          model: "CBR600",
          year: "2019",
          image: "https://m.media-amazon.com/images/I/61-WGFBqvAL.jpg",
        },
        {
          id: 2,
          name: " Honda Engine Oil",
          price: "$30",
          description: "Synthetic engine oil.",
          company: "Honda",
          model: "CBR600",
          year: "2019",
          image: "https://m.media-amazon.com/images/I/61-WGFBqvAL.jpg",
        },
      ],
      "10f1952": [
        {
          id: 2,
          name: " Honda Engine Oil",
          price: "$30",
          description: "Synthetic engine oil.",
          company: "Honda",
          model: "CBR600",
          year: "2019",
          image: "https://m.media-amazon.com/images/I/61-WGFBqvAL.jpg",
        },
        {
          id: 2,
          name: " Honda Engine Oil",
          price: "$30",
          description: "Synthetic engine oil.",
          company: "Honda",
          model: "CBR600",
          year: "2019",
          image: "https://m.media-amazon.com/images/I/61-WGFBqvAL.jpg",
        },
      ],
      "51eb913": [
        {
          id: 2,
          name: " Honda Engine Oil",
          price: "$30",
          description: "Synthetic engine oil.",
          company: "Honda",
          model: "CBR600",
          year: "2019",
          image: "https://m.media-amazon.com/images/I/61-WGFBqvAL.jpg",
        },
        {
          id: 2,
          name: " Honda Engine Oil",
          price: "$30",
          description: "Synthetic engine oil.",
          company: "Honda",
          model: "CBR600",
          year: "2019",
          image: "https://m.media-amazon.com/images/I/61-WGFBqvAL.jpg",
        },
      ],
      "d5dd6ce": [{
        id: 2,
        name: " Honda Engine Oil",
        price: "$30",
        description: "Synthetic engine oil.",
        company: "Honda",
        model: "CBR600",
        year: "2019",
        image: "https://m.media-amazon.com/images/I/61-WGFBqvAL.jpg",
      },
      {
        id: 2,
        name: " Honda Engine Oil",
        price: "$30",
        description: "Synthetic engine oil.",
        company: "Honda",
        model: "CBR600",
        year: "2019",
        image: "https://m.media-amazon.com/images/I/61-WGFBqvAL.jpg",
      },
      {
        id: 2,
        name: " Honda Engine Oil",
        price: "$30",
        description: "Synthetic engine oil.",
        company: "Honda",
        model: "CBR600",
        year: "2019",
        image: "https://m.media-amazon.com/images/I/61-WGFBqvAL.jpg",
      },],
      "fab8332": [
        {
          id: 2,
          name: " Honda Engine Oil",
          price: "$30",
          description: "Synthetic engine oil.",
          company: "Honda",
          model: "CBR600",
          year: "2019",
          image: "https://m.media-amazon.com/images/I/61-WGFBqvAL.jpg",
        },
        {
          id: 2,
          name: " Honda Engine Oil",
          price: "$30",
          description: "Synthetic engine oil.",
          company: "Honda",
          model: "CBR600",
          year: "2019",
          image: "https://m.media-amazon.com/images/I/61-WGFBqvAL.jpg",
        },
      ],
      "50008e4": [
        {
          id: 2,
          name: " Honda Engine Oil",
          price: "$30",
          description: "Synthetic engine oil.",
          company: "Honda",
          model: "CBR600",
          year: "2019",
          image: "https://m.media-amazon.com/images/I/61-WGFBqvAL.jpg",
        },
        {
          id: 2,
          name: " Honda Engine Oil",
          price: "$30",
          description: "Synthetic engine oil.",
          company: "Honda",
          model: "CBR600",
          year: "2019",
          image: "https://m.media-amazon.com/images/I/61-WGFBqvAL.jpg",
        },
      ],
    };
  }, []);
  const handleVehicleTypeChange = (e) => {
    const selectedType = e.target.value;
    setVehicleType(selectedType);
    setCompany("");
    setModel("");
    setYear("");
    setCompanies(availableCompanies[selectedType] || []);
    setModels([]);
    setErrorMessage("");
  };

  const handleCompanyChange = (e) => {
    const selectedCompany = e.target.value;
    setCompany(selectedCompany);
    setModel("");
    setYear("");
    setModels(availableModels[selectedCompany] || []);
    setErrorMessage("");
  };

  const handleSearch = (e) => {
    e.preventDefault(); // Prevents page reload

    // Filter Sample based on search inputs (name, company, model)
    const filteredParts = part.filter((part) => {
      return (
        (!searchTerm || part.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (!company || part.company.toLowerCase() === company.toLowerCase().trim()) &&
        (!model || part.model.toLowerCase() === model.toLowerCase())
      );
    });

    // Update search results
    setSearchResults(filteredParts);

    // Show message if no results found
    if (filteredParts.length === 0) {
      setErrorMessage("No matching Sample found.");
    } else {
      setErrorMessage("");
    }
  };

  const clickSearch = (e) => {
    e.preventDefault();
    const searchLower = searchTerm.toLowerCase().trim();
    const filteredParts = part.filter((part) => {
      return (
        part.name.toLowerCase().includes(searchLower) ||
        part.company.toLowerCase().includes(searchLower) ||
        part.model.toLowerCase().includes(searchLower) ||
        part.year.toString().includes(searchLower)
      );
    });

    console.log("Available Parts Data:", filteredParts);

    if (filteredParts.length === 0) {
      setSearchResults([]);
      setErrorMessage("No matching Sample found.");
    } else {
      setSearchResults(filteredParts);
      setErrorMessage("");
    }
  };



  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart-items")) || [];
    setCartItems(storedCart);
  }, []);

  // Function to add a part to the cart
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

  useEffect(() => {
    localStorage.setItem("samplePartsData", JSON.stringify(samplePartsData));
  }, [samplePartsData]);


  const handleCategoryClick = (imageUrl) => {
    const categoryId = imageUrl.split("/").pop().split(".")[0]; // Extracts 'ebba234' from URL
    navigate(`/category-image/${categoryId}`);
  };
  return (
    <div className="home-container">
      <div className="content">
        <h1 className="title">Welcome to AutoCart Accessories</h1>
        <p className="subtitle">Find all the original spare Sample with guaranteed quality!</p>
        <form className="d-flex" role="search" onSubmit={clickSearch}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>

        <div className="search-container">
          <h2>Search by Vehicles</h2>
          <div className="dropdowns-container">
            <select className="form-select" value={vehicleType} onChange={handleVehicleTypeChange}>
              <option value="">--Select Vehicle Type--</option>
              {vehicleTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>

            <select className="form-select" value={company} onChange={handleCompanyChange} disabled={!vehicleType}>
              <option value="">--Select Company--</option>
              {companies.map((comp) => (
                <option key={comp} value={comp}>
                  {comp}
                </option>
              ))}
            </select>

            <select className="form-select" value={model} onChange={(e) => setModel(e.target.value)} disabled={!company}>
              <option value="">--Select Model--</option>
              {models.map((mod) => (
                <option key={mod} value={mod}>
                  {mod}
                </option>
              ))}
            </select>

            <select className="form-select" value={year} onChange={(e) => setYear(e.target.value)} disabled={!model}>
              <option value="">--Select Year--</option>
              {[...Array(10).keys()].map((i) => {
                const yr = new Date().getFullYear() - i;
                return (
                  <option key={yr} value={yr}>
                    {yr}
                  </option>
                );
              })}
            </select>
          </div>

          <button onClick={handleSearch}>Search</button>
          {errorMessage && <p>{errorMessage}</p>}


        </div>

        {/* Display search results */}
        {searchResults.length > 0 ? (
          <div className="search-results">
            <h2>Search Results</h2>
            <ul className="list-group">
              {searchResults.map((part) => (
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
                    {/* <Col sm="1">
                      <h3 style={{ cursor: "pointer" }}>
                        <Link to={`${part.id}?title=${part.name}&price=${part.price}`}>
                          {part.name}
                        </Link>
                      </h3>
                      <p>{part.description}</p>



                    </Col> */}
                    <div className="d-flex flex-column" style={{ paddingLeft: "130px" }}>
                      <h3>{part.name}</h3>
                      <p><strong>Company:</strong> {part.company}</p>
                      <p><strong>Model:</strong> {part.model}</p>
                      <p><strong>Year:</strong> {part.year}</p>
                      {/* <p><strong>Price:</strong> {part.price}</p> */}
                      <p><strong>Description:</strong> {part.description}</p>
                    </div>
                  </div>
                  <div>
                    <div className="d-flex flex-column align-items-center mt-4">
                      {/* Display Price on the Right */}
                      <h4 className="text-success" style={{ marginTop: "50px", marginBottom: "0px" }}> {part.price}</h4>

                      {/* Add to Cart Button */}

                    </div>

                    {/* Push Add to Cart button to the right */}
                    <div  >
                      <Button
                        variant="primary"
                        style={{ marginRight: "50px", marginTop: "20px" }}
                        onClick={() => addToCart(part, cartProducts, setCartProducts)}
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
          searchResults.length === 0 && !errorMessage && (
            <p className="text-muted"></p>
          )
        )}

        <div className="offers-container">
          <h2>Current Offers</h2>
          <div className="offer-images">
            <img src="https://boodmo.com/media/images/slider/fdae4b7.webp" alt="Offer 1" className="offer-image" />
            <img src="https://boodmo.com/media/images/slider/f0e295d.webp" alt="Offer 2" className="offer-image" />
          </div>
        </div>

        <div className="categories-container">
          <div>
            <h1>Select a Category</h1>
            <div style={{ display: "flex", gap: "30px" }}>
              {categoryImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Category ${index}`}
                  style={{ width: "200px", cursor: "pointer" }}
                  onClick={() => handleCategoryClick(image)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

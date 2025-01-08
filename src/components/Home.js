import React, { useState } from "react";
import "../styles/home.css";

function Home() {
  const [vehicleType, setVehicleType] = useState("");
  const [company, setCompany] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [companies, setCompanies] = useState([]);
  const [models, setModels] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [showCategories, setShowCategories] = useState(false);

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
    Volvo: ["FM", "FMX" ],
    Tata: ["712LPT", "710SFC", "610SFC", "510SFC"],
    Scania: ["P410"],
  };

  const categoryImages = [
    "https://boodmo.com/media/images/categories/ebba234.svg",
    "https://boodmo.com/media/images/categories/10f1952.svg",
    "https://boodmo.com/media/images/categories/51eb913.svg",
    "https://boodmo.com/media/images/categories/d5dd6ce.svg",
    "https://boodmo.com/media/images/categories/50008e4.svg",
    "https://boodmo.com/media/images/categories/64b9f40.svg",
    "https://boodmo.com/media/images/categories/5c30d1d.svg",
    "https://boodmo.com/media/images/categories/4372565.svg",
    "https://boodmo.com/media/images/categories/bc1a73f.svg",
    "https://boodmo.com/media/images/categories/e1aba2b.svg",
    "https://boodmo.com/media/images/categories/f6afc8e.svg",
    "https://boodmo.com/media/images/categories/e39dc1a.svg",
    "https://boodmo.com/media/images/categories/fab8332.svg",
    "https://boodmo.com/media/images/categories/c009512.svg",
    "https://boodmo.com/media/images/categories/de978f4.svg",
    "https://boodmo.com/media/images/categories/38427d6.svg",
    "https://boodmo.com/media/images/categories/b1b2c08.svg",
  ];

  const handleVehicleTypeChange = (e) => {
    const selectedType = e.target.value;
    setVehicleType(selectedType);
    setCompany("");
    setModel("");
    setYear("");
    setCompanies(availableCompanies[selectedType] || []);
    setModels([]);
    setErrorMessage("");
    setShowCategories(false);
  };

  const handleCompanyChange = (e) => {
    const selectedCompany = e.target.value;
    setCompany(selectedCompany);
    setModel("");
    setYear("");
    setModels(availableModels[selectedCompany] || []);
    setErrorMessage("");
    setShowCategories(false);
  };

  const handleSearch = () => {
    if (!vehicleType || !company || !model || !year) {
      setErrorMessage("Please select all fields before searching.");
      return;
    }
    setErrorMessage("");
    setShowCategories(true);
  };

  const handleBackToHome = () => {
    setShowCategories(false);
  };

  return (
    <div className="home-container">
      <div className="content">
        <h1 className="display-4 fw-bold text-blue">Welcome to AutoCart Accessories</h1>
        <p className="lead mt-3 text-red">
          Find all the original spare parts with guaranteed quality!
        </p>
        {!showCategories && (
          <div className="search-container">
            <h2>Search by Vehicles</h2>
            <div className="dropdowns-container">
              <div className="dropdown-box">
                <label htmlFor="vehicleType" className="form-label">Select Vehicle Type</label>
                <select
                  id="vehicleType"
                  className="form-select"
                  value={vehicleType}
                  onChange={handleVehicleTypeChange}
                >
                  <option value="">--Select Vehicle Type--</option>
                  {vehicleTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="dropdown-box">
                <label htmlFor="company" className="form-label">Select Company</label>
                <select
                  id="company"
                  className="form-select"
                  value={company}
                  onChange={handleCompanyChange}
                  disabled={!vehicleType}
                >
                  <option value="">--Select Company--</option>
                  {companies.map((company) => (
                    <option key={company} value={company}>
                      {company}
                    </option>
                  ))}
                </select>
              </div>

              <div className="dropdown-box">
                <label htmlFor="model" className="form-label">Select Model</label>
                <select
                  id="model"
                  className="form-select"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  disabled={!company}
                >
                  <option value="">--Select Model--</option>
                  {models.map((model) => (
                    <option key={model} value={model}>
                      {model}
                    </option>
                  ))}
                </select>
              </div>

              <div className="dropdown-box">
                <label htmlFor="year" className="form-label">Select Year</label>
                <select
                  id="year"
                  className="form-select"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  disabled={!model}
                >
                  <option value="">--Select Year--</option>
                  {[...Array(30).keys()].map((i) => {
                    const year = new Date().getFullYear() - i;
                    return (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>

            <div className="mb-3">
              <button className="btn btn-primary mt-3" onClick={handleSearch}>
                Search Parts
              </button>
            </div>
            {errorMessage && <p className="text-danger">{errorMessage}</p>}
          </div>
        )}

{showCategories && (
  <div className="categories-container">
    <button className="btn btn-secondary mt-3" onClick={handleBackToHome}>
      Back to Home
    </button>
    <h2 className="mt-4">Available Categories</h2>
    <div className="categories-grid">
      {categoryImages.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Category ${index + 1}`}
          className="category-image"
        />
      ))}
    </div>
  </div>
)}

        
      </div>
    </div>
  );
}

export default Home;
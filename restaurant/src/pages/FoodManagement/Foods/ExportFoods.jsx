"use client";

import { useState } from "react";
import "./ExportFoods.css";

const ExportFoods = () => {
  const [selectedType, setSelectedType] = useState("All data");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dataTypes = ["All data", "Data Wise", "ID Wise"];

  const handleTypeSelect = (type) => {
    setSelectedType(type);
    setIsDropdownOpen(false);
  };

  const handleReset = () => {
    setSelectedType("All data");
  };

  const handleSubmit = () => {
    console.log("Exporting:", selectedType);
    // Add export logic here
  };

  return (
    <div className="ExportFoods-export-foods-container">
      <header className="ExportFoods-header">
        <div className="ExportFoods-header-content">
          <div className="ExportFoods-logo">
            <span className="ExportFoods-logo-icon">🍽️</span>
            <h1>Export Foods</h1>
          </div>
        </div>
      </header>

      <main className="ExportFoods-main-content">
        <div className="ExportFoods-steps-container">
          <div className="ExportFoods-step">
            <div className="ExportFoods-step-header">
              <span className="ExportFoods-step-number">STEP 1</span>
              <span className="ExportFoods-step-title">Select Data Type</span>
            </div>
          </div>
          <div className="ExportFoods-step">
            <div className="ExportFoods-step-header">
              <span className="ExportFoods-step-number">STEP 2</span>
              <span className="ExportFoods-step-title">
                Select Data Range by Date and Export
              </span>
            </div>
          </div>
        </div>

        <div className="ExportFoods-form-section">
          <div className="ExportFoods-form-group">
            <label className="ExportFoods-form-label">Type</label>
            <div className="ExportFoods-dropdown-container">
              <button
                className="ExportFoods-dropdown-button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                {selectedType}
                <span
                  className={`ExportFoods-dropdown-arrow ${
                    isDropdownOpen ? "ExportFoods-open" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              {isDropdownOpen && (
                <div className="ExportFoods-dropdown-menu">
                  {dataTypes.map((type) => (
                    <button
                      key={type}
                      className={`ExportFoods-dropdown-item ${
                        selectedType === type ? "ExportFoods-selected" : ""
                      }`}
                      onClick={() => handleTypeSelect(type)}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="ExportFoods-action-buttons">
          <button className="ExportFoods-reset-btn" onClick={handleReset}>
            Reset
          </button>
          <button className="ExportFoods-submit-btn" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </main>
    </div>
  );
};

export default ExportFoods;

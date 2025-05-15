"use client";

import { useState } from "react";
import { Trash2 } from "lucide-react";

import "./../Foods/BulkImport.css";

function BulkImport() {
  // Import Section State
  const [selectedFile, setSelectedFile] = useState(null);

  // Variations Generator State
  const [variations, setVariations] = useState([]);
  const [currentVariation, setCurrentVariation] = useState({
    name: "",
    selectionType: "multiple",
    min: "",
    max: "",
    required: false,
    options: [],
  });
  const [currentOption, setCurrentOption] = useState({
    name: "",
    price: "",
  });
  const [showForm, setShowForm] = useState(false);

  // Import Section Handlers
  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleReset = () => {
    setSelectedFile(null);
    // Reset the file input by recreating it
    document.getElementById("file-upload").value = "";
  };

  // Variations Generator Handlers
  const handleAddVariation = () => {
    setShowForm(true);
  };

  const handleSaveVariation = () => {
    if (currentVariation.name) {
      setVariations([
        ...variations,
        { ...currentVariation, options: [...currentVariation.options] },
      ]);
      setCurrentVariation({
        name: "",
        selectionType: "multiple",
        min: "",
        max: "",
        required: false,
        options: [],
      });
      setShowForm(false);
    }
  };

  const handleAddOption = () => {
    if (currentOption.name) {
      setCurrentVariation({
        ...currentVariation,
        options: [...currentVariation.options, { ...currentOption }],
      });
      setCurrentOption({ name: "", price: "" });
    }
  };

  const handleRemoveOption = (index) => {
    const updatedOptions = [...currentVariation.options];
    updatedOptions.splice(index, 1);
    setCurrentVariation({
      ...currentVariation,
      options: updatedOptions,
    });
  };

  return (
    <div className="BulkImport-app-container">
      {/* Header Section */}
      <header className="BulkImport-header">
        <div className="BulkImport-logo">
          <div className="BulkImport-logo-icon">🍲</div>
          <h1>Foods Bulk Import</h1>
        </div>
      </header>

      <div className="BulkImport-content-container">
        {/* Steps Guide Section */}
        <div className="BulkImport-steps-container">
          <div className="BulkImport-step">
            <h2>STEP 1</h2>
            <p>Download Excel File</p>
          </div>
          <div className="BulkImport-step">
            <h2>STEP 2</h2>
            <p>Match Spread sheet data according to instruction</p>
          </div>
          <div className="BulkImport-step">
            <h2>STEP 3</h2>
            <p>Validate data and and complete import</p>
          </div>
        </div>

        {/* Instructions Section */}
        <div className="BulkImport-instructions-section BulkImport-section">
          <h2 className="BulkImport-section-title">Instructions</h2>
          <ol className="BulkImport-instructions-list">
            <li>Download the format file and fill it with proper data.</li>
            <li>
              You can download the example file to understand how the data must
              be filled.
            </li>
            <li>
              Once you have downloaded and filled the format file upload it in
              the form below and submit.
            </li>
            <li>
              After uploading foods you need to edit them and set image and
              variations.
            </li>
            <li>
              You can get category id from their list please input the right
              ids.
            </li>
            <li>Don't forget to fill all the fields</li>
            <li>For veg food enter 1 and for non-veg enter 0 on veg field.</li>
            <li>Image file name must be in 30 character.</li>
          </ol>
        </div>

        {/* Template Download Section */}
        <div className="BulkImport-template-section BulkImport-section">
          <h2 className="BulkImport-template-title">
            Download Spreadsheet Template
          </h2>
          <div className="BulkImport-template-buttons">
            <button className="BulkImport-template-button BulkImport-with-data">
              Template with Existing Data
            </button>
            <button className="BulkImport-template-button BulkImport-without-data">
              Template without Data
            </button>
          </div>
        </div>

        {/* Import Section */}
        <div className="BulkImport-import-section BulkImport-section">
          <h2 className="BulkImport-section-title">Import Restaurants</h2>
          <div className="BulkImport-file-upload-container">
            <div className="BulkImport-file-input-wrapper">
              <label htmlFor="file-upload" className="BulkImport-file-label">
                Choose File
              </label>
              <span className="BulkImport-file-name">
                {selectedFile ? selectedFile.name : "No file chosen"}
              </span>
              <input
                type="file"
                id="file-upload"
                className="BulkImport-file-input"
                accept=".xlsx,.xls,.csv"
                onChange={handleFileChange}
              />
            </div>
            <div className="BulkImport-action-buttons">
              <button className="BulkImport-reset-button" onClick={handleReset}>
                Reset
              </button>
              <button className="BulkImport-update-button">Update</button>
              <button className="BulkImport-import-button">Import</button>
            </div>
          </div>
        </div>

        {/* Variations Generator Section */}
        <div className="BulkImport-variations-section BulkImport-section">
          <h2 className="BulkImport-section-title">
            Food Variations Generator
          </h2>

          {!showForm && (
            <button
              className="BulkImport-add-variation-button"
              onClick={handleAddVariation}
            >
              Add new
            </button>
          )}

          {showForm && (
            <div className="BulkImport-variation-form">
              <div className="BulkImport-form-row">
                <div className="BulkImport-form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    value={currentVariation.name}
                    onChange={(e) =>
                      setCurrentVariation({
                        ...currentVariation,
                        name: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="BulkImport-form-group">
                  <label>Selection Type</label>
                  <div className="BulkImport-radio-group">
                    <label className="BulkImport-radio-label">
                      <input
                        type="radio"
                        name="selectionType"
                        checked={currentVariation.selectionType === "multiple"}
                        onChange={() =>
                          setCurrentVariation({
                            ...currentVariation,
                            selectionType: "multiple",
                          })
                        }
                      />
                      <span>Multiple Selection</span>
                    </label>
                    <label className="BulkImport-radio-label">
                      <input
                        type="radio"
                        name="selectionType"
                        checked={currentVariation.selectionType === "single"}
                        onChange={() =>
                          setCurrentVariation({
                            ...currentVariation,
                            selectionType: "single",
                          })
                        }
                      />
                      <span>Single Selection</span>
                    </label>
                  </div>
                </div>

                <div className="BulkImport-form-group">
                  <label>Min</label>
                  <input
                    type="number"
                    value={currentVariation.min}
                    onChange={(e) =>
                      setCurrentVariation({
                        ...currentVariation,
                        min: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="BulkImport-form-group">
                  <label>Max</label>
                  <input
                    type="number"
                    value={currentVariation.max}
                    onChange={(e) =>
                      setCurrentVariation({
                        ...currentVariation,
                        max: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="BulkImport-form-group BulkImport-checkbox-group">
                  <label className="BulkImport-checkbox-label">
                    <input
                      type="checkbox"
                      checked={currentVariation.required}
                      onChange={(e) =>
                        setCurrentVariation({
                          ...currentVariation,
                          required: e.target.checked,
                        })
                      }
                    />
                    <span>Required</span>
                  </label>
                </div>
              </div>

              <div className="BulkImport-options-container">
                {currentVariation.options.map((option, index) => (
                  <div key={index} className="BulkImport-option-item">
                    <div className="BulkImport-option-details">
                      <span className="BulkImport-option-name">
                        {option.name}
                      </span>
                      <span className="BulkImport-option-price">
                        ${option.price}
                      </span>
                    </div>
                    <button
                      className="BulkImport-remove-option-button"
                      onClick={() => handleRemoveOption(index)}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}

                <div className="BulkImport-add-option-form">
                  <div className="BulkImport-form-row">
                    <div className="BulkImport-form-group">
                      <label>Option name</label>
                      <input
                        type="text"
                        value={currentOption.name}
                        onChange={(e) =>
                          setCurrentOption({
                            ...currentOption,
                            name: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="BulkImport-form-group">
                      <label>Additional price</label>
                      <input
                        type="number"
                        value={currentOption.price}
                        onChange={(e) =>
                          setCurrentOption({
                            ...currentOption,
                            price: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <button
                    className="BulkImport-add-option-button"
                    onClick={handleAddOption}
                  >
                    Add New Option
                  </button>
                </div>
              </div>

              <button
                className="BulkImport-save-variation-button"
                onClick={handleSaveVariation}
              >
                Save Variation
              </button>
            </div>
          )}

          {variations.length > 0 && (
            <div className="BulkImport-variations-list">
              {variations.map((variation, index) => (
                <div key={index} className="BulkImport-variation-item">
                  <h3>{variation.name}</h3>
                  <div className="BulkImport-variation-details">
                    <span>
                      Type:{" "}
                      {variation.selectionType === "multiple"
                        ? "Multiple Selection"
                        : "Single Selection"}
                    </span>
                    {variation.min && <span>Min: {variation.min}</span>}
                    {variation.max && <span>Max: {variation.max}</span>}
                    {variation.required && <span>Required</span>}
                  </div>
                  <div className="BulkImport-variation-options">
                    {variation.options.map((option, optIndex) => (
                      <div key={optIndex} className="BulkImport-option-pill">
                        {option.name}{" "}
                        {option.price > 0 && `(+$${option.price})`}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          <button
            className="BulkImport-add-new-variation-button"
            onClick={handleAddVariation}
          >
            Add new variation
          </button>
        </div>
      </div>
    </div>
  );
}

export default BulkImport;

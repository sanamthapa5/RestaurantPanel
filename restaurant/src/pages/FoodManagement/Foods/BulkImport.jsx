"use client";

import { useState } from "react";
import { Trash2 } from "lucide-react";

import "./BulkImport.css";

function BulkImport() {
  // Variations Generator Initial State
  const initialVariationState = {
    name: "",
    selectionType: "multiple",
    min: "",
    max: "",
    required: false,
    options: [],
    tempOptions: [{ name: "", price: "" }],
  };

  // Import Section State
  const [selectedFile, setSelectedFile] = useState(null);

  // Variations Generator State
  const [variations, setVariations] = useState([]);
  const [variationForms, setVariationForms] = useState([
    { ...initialVariationState, id: Date.now() },
  ]);

  // Import Section Handlers
  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleReset = () => {
    setSelectedFile(null);
    document.getElementById("file-upload").value = "";
  };

  // Variations Generator Handlers
  const handleAddVariationForm = () => {
    setVariationForms([
      ...variationForms,
      { ...initialVariationState, id: Date.now() },
    ]);
  };

  const handleVariationChange = (id, field, value) => {
    setVariationForms(
      variationForms.map((form) =>
        form.id === id ? { ...form, [field]: value } : form
      )
    );
  };

  const handleTempOptionChange = (formId, index, field, value) => {
    setVariationForms(
      variationForms.map((form) =>
        form.id === formId
          ? {
              ...form,
              tempOptions: form.tempOptions.map((opt, i) =>
                i === index ? { ...opt, [field]: value } : opt
              ),
            }
          : form
      )
    );
  };

  const handleAddTempOption = (formId) => {
    setVariationForms(
      variationForms.map((form) =>
        form.id === formId
          ? {
              ...form,
              tempOptions: [...form.tempOptions, { name: "", price: "" }],
            }
          : form
      )
    );
  };

  const handleRemoveTempOption = (formId, index) => {
    setVariationForms(
      variationForms.map((form) =>
        form.id === formId
          ? {
              ...form,
              tempOptions: form.tempOptions.filter((_, i) => i !== index),
            }
          : form
      )
    );
  };

  const handleDeleteVariationForm = (formId) => {
    setVariationForms(variationForms.filter((form) => form.id !== formId));
  };

  const handleGenerateVariations = () => {
    const newVariations = variationForms
      .filter((form) => form.name)
      .map((form) => {
        const validOptions = form.tempOptions.filter(
          (opt) => opt.name && opt.price
        );
        return { ...form, options: validOptions, id: undefined };
      });
    setVariations([...variations, ...newVariations]);
    setVariationForms([{ ...initialVariationState, id: Date.now() }]);
  };

  const handleDeleteVariation = (index) => {
    setVariations(variations.filter((_, i) => i !== index));
  };

  return (
    <div className="BulkImport-app-container">
      {/* Header Section */}
      <header className="BulkImport-header">
        <div className="BulkImport-logo">
          <div className="BulkImport-logo-icon">
            <img
              src="https://stackfood-admin.6amtech.com/public/assets/admin/img/export.png"
              alt=""
            />
          </div>
          <h1>Foods Bulk Import</h1>
        </div>
      </header>

      <div className="BulkImport-content-container">
        {/* Steps Guide Section */}
        <div className="Pending-content-wrapper">
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
                You can download the example file to understand how the data
                must be filled.
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
              <li>
                For veg food enter 1 and for non-veg enter 0 on veg field.
              </li>
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
        </div>

        {/* Import Section */}
        <div className="BulkImport-import-section BulkImport-section">
          <div className="Pending-content-wrapper">
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
                <button
                  className="BulkImport-reset-button"
                  onClick={handleReset}
                >
                  Reset
                </button>
                <button className="BulkImport-update-button">Update</button>
                <button className="BulkImport-import-button">Import</button>
              </div>
            </div>
          </div>
        </div>

        {/* Variations Generator Section */}
        <div className="Pending-content-wrapper">
          <div className="BulkImport-variations-section BulkImport-section">
            <h2 className="BulkImport-section-title">
              Food Variations Generator
            </h2>

            {variationForms.map((form) => (
              <div key={form.id} className="BulkImport-variation-form">
                <div className="BulkImport-form-row">
                  <div className="BulkImport-form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) =>
                        handleVariationChange(form.id, "name", e.target.value)
                      }
                    />
                  </div>

                  <div className="BulkImport-form-group">
                    <label>Selection Type</label>
                    <div className="BulkImport-selection-placeholder">
                      <div className="BulkImport-radio-group">
                        <label className="BulkImport-radio-label">
                          <input
                            type="radio"
                            name={`selectionType-${form.id}`}
                            checked={form.selectionType === "multiple"}
                            onChange={() =>
                              handleVariationChange(
                                form.id,
                                "selectionType",
                                "multiple"
                              )
                            }
                          />
                          <span>Multiple Selection</span>
                        </label>
                        <label className="BulkImport-radio-label">
                          <input
                            type="radio"
                            name={`selectionType-${form.id}`}
                            checked={form.selectionType === "single"}
                            onChange={() =>
                              handleVariationChange(
                                form.id,
                                "selectionType",
                                "single"
                              )
                            }
                          />
                          <span>Single Selection</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="BulkImport-form-group">
                    <label>Min</label>
                    <input
                      type="number"
                      value={form.min}
                      onChange={(e) =>
                        handleVariationChange(form.id, "min", e.target.value)
                      }
                    />
                  </div>

                  <div className="BulkImport-form-group">
                    <label>Max</label>
                    <input
                      type="number"
                      value={form.max}
                      onChange={(e) =>
                        handleVariationChange(form.id, "max", e.target.value)
                      }
                    />
                  </div>

                  <div className="BulkImport-form-group BulkImport-checkbox-group">
                    <label className="BulkImport-checkbox-label">
                      <input
                        type="checkbox"
                        checked={form.required}
                        onChange={(e) =>
                          handleVariationChange(
                            form.id,
                            "required",
                            e.target.checked
                          )
                        }
                      />
                      <span>Required</span>
                      <Trash2
                        size={16}
                        className="BulkImport-delete-form"
                        onClick={() => handleDeleteVariationForm(form.id)}
                      />
                    </label>
                  </div>
                </div>

                <div className="BulkImport-options-container">
                  {form.options.map((option, index) => (
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
                        onClick={() => {
                          setVariationForms(
                            variationForms.map((f) =>
                              f.id === form.id
                                ? {
                                    ...f,
                                    options: f.options.filter(
                                      (_, i) => i !== index
                                    ),
                                  }
                                : f
                            )
                          );
                        }}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}

                  <div className="BulkImport-add-option-form">
                    {form.tempOptions.map((option, index) => (
                      <div key={index} className="BulkImport-option-input-row">
                        <div className="BulkImport-form-group">
                          <label>Option name</label>
                          <input
                            type="text"
                            value={option.name}
                            onChange={(e) =>
                              handleTempOptionChange(
                                form.id,
                                index,
                                "name",
                                e.target.value
                              )
                            }
                          />
                        </div>
                        <div className="BulkImport-form-group">
                          <label>Additional price</label>
                          <input
                            type="number"
                            value={option.price}
                            onChange={(e) =>
                              handleTempOptionChange(
                                form.id,
                                index,
                                "price",
                                e.target.value
                              )
                            }
                          />
                        </div>
                        {index > 0 && (
                          <button
                            className="BulkImport-remove-option-input"
                            onClick={() =>
                              handleRemoveTempOption(form.id, index)
                            }
                          >
                            <Trash2 size={16} />
                          </button>
                        )}
                      </div>
                    ))}
                    <button
                      className="BulkImport-add-option-button"
                      onClick={() => handleAddTempOption(form.id)}
                    >
                      Add New Option
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <button
              className="BulkImport-add-new-variation-button"
              onClick={handleAddVariationForm}
            >
              Add new variation
            </button>

            <button
              className="BulkImport-generate-button"
              onClick={handleGenerateVariations}
            >
              Generate
            </button>

            {variations.length > 0 && (
              <>
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
                        {variation.required && (
                          <span>
                            Required
                            <Trash2
                              size={16}
                              className="BulkImport-delete-variation"
                              onClick={() => handleDeleteVariation(index)}
                            />
                          </span>
                        )}
                      </div>
                      <div className="BulkImport-variation-options">
                        {variation.options.map((option, optIndex) => (
                          <div
                            key={optIndex}
                            className="BulkImport-option-pill"
                          >
                            {option.name}{" "}
                            {option.price > 0 && `(+$${option.price})`}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="BulkImport-generated-output">
                  <label>Generated Variations</label>
                  <textarea
                    className="BulkImport-generated-textarea"
                    readOnly
                    value={JSON.stringify(variations, null, 2)}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BulkImport;

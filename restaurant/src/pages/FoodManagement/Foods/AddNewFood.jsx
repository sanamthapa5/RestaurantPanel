"use client";

import { useState } from "react";
import "./AddNewFood.css";
import {
  FaPlusCircle,
  FaBuromobelexperte,
  FaCalendarAlt,
  FaDollarSign,
  FaTag,
} from "react-icons/fa";

export default function AddNewFood() {
  const [formData, setFormData] = useState({
    name: "",
    shortDescription: "",
    category: "",
    subCategory: "",
    foodType: "",
    nutrition: "",
    allergenIngredients: "",
    isHalal: true,
    addOn: "",
    availableTimeStart: "",
    availableTimeEnd: "",
    unitPrice: "1",
    discountType: "Percent (%)",
    discount: "0",
    maxPurchaseQuantity: "",
    stockType: "Unlimited Stock",
    tags: "",
  });

  const [imageFile, setImageFile] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  const handleReset = () => {
    setFormData({
      name: "",
      shortDescription: "",
      category: "",
      subCategory: "",
      foodType: "",
      nutrition: "",
      allergenIngredients: "",
      isHalal: true,
      addOn: "",
      availableTimeStart: "",
      availableTimeEnd: "",
      unitPrice: "1",
      discountType: "Percent (%)",
      discount: "0",
      maxPurchaseQuantity: "",
      stockType: "Unlimited Stock",
      tags: "",
    });
    setImageFile(null);
  };

  return (
    <div className="AddFood-add-food-container">
      <div className="AddFood-header">
        <div className="AddFood-header-icon">
          <FaPlusCircle size={24} />
        </div>
        <h1>Add New Food</h1>
      </div>

      <form onSubmit={handleSubmit} className="AddFood-food-form">
        {/* Basic Information Section */}
        <div className="AddFood-form-section">
          <div className="AddFood-form-row">
            <div className="AddFood-form-left">
              <div className="AddFood-form-group">
                <label htmlFor="name">Name (Default)</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="New food"
                  className="AddFood-form-input"
                />
              </div>

              <div className="AddFood-form-group">
                <label htmlFor="shortDescription">
                  Short Description (Default)
                </label>
                <textarea
                  id="shortDescription"
                  name="shortDescription"
                  value={formData.shortDescription}
                  onChange={handleInputChange}
                  className="AddFood-form-textarea"
                  rows="4"
                />
              </div>
            </div>

            <div className="AddFood-form-right">
              <div className="AddFood-image-upload-section">
                <label className="AddFood-image-upload-label">
                  Food Image{" "}
                  <span className="AddFood-image-ratio">(Ratio 200×200)</span>
                </label>
                <div className="AddFood-image-upload-area">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="AddFood-image-input"
                    id="imageUpload"
                  />
                  <label
                    htmlFor="imageUpload"
                    className="AddFood-upload-button"
                  >
                    <div className="AddFood-upload-icon">☁</div>
                    <span>Upload Image</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Restaurant & Category Info Section */}
        <div className="AddFood-form-section">
          <div className="AddFood-section-header">
            <div className="AddFood-section-icon">
              <FaBuromobelexperte />
            </div>
            <h2>Restaurants & Category Info</h2>
          </div>

          <div className="AddFood-form-row">
            <div className="AddFood-form-group">
              <label htmlFor="category">Category *</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="AddFood-form-select"
              >
                <option value="">---Select Category---</option>
                <option value="appetizers">Appetizers</option>
                <option value="main-course">Main Course</option>
                <option value="desserts">Desserts</option>
                <option value="beverages">Beverages</option>
              </select>
            </div>

            <div className="AddFood-form-group">
              <label htmlFor="subCategory">
                Sub Category
                <span className="AddFood-info-icon">ⓘ</span>
              </label>
              <select
                id="subCategory"
                name="subCategory"
                value={formData.subCategory}
                onChange={handleInputChange}
                className="AddFood-form-select"
              >
                <option value="">---Select Sub Category---</option>
                <option value="hot">Hot</option>
                <option value="cold">Cold</option>
                <option value="spicy">Spicy</option>
              </select>
            </div>

            <div className="AddFood-form-group">
              <label htmlFor="foodType">Food Type</label>
              <select
                id="foodType"
                name="foodType"
                value={formData.foodType}
                onChange={handleInputChange}
                className="AddFood-form-select"
              >
                <option value="">Select Preferences</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="non-vegetarian">Non-Vegetarian</option>
                <option value="vegan">Vegan</option>
              </select>
            </div>
          </div>

          <div className="AddFood-form-row">
            <div className="AddFood-form-group">
              <label htmlFor="nutrition">
                Nutrition
                <span className="AddFood-info-icon">ⓘ</span>
              </label>
              <textarea
                id="nutrition"
                name="nutrition"
                value={formData.nutrition}
                onChange={handleInputChange}
                placeholder="Type your content and press enter"
                className="AddFood-form-textarea"
                rows="3"
              />
            </div>

            <div className="AddFood-form-group">
              <label htmlFor="allergenIngredients">
                Allergen Ingredients
                <span className="AddFood-info-icon">ⓘ</span>
              </label>
              <textarea
                id="allergenIngredients"
                name="allergenIngredients"
                value={formData.allergenIngredients}
                onChange={handleInputChange}
                placeholder="Type your content and press enter"
                className="AddFood-form-textarea"
                rows="3"
              />
            </div>
          </div>

          <div className="AddFood-form-group">
            <label className="AddFood-checkbox-label">
              <input
                type="checkbox"
                name="isHalal"
                checked={formData.isHalal}
                onChange={handleInputChange}
                className="AddFood-checkbox-input"
              />
              Is It Halal
            </label>
          </div>
        </div>

        {/* Addon Section */}
        <div className="AddFood-form-section">
          <div className="AddFood-section-header">
            <div className="AddFood-section-icon">
              <FaBuromobelexperte />
            </div>
            <h2>Addon</h2>
          </div>

          <div className="AddFood-form-group">
            <label htmlFor="addOn">
              Select Add-On
              <span className="AddFood-info-icon">ⓘ</span>
            </label>
            <select
              id="addOn"
              name="addOn"
              value={formData.addOn}
              onChange={handleInputChange}
              className="AddFood-form-select"
            >
              <option value="">Select Add-On</option>
              <option value="extra-cheese">Extra Cheese</option>
              <option value="extra-sauce">Extra Sauce</option>
              <option value="extra-toppings">Extra Toppings</option>
            </select>
          </div>
        </div>

        {/* Availability Section */}
        <div className="AddFood-form-section">
          <div className="AddFood-section-header">
            <div className="AddFood-section-icon">
              <FaCalendarAlt />
            </div>
            <h2>Availability</h2>
          </div>

          <div className="AddFood-form-row">
            <div className="AddFood-form-group">
              <label htmlFor="availableTimeStart">Available Time Starts</label>
              <div className="AddFood-time-input-wrapper">
                <input
                  type="time"
                  id="availableTimeStart"
                  name="availableTimeStart"
                  value={formData.availableTimeStart}
                  onChange={handleInputChange}
                  className="AddFood-form-input AddFood-time-input"
                />
                <span className="AddFood-time-icon">🕐</span>
              </div>
            </div>

            <div className="AddFood-form-group">
              <label htmlFor="availableTimeEnd">Available Time Ends</label>
              <div className="AddFood-time-input-wrapper">
                <input
                  type="time"
                  id="availableTimeEnd"
                  name="availableTimeEnd"
                  value={formData.availableTimeEnd}
                  onChange={handleInputChange}
                  className="AddFood-form-input AddFood-time-input"
                />
                <span className="AddFood-time-icon">🕐</span>
              </div>
            </div>
          </div>
        </div>

        {/* Price Information Section */}
        <div className="AddFood-form-section">
          <div className="AddFood-section-header">
            <div className="AddFood-section-icon">
              <FaDollarSign />
            </div>
            <h2>Price Information</h2>
          </div>

          <div className="AddFood-form-row">
            <div className="AddFood-form-group">
              <label htmlFor="unitPrice">Unit Price $</label>
              <input
                type="number"
                id="unitPrice"
                name="unitPrice"
                value={formData.unitPrice}
                onChange={handleInputChange}
                className="AddFood-form-input"
                min="0"
                step="0.01"
              />
            </div>

            <div className="AddFood-form-group">
              <label htmlFor="discountType">Discount Type</label>
              <select
                id="discountType"
                name="discountType"
                value={formData.discountType}
                onChange={handleInputChange}
                className="AddFood-form-select"
              >
                <option value="Percent (%)">Percent (%)</option>
                <option value="Fixed Amount">Fixed Amount</option>
              </select>
            </div>

            <div className="AddFood-form-group">
              <label htmlFor="discount">
                Discount
                <span className="AddFood-info-icon">ⓘ</span>
              </label>
              <input
                type="number"
                id="discount"
                name="discount"
                value={formData.discount}
                onChange={handleInputChange}
                className="AddFood-form-input"
                min="0"
              />
            </div>

            <div className="AddFood-form-group">
              <label htmlFor="maxPurchaseQuantity">
                Maximum Purchase Quantity Limit
                <span className="AddFood-info-icon">ⓘ</span>
              </label>
              <input
                type="number"
                id="maxPurchaseQuantity"
                name="maxPurchaseQuantity"
                value={formData.maxPurchaseQuantity}
                onChange={handleInputChange}
                placeholder="Ex: 10"
                className="AddFood-form-input"
                min="1"
              />
            </div>
          </div>

          <div className="AddFood-form-group">
            <label htmlFor="stockType">Stock Type</label>
            <select
              id="stockType"
              name="stockType"
              value={formData.stockType}
              onChange={handleInputChange}
              className="AddFood-form-select"
            >
              <option value="Unlimited Stock">Unlimited Stock</option>
              <option value="Limited Stock">Limited Stock</option>
            </select>
          </div>
        </div>

        {/* Food Variations Section */}
        {/* <div className="AddFood-form-section">
          <div className="AddFood-section-header">
            <div className="AddFood-section-icon">🍽</div>
            <h2 >Food Variations</h2>
            <button type="button" className="AddFood-add-variation-btn">
              Add new variation +
            </button>
          </div>
        </div> */}

        {/* Tags Section */}
        <div className="AddFood-form-section">
          <div className="AddFood-section-header">
            <div className="AddFood-section-icon">
              <FaTag />
            </div>
            <h2>Tags</h2>
          </div>

          <div className="AddFood-form-group">
            <input
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleInputChange}
              placeholder="Enter tags"
              className="AddFood-form-input"
            />
          </div>
        </div>

        {/* Form Actions */}
        <div className="AddFood-form-actions">
          <button
            type="button"
            onClick={handleReset}
            className="AddFood-reset-btn"
          >
            Reset
          </button>
          <button type="submit" className="AddFood-submit-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

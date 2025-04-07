
"use client"

import { useState } from "react";
import "./coupon-form.css";

const CouponForm = ({ onAddCoupon }) => {
  const [activeTab, setActiveTab] = useState("Default");

  const [formData, setFormData] = useState({
    title: {
      Default: "",
      English: "",
      Bengali: "",
      Arabic: "",
      Spanish: "",
    },
    couponType: "Default",
    code: "",
    limitForSameUser: "",
    startDate: new Date().toISOString().split("T")[0],
    expireDate: new Date().toISOString().split("T")[0],
    discountType: "Amount ($)",
    discount: "",
    maxDiscount: "",
    minPurchase: "",
  });

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Handle multilingual title
    if (name === "title") {
      setFormData((prev) => ({
        ...prev,
        title: {
          ...prev.title,
          [activeTab]: value,
        },
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const generateCode = () => { 
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 8; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setFormData({
      ...formData,
      code: result,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddCoupon({
      ...formData,
      limitForSameUser: Number(formData.limitForSameUser),
      discount: Number(formData.discount),
      maxDiscount: Number(formData.maxDiscount),
      minPurchase: Number(formData.minPurchase),
    });

    // Optionally reset
    // handleReset();
  };

  const handleReset = () => {
    setFormData({
      title: {
        Default: "",
        English: "",
        Bengali: "",
        Arabic: "",
        Spanish: "",
      },
      couponType: "Default",
      code: "",
      limitForSameUser: "",
      startDate: new Date().toISOString().split("T")[0],
      expireDate: new Date().toISOString().split("T")[0],
      discountType: "Amount ($)",
      discount: "",
      maxDiscount: "",
      minPurchase: "",
    });
  };

  return (
    <div className="coupon-form-container">
      <div className="form-header">
        <h2>Add New Coupon</h2>
      </div>

      <div className="language-tabs">
        {["Default", "English", "Bengali", "Arabic", "Spanish"].map((lang) => (
          <button
            key={lang}
            className={`tab-button ${activeTab === lang ? "active" : ""}`}
            onClick={() => handleTabChange(lang)}
          >
            {lang === "English" && "English (EN)"}
            {lang === "Bengali" && "Bengali - বাংলা (BN)"}
            {lang === "Arabic" && "Arabic - العربية (AR)"}
            {lang === "Spanish" && "Spanish - español (ES)"}
            {lang === "Default" && "Default"}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title ({activeTab})</label>
          <input
            type="text"
            name="title"
            value={formData.title[activeTab]}
            onChange={handleInputChange}
            placeholder={`Enter coupon title in ${activeTab}`}
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Coupon Type</label>
            <select name="couponType" value={formData.couponType} onChange={handleInputChange}>
              <option value="Default">Default</option>
              {/* <option value="First Time">First Time</option>
              <option value="Special">Special</option> */}
            </select>
          </div>

          <div className="form-group">
            <label>Code</label>
            <div className="code-input-group">
              <input
                type="text"
                name="code"
                value={formData.code}
                onChange={handleInputChange}
                placeholder="Enter code or generate"
              />
              
              <button type="button" className="generate-button" onClick={generateCode}>
                Generate Code
              </button>
            </div>
          </div>

          <div className="form-group">
            <label>Limit For Same User</label>
            <input
              type="number"
              name="limitForSameUser"
              value={formData.limitForSameUser}
              onChange={handleInputChange}
              placeholder="Ex: 10"
            />
          </div>

          <div className="form-group">
            <label>Start Date</label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Expire Date</label>
            <input
              type="date"
              name="expireDate"
              value={formData.expireDate}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Discount Type</label>
            <select
              name="discountType"
              value={formData.discountType}
              onChange={handleInputChange}
            >
              <option value="Amount ($)">Amount ($)</option>
              <option value="Percent">Percent</option>
            </select>
          </div>

          <div className="form-group">
            <label>Discount</label>
            <input
              type="number"
              name="discount"
              value={formData.discount}
              onChange={handleInputChange}
              placeholder="0"
            />
          </div>

          <div className="form-group">
            <label>Max Discount</label>
            <input
              type="number"
              name="maxDiscount"
              value={formData.maxDiscount}
              onChange={handleInputChange}
              placeholder="0"
            />
          </div>
        </div>

        <div className="form-row">
        <div className="MinPurchase-input-group">
          
            <label>Min Purchase</label>
            <input
              type="number"
              name="minPurchase"
              value={formData.minPurchase}
              onChange={handleInputChange}
              placeholder="0"
            />
          </div>
         
        </div>

        <div className="form-actions">
          <button type="button" className="reset-button" onClick={handleReset}>
            Reset
          </button>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CouponForm;

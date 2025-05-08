"use client";

import { useState } from "react";
import "./RestaurantSetup.css";
import { ChevronDown } from "lucide-react";

function RestaurantSetup() {
  const [isRestaurantClosed, setIsRestaurantClosed] = useState(false);
  const [generalSettings, setGeneralSettings] = useState({
    scheduledDelivery: true,
    homeDelivery: true,
    takeaway: true,
    veg: true,
    nonVeg: true,
    subscriptionBasedOrder: false,
    halalTagStatus: false,
    instantOrder: true,
    dineIn: true,
    extraPackagingCharge: true,
  });

  const [packagingChargeType, setPackagingChargeType] = useState("optional");
  const [packagingChargeAmount, setPackagingChargeAmount] = useState("2");
  const [minimumOrderAmount, setMinimumOrderAmount] = useState("0");
  const [minimumDineInTime, setMinimumDineInTime] = useState("0");
  const [gstEnabled, setGstEnabled] = useState(false);
  const [cuisines, setCuisines] = useState(["Italian", "Spanish"]);
  const [showCuisineDropdown, setShowCuisineDropdown] = useState(false);
  const [tags, setTags] = useState("");
  const [characteristics, setCharacteristics] = useState([
    "Bengali",
    "Indian",
    "Pizza",
    "Pasta",
    "Snacks",
  ]);
  const [activeTab, setActiveTab] = useState("default");

  const [metaTitle, setMetaTitle] = useState(
    "Hungry Puppets Restaurant: Where Flavor and Fun Meet"
  );
  const [metaDescription, setMetaDescription] = useState(
    "Satisfy your cravings and indulge in a culinary adventure at Hungry Puppets Restaurant. Our menu is a symphony of taste, offering a delightful fusion of flavors that cater to every palate. Join us for..."
  );

  const cuisineOptions = ["Bengali", "Indian", "Pizza", "Pasta", "Snacks"];

  const handleToggleSetting = (setting) => {
    setGeneralSettings((prev) => ({
      ...prev,
      [setting]: !prev[setting],
    }));
  };

  const handleRemoveCuisine = (cuisine) => {
    setCuisines(cuisines.filter((c) => c !== cuisine));
  };

  const handleAddCuisine = (cuisine) => {
    if (!cuisines.includes(cuisine)) {
      setCuisines([...cuisines, cuisine]);
    }
    setShowCuisineDropdown(false);
  };

  const handleRemoveCharacteristic = (characteristic) => {
    setCharacteristics(characteristics.filter((c) => c !== characteristic));
  };

  const Toggle = ({ checked, onChange }) => (
    <label className="toggle-switch">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="toggle-slider"></span>
    </label>
  );

  const InfoIcon = () => <span className="info-icon">i</span>;

  const TimeSelector = ({ label, defaultTime }) => {
    const [time, setTime] = useState(defaultTime);

    return (
      <div className="time-selector">
        <div className="time-label">{label}</div>
        <div className="time-input-container">
          <span className="clock-icon">🕒</span>
          <input
            type="text"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="time-input"
          />
        </div>
      </div>
    );
  };

  return (
    <div className="restaurant-setup">
      <div className="card">
        <div className="card-header">
          <h2 className="section-title">
            <span className="icon">🏪</span> Restaurant Setup
          </h2>
        </div>
        <div className="card-content">
          <div className="setting-row">
            <div className="setting-label">
              <span>Close Restaurant Temporarily</span>
              <InfoIcon />
            </div>
            <Toggle
              checked={isRestaurantClosed}
              onChange={() => setIsRestaurantClosed(!isRestaurantClosed)}
            />
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="section-title">
            <span className="icon">⚙️</span> General Settings
          </h2>
        </div>
        <div className="card-content">
          <div className="settings-grid">
            <div className="setting-item">
              <div className="setting-label">
                <span>Scheduled Delivery</span>
                <InfoIcon />
              </div>
              <Toggle
                checked={generalSettings.scheduledDelivery}
                onChange={() => handleToggleSetting("scheduledDelivery")}
              />
            </div>

            <div className="setting-item">
              <div className="setting-label">
                <span>Home Delivery</span>
                <InfoIcon />
              </div>
              <Toggle
                checked={generalSettings.homeDelivery}
                onChange={() => handleToggleSetting("homeDelivery")}
              />
            </div>

            <div className="setting-item">
              <div className="setting-label">
                <span>Takeaway</span>
                <InfoIcon />
              </div>
              <Toggle
                checked={generalSettings.takeaway}
                onChange={() => handleToggleSetting("takeaway")}
              />
            </div>

            <div className="setting-item">
              <div className="setting-label">
                <span>Veg</span>
                <InfoIcon />
              </div>
              <Toggle
                checked={generalSettings.veg}
                onChange={() => handleToggleSetting("veg")}
              />
            </div>

            <div className="setting-item">
              <div className="setting-label">
                <span>Non Veg</span>
                <InfoIcon />
              </div>
              <Toggle
                checked={generalSettings.nonVeg}
                onChange={() => handleToggleSetting("nonVeg")}
              />
            </div>

            <div className="setting-item">
              <div className="setting-label">
                <span>Subscription Based Order</span>
                <InfoIcon />
              </div>
              <Toggle
                checked={generalSettings.subscriptionBasedOrder}
                onChange={() => handleToggleSetting("subscriptionBasedOrder")}
              />
            </div>

            <div className="setting-item">
              <div className="setting-label">
                <span>Halal Tag Status</span>
                <InfoIcon />
              </div>
              <Toggle
                checked={generalSettings.halalTagStatus}
                onChange={() => handleToggleSetting("halalTagStatus")}
              />
            </div>

            <div className="setting-item">
              <div className="setting-label">
                <span>Instant Order</span>
                <InfoIcon />
              </div>
              <Toggle
                checked={generalSettings.instantOrder}
                onChange={() => handleToggleSetting("instantOrder")}
              />
            </div>

            <div className="setting-item">
              <div className="setting-label">
                <span>Dine-In</span>
                <InfoIcon />
              </div>
              <Toggle
                checked={generalSettings.dineIn}
                onChange={() => handleToggleSetting("dineIn")}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="section-title">
            <span className="icon">📋</span> Basic Settings
          </h2>
        </div>
        <div className="card-content">
          <div className="setting-group">
            <div className="setting-label">
              <span>Extra Packaging Charge</span>
              <InfoIcon />
            </div>
            <div className="radio-group">
              <label className="radio-label">
                <input
                  type="radio"
                  name="packagingCharge"
                  value="optional"
                  checked={packagingChargeType === "optional"}
                  onChange={() => setPackagingChargeType("optional")}
                />
                <span>Optional</span>
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="packagingCharge"
                  value="mandatory"
                  checked={packagingChargeType === "mandatory"}
                  onChange={() => setPackagingChargeType("mandatory")}
                />
                <span>Mandatory</span>
              </label>
            </div>
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">
                Extra Packaging Charge Amount
              </label>
              <input
                type="number"
                value={packagingChargeAmount}
                onChange={(e) => setPackagingChargeAmount(e.target.value)}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                <span>Minimum Order Amount</span>
                <InfoIcon />
              </label>
              <input
                type="number"
                value={minimumOrderAmount}
                onChange={(e) => setMinimumOrderAmount(e.target.value)}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">
                <span>Minimum Time For Dine-In Order</span>
                <InfoIcon />
              </label>
              <div className="input-with-suffix">
                <input
                  type="number"
                  value={minimumDineInTime}
                  onChange={(e) => setMinimumDineInTime(e.target.value)}
                  className="form-input"
                />
                <span className="input-suffix">Min</span>
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <div className="gst-container">
                <div className="setting-label">
                  <span>GST</span>
                  <InfoIcon />
                </div>
                <Toggle
                  checked={gstEnabled}
                  onChange={() => setGstEnabled(!gstEnabled)}
                />
              </div>
              <div className="gst-placeholder form-input"></div>
            </div>

            <div className="form-group">
              <div className="cuisine-container">
                <div className="setting-label">
                  <span>Cuisine</span>
                  <InfoIcon />
                </div>
                <div className="dropdown-wrapper">
                  <button
                    className="dropdown-button"
                    onClick={() => setShowCuisineDropdown(!showCuisineDropdown)}
                  >
                    ▼{/* <ChevronDown /> */}
                  </button>
                  {showCuisineDropdown && (
                    <ul className="dropdown-menu">
                      {cuisineOptions.map((option) => (
                        <li
                          key={option}
                          className="dropdown-item"
                          onClick={() => handleAddCuisine(option)}
                        >
                          {option}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              <div className="cuisine-placeholder form-input">
                {cuisines.map((cuisine) => (
                  <span key={cuisine} className="tag">
                    {cuisine}
                    <button
                      onClick={() => handleRemoveCuisine(cuisine)}
                      className="tag-remove"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Tags</label>
            <input
              type="text"
              placeholder="Enter tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <h3 className="subsection-title">Set Restaurant Characteristics</h3>
            <p className="helper-text">
              Select the Restaurant Type that Best Represents Your Establishment
            </p>
            <div className="tags-container">
              {characteristics.map((characteristic) => (
                <span key={characteristic} className="tag tag-blue">
                  {characteristic}
                  <button
                    onClick={() => handleRemoveCharacteristic(characteristic)}
                    className="tag-remove"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          <div className="button-row">
            <button className="btn btn-secondary">Reset</button>
            <button className="btn btn-primary">Update</button>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="section-title">Restaurant Meta Data</h2>
        </div>
        <div className="card-content">
          <div className="tabs">
            <button
              className={`tab ${activeTab === "default" ? "active" : ""}`}
              onClick={() => setActiveTab("default")}
            >
              Default
            </button>
            <button
              className={`tab ${activeTab === "english" ? "active" : ""}`}
              onClick={() => setActiveTab("english")}
            >
              English(EN)
            </button>
            <button
              className={`tab ${activeTab === "bengali" ? "active" : ""}`}
              onClick={() => setActiveTab("bengali")}
            >
              Bengali - বাংলা(BN)
            </button>
            <button
              className={`tab ${activeTab === "arabic" ? "active" : ""}`}
              onClick={() => setActiveTab("arabic")}
            >
              Arabic - العربية(AR)
            </button>
            <button
              className={`tab ${activeTab === "spanish" ? "active" : ""}`}
              onClick={() => setActiveTab("spanish")}
            >
              Spanish
            </button>
          </div>

          {activeTab === "default" && (
            <div className="tab-content">
              <div className="meta-grid">
                <div className="meta-form">
                  <div className="form-group">
                    <label className="form-label">Meta Title (Default)</label>
                    <input
                      type="text"
                      value={metaTitle}
                      onChange={(e) => setMetaTitle(e.target.value)}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">
                      Meta Description (Default)
                    </label>
                    <textarea
                      rows={4}
                      value={metaDescription}
                      onChange={(e) => setMetaDescription(e.target.value)}
                      className="form-textarea"
                    />
                  </div>
                </div>
                <div className="meta-image">
                  <h3 className="subsection-title">Restaurant Meta Image</h3>
                  <p className="helper-text">Meta Image(1:1)</p>
                  <div className="image-preview">
                    <div className="image-content">
                      <div className="image-text-small">HUNGRY</div>
                      <div className="image-text-large">PUPPETS</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="button-row">
            <button className="btn btn-primary">Save Changes</button>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="section-title">
            <span className="icon">🕒</span> Restaurant Opening & Closing
            Schedules
          </h2>
        </div>
        <div className="card-content">
          <div className="schedule-container">
            {[
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ].map((day) => (
              <div key={day} className="schedule-row">
                <div className="day-label">{day} :</div>
                <div className="time-slots">
                  <TimeSelector label="Opening Time" defaultTime="12:00 AM" />
                  <TimeSelector label="Closing Time" defaultTime="11:59 PM" />
                  <button className="icon-button delete">×</button>
                  <button className="icon-button add">+</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantSetup;

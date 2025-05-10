"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import "./RestaurantSetup.css";

function RestaurantSetup() {
  // Define initial state values as constants for reset functionality
  const initialGeneralSettings = {
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
    cutlery: false,
  };
  const [timeUnit, setTimeUnit] = useState("min");

  const initialPackagingChargeType = "optional";
  const initialPackagingChargeAmount = "2";
  const initialMinimumOrderAmount = "0";
  const initialMinimumDineInTime = "0";
  const initialGstEnabled = false;
  const initialCuisines = ["Italian", "Spanish"];
  const initialTags = "";
  const initialCharacteristics = ["Chinese", "Italian", "Fast Food"];
  const initialMetaTitle = {
    default: "Hungry Puppets Restaurant: Where Flavor and Fun Meet",
    english: "Hungry Puppets Restaurant: Where Flavor and Fun Meet",
    bengali: "Hungry Puppets Restaurant: Where Flavor and Fun Meet",
    arabic: "Hungry Puppets Restaurant: Where Flavor and Fun Meet",
    spanish: "Hungry Puppets Restaurant: Where Flavor and Fun Meet",
  };
  const initialMetaDescription = {
    default:
      "Satisfy your cravings and indulge in a culinary adventure at Hungry Puppets Restaurant. Our menu is a symphony of taste, offering a delightful fusion of flavors that cater to every palate. Join us for a gastronomic experience that combines great food and a playful atmosphere",
    english:
      "Satisfy your cravings and indulge in a culinary adventure at Hungry Puppets Restaurant. Our menu is a symphony of taste, offering a delightful fusion of flavors that cater to every palate. Join us for a gastronomic experience that combines great food and a playful atmosphere",
    bengali:
      "Satisfy your cravings and indulge in a culinary adventure at Hungry Puppets Restaurant. Our menu is a symphony of taste, offering a delightful fusion of flavors that cater to every palate. Join us for a gastronomic experience that combines great food and a playful atmosphere",
    arabic:
      "Satisfy your cravings and indulge in a culinary adventure at Hungry Puppets Restaurant. Our menu is a symphony of taste, offering a delightful fusion of flavors that cater to every palate. Join us for a gastronomic experience that combines great food and a playful atmosphere",
    spanish:
      "Satisfy your cravings and indulge in a culinary adventure at Hungry Puppets Restaurant. Our menu is a symphony of taste, offering a delightful fusion of flavors that cater to every palate. Join us for a gastronomic experience that combines great food and a playful atmosphere",
  };

  // State variables
  const [isRestaurantClosed, setIsRestaurantClosed] = useState(false);
  const [generalSettings, setGeneralSettings] = useState(
    initialGeneralSettings
  );
  const [packagingChargeType, setPackagingChargeType] = useState(
    initialPackagingChargeType
  );
  const [packagingChargeAmount, setPackagingChargeAmount] = useState(
    initialPackagingChargeAmount
  );
  const [minimumOrderAmount, setMinimumOrderAmount] = useState(
    initialMinimumOrderAmount
  );
  const [minimumDineInTime, setMinimumDineInTime] = useState(
    initialMinimumDineInTime
  );
  const [gstEnabled, setGstEnabled] = useState(initialGstEnabled);
  const [cuisines, setCuisines] = useState(initialCuisines);
  const [showCuisineDropdown, setShowCuisineDropdown] = useState(false);
  const [tags, setTags] = useState(initialTags);
  const [characteristics, setCharacteristics] = useState(
    initialCharacteristics
  );
  const [showCharacteristicsDropdown, setShowCharacteristicsDropdown] =
    useState(false);
  const [activeTab, setActiveTab] = useState("default");
  const [metaTitle, setMetaTitle] = useState(initialMetaTitle);
  const [metaDescription, setMetaDescription] = useState(
    initialMetaDescription
  );
  const [showWarning, setShowWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");
  const [selectedImage, setSelectedImage] = useState(
    "https://stackfood-admin.6amtech.com/storage/app/public/restaurant/2023-09-09-64fc5d8a7d7f7.png"
  );
  const [showFileInput, setShowFileInput] = useState(false);
  const fileInputRef = useRef(null);

  // State for schedules and modal
  const initialSchedules = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ].map((day) => ({
    day,
    timeSlots: [{ openingTime: "12:00 AM", closingTime: "11:59 PM" }],
  }));
  const [schedules, setSchedules] = useState(initialSchedules);
  const [showScheduleDeleteModal, setShowScheduleDeleteModal] = useState(false);
  const [dayToDelete, setDayToDelete] = useState(null);
  const [slotIndexToDelete, setSlotIndexToDelete] = useState(null);

  const cuisineOptions = [
    "Bengali",
    "Japanese",
    "Indian",
    "Pizza",
    "Pasta",
    "Snacks",
    "Sea Food",
  ];
  const characteristicOptions = [
    "Chinese",
    "Japanese",
    "Italian",
    "Fast Food",
    "Spanish",
    "Sea Food",
    "Caribbean",
    "French",
    "Kabab & More",
    "Noodles",
    "Mexican Food",
    "American",
    "Varieties",
    "Kubie Burger",
    "Steamed Cheese",
    "Theta Burger",
    "Nutburger",
    "Pimento Cheese",
    "Pound Cake",
    "Yellow Butter",
    "Red Velvet",
    "Black Coffee",
    "Robusta",
    "Cappuccino",
    "Macchiato",
    "Soft Drinks",
  ];

  // Refs for Cuisine and Characteristics dropdowns
  const cuisinePlaceholderRef = useRef(null);
  const cuisineDropdownRef = useRef(null);
  const characteristicsPlaceholderRef = useRef(null);
  const characteristicsDropdownRef = useRef(null);

  // Handle clicks outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        cuisinePlaceholderRef.current &&
        !cuisinePlaceholderRef.current.contains(event.target) &&
        cuisineDropdownRef.current &&
        !cuisineDropdownRef.current.contains(event.target)
      ) {
        setShowCuisineDropdown(false);
      }
      if (
        characteristicsPlaceholderRef.current &&
        !characteristicsPlaceholderRef.current.contains(event.target) &&
        characteristicsDropdownRef.current &&
        !characteristicsDropdownRef.current.contains(event.target)
      ) {
        setShowCharacteristicsDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Auto-hide warning message after 5 seconds
  useEffect(() => {
    if (showWarning) {
      console.log("Warning message should be visible:", warningMessage);
      const timer = setTimeout(() => {
        setShowWarning(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showWarning, warningMessage]);

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

  const handleAddCharacteristic = (characteristic) => {
    if (characteristics.length >= 5) {
      console.log(
        "Cannot add more than 5 characteristics. Current:",
        characteristics
      );
      setWarningMessage("You can add max 5 Characteristics");
      setShowWarning(true);
      setShowCharacteristicsDropdown(false);
      return;
    }
    if (!characteristics.includes(characteristic)) {
      setCharacteristics([...characteristics, characteristic]);
    }
    setShowCharacteristicsDropdown(false);
  };

  // Reset form to initial values
  const handleReset = () => {
    setGeneralSettings(initialGeneralSettings);
    setPackagingChargeType(initialPackagingChargeType);
    setPackagingChargeAmount(initialPackagingChargeAmount);
    setMinimumOrderAmount(initialMinimumOrderAmount);
    setMinimumDineInTime(initialMinimumDineInTime);
    setGstEnabled(initialGstEnabled);
    setCuisines(initialCuisines);
    setTags(initialTags);
    setCharacteristics(initialCharacteristics);
    setMetaTitle(initialMetaTitle);
    setMetaDescription(initialMetaDescription);
    setTimeUnit("min");
    setSelectedImage(
      "https://stackfood-admin.6amtech.com/storage/app/public/restaurant/2023-09-09-64fc5d8a7d7f7.png"
    );
    setSchedules(initialSchedules); // Reset schedules
  };

  const handleImageClick = () => {
    setShowFileInput(true);
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setShowFileInput(false);
    }
  };

  // Handle adding a new time slot
  const handleAddTimeSlot = (day) => {
    setSchedules((prevSchedules) =>
      prevSchedules.map((schedule) =>
        schedule.day === day
          ? {
              ...schedule,
              timeSlots: [
                ...schedule.timeSlots,
                { openingTime: "12:00 AM", closingTime: "11:59 PM" },
              ],
            }
          : schedule
      )
    );
  };

  // Handle opening the delete modal
  const handleOpenDeleteModal = (day, slotIndex) => {
    setDayToDelete(day);
    setSlotIndexToDelete(slotIndex);
    setShowScheduleDeleteModal(true);
  };

  // Handle deleting a time slot
  const handleDeleteTimeSlot = () => {
    setSchedules((prevSchedules) =>
      prevSchedules.map((schedule) =>
        schedule.day === dayToDelete
          ? {
              ...schedule,
              timeSlots: schedule.timeSlots.filter(
                (_, index) => index !== slotIndexToDelete
              ),
            }
          : schedule
      )
    );
    setShowScheduleDeleteModal(false);
    setDayToDelete(null);
    setSlotIndexToDelete(null);
  };

  // Handle canceling the delete action
  const handleCancelDelete = () => {
    setShowScheduleDeleteModal(false);
    setDayToDelete(null);
    setSlotIndexToDelete(null);
  };

  // Handle time slot changes
  const handleTimeChange = (day, slotIndex, field, value) => {
    setSchedules((prevSchedules) =>
      prevSchedules.map((schedule) =>
        schedule.day === day
          ? {
              ...schedule,
              timeSlots: schedule.timeSlots.map((slot, index) =>
                index === slotIndex ? { ...slot, [field]: value } : slot
              ),
            }
          : schedule
      )
    );
  };

  const Toggle = ({ checked, onChange }) => (
    <label className="toggle-switch">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="toggle-slider"></span>
    </label>
  );

  const InfoIcon = () => <span className="info-icon">i</span>;

  const TimeSelector = ({ label, value, onChange }) => (
    <div className="time-selector">
      <div className="time-label">{label}</div>
      <div className="time-input-container">
        <span className="clock-icon">🕒</span>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="time-input"
        />
      </div>
    </div>
  );

  return (
    <div className="restaurant-setup">
      {showWarning && (
        <div
          className="warning-message"
          onClick={() => setShowWarning(false)}
          style={{
            display: "block",
            position: "fixed",
            top: "20px",
            right: "20px",
          }}
        >
          {warningMessage}
        </div>
      )}

      {showScheduleDeleteModal && (
        <div className="schedule-delete-modal">
          <div className="schedule-delete-modal-content">
            <div className="schedule-attention-sign">
              <span>!</span>
            </div>
            <p>
              Want to delete this day’s schedule? If yes the schedule will be
              removed from here. However you can also add another one.
            </p>
            <div className="schedule-modal-buttons">
              <button
                className="schedule-modal-btn schedule-modal-btn-cancel"
                onClick={handleCancelDelete}
              >
                No
              </button>
              <button
                className="schedule-modal-btn schedule-modal-btn-confirm"
                onClick={handleDeleteTimeSlot}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}

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
                <span>Cutlery</span>
                <InfoIcon />
              </div>
              <Toggle
                checked={generalSettings.cutlery}
                onChange={() => handleToggleSetting("cutlery")}
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
                <span>Extra Packaging Charge</span>
                <InfoIcon />
              </div>
              <Toggle
                checked={generalSettings.extraPackagingCharge}
                onChange={() => handleToggleSetting("extraPackagingCharge")}
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
            <label style={{ marginBottom: "4px", fontSize: "14px" }}>
              Minimum Time For Dine-In Order <InfoIcon />
              <div
                className="input-with-suffix"
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <input
                  type="text"
                  value={minimumDineInTime}
                  onChange={(e) => setMinimumDineInTime(e.target.value)}
                  className="form-input"
                  placeholder="Min"
                  style={{ paddingRight: "100px" }}
                />
                <div
                  style={{
                    position: "absolute",
                    right: "10px",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    background: "white",
                    paddingLeft: "8px",
                  }}
                >
                  <select
                    value={timeUnit}
                    onChange={(e) => setTimeUnit(e.target.value)}
                    style={{
                      border: "none",
                      background: "transparent",
                      appearance: "none",
                      fontSize: "14px",
                      paddingRight: "20px",
                    }}
                  >
                    <option value="min">Min</option>
                    <option value="hour">Hour</option>
                    <option value="day">Day</option>
                  </select>
                  <ChevronDown size={16} />
                </div>
              </div>
            </label>
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
              </div>
              <div
                className="cuisine-placeholder form-input"
                onClick={() => setShowCuisineDropdown(!showCuisineDropdown)}
                ref={cuisinePlaceholderRef}
              >
                {cuisines.map((cuisine) => (
                  <span key={cuisine} className="tag">
                    {cuisine}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveCuisine(cuisine);
                      }}
                      className="tag-remove"
                    >
                      ×
                    </button>
                  </span>
                ))}
                {cuisines.length === 0 && (
                  <span className="placeholder-text">Select cuisines</span>
                )}
                <ChevronDown className="chevron" />
              </div>
              {showCuisineDropdown && (
                <ul className="dropdown-menu" ref={cuisineDropdownRef}>
                  {cuisineOptions.map((option) => (
                    <li
                      key={option}
                      className="dropdown-item"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddCuisine(option);
                      }}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
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
            <div
              className="characteristics-placeholder form-input"
              onClick={() =>
                setShowCharacteristicsDropdown(!showCharacteristicsDropdown)
              }
              ref={characteristicsPlaceholderRef}
            >
              {characteristics.map((characteristic) => (
                <span key={characteristic} className="tag tag-blue">
                  {characteristic}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveCharacteristic(characteristic);
                    }}
                    className="tag-remove"
                  >
                    ×
                  </button>
                </span>
              ))}
              {characteristics.length === 0 && (
                <span className="placeholder-text">Select characteristics</span>
              )}
              <ChevronDown className="chevron" />
            </div>
            {showCharacteristicsDropdown && (
              <ul className="dropdown-menu" ref={characteristicsDropdownRef}>
                {characteristicOptions.map((option) => (
                  <li
                    key={option}
                    className="dropdown-item"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddCharacteristic(option);
                    }}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="button-row">
            <button className="btn btn-secondary" onClick={handleReset}>
              Reset
            </button>
            <button className="btn btn-primary">Update</button>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="section-title">Restaurant Meta Data</h2>
        </div>
        <div className="card-content">
          <div className="meta-grid">
            <div className="meta-form-box">
              <div className="meta-tabs-box">
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
              </div>
              {activeTab === "default" && (
                <div className="meta-form">
                  <div className="form-group">
                    <label className="form-label">Meta Title (Default)</label>
                    <input
                      type="text"
                      value={metaTitle.default}
                      onChange={(e) =>
                        setMetaTitle({ ...metaTitle, default: e.target.value })
                      }
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">
                      Meta Description (Default)
                    </label>
                    <textarea
                      rows={4}
                      value={metaDescription.default}
                      onChange={(e) =>
                        setMetaDescription({
                          ...metaDescription,
                          default: e.target.value,
                        })
                      }
                      className="form-textarea"
                    />
                  </div>
                </div>
              )}
              {activeTab === "english" && (
                <div className="meta-form">
                  <div className="form-group">
                    <label className="form-label">Meta Title (English)</label>
                    <input
                      type="text"
                      value={metaTitle.english}
                      onChange={(e) =>
                        setMetaTitle({ ...metaTitle, english: e.target.value })
                      }
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">
                      Meta Description (English)
                    </label>
                    <textarea
                      rows={4}
                      value={metaDescription.english}
                      onChange={(e) =>
                        setMetaDescription({
                          ...metaDescription,
                          english: e.target.value,
                        })
                      }
                      className="form-textarea"
                    />
                  </div>
                </div>
              )}
              {activeTab === "bengali" && (
                <div className="meta-form">
                  <div className="form-group">
                    <label className="form-label">Meta Title (Bengali)</label>
                    <input
                      type="text"
                      value={metaTitle.bengali}
                      onChange={(e) =>
                        setMetaTitle({ ...metaTitle, bengali: e.target.value })
                      }
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">
                      Meta Description (Bengali)
                    </label>
                    <textarea
                      rows={4}
                      value={metaDescription.bengali}
                      onChange={(e) =>
                        setMetaDescription({
                          ...metaDescription,
                          bengali: e.target.value,
                        })
                      }
                      className="form-textarea"
                    />
                  </div>
                </div>
              )}
              {activeTab === "arabic" && (
                <div className="meta-form">
                  <div className="form-group">
                    <label className="form-label">Meta Title (Arabic)</label>
                    <input
                      type="text"
                      value={metaTitle.arabic}
                      onChange={(e) =>
                        setMetaTitle({ ...metaTitle, arabic: e.target.value })
                      }
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">
                      Meta Description (Arabic)
                    </label>
                    <textarea
                      rows={4}
                      value={metaDescription.arabic}
                      onChange={(e) =>
                        setMetaDescription({
                          ...metaDescription,
                          arabic: e.target.value,
                        })
                      }
                      className="form-textarea"
                    />
                  </div>
                </div>
              )}
              {activeTab === "spanish" && (
                <div className="meta-form">
                  <div className="form-group">
                    <label className="form-label">Meta Title (Spanish)</label>
                    <input
                      type="text"
                      value={metaTitle.spanish}
                      onChange={(e) =>
                        setMetaTitle({ ...metaTitle, spanish: e.target.value })
                      }
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">
                      Meta Description (Spanish)
                    </label>
                    <textarea
                      rows={4}
                      value={metaDescription.spanish}
                      onChange={(e) =>
                        setMetaDescription({
                          ...metaDescription,
                          spanish: e.target.value,
                        })
                      }
                      className="form-textarea"
                    />
                  </div>
                </div>
              )}
            </div>
            <div className="meta-image-box">
              <div className="meta-image">
                <h3 className="subsection-title">Restaurant Meta Image</h3>
                <p className="helper-text">Meta Image(1:1)</p>
                <div className="image-preview" onClick={handleImageClick}>
                  <img
                    src={selectedImage}
                    alt="Restaurant Meta Image"
                    style={{
                      width: "120px",
                      height: "120px",
                      objectFit: "cover",
                      cursor: "pointer",
                    }}
                  />
                </div>
                {showFileInput && (
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    style={{ display: "none" }}
                    accept="image/*"
                  />
                )}
              </div>
            </div>
          </div>
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
            {schedules.map((schedule) =>
              schedule.timeSlots.length > 0 ? (
                <div key={schedule.day} className="schedule-row">
                  <div className="day-label">{schedule.day} :</div>
                  <div className="time-slots">
                    {schedule.timeSlots.map((slot, slotIndex) => (
                      <div
                        key={`${schedule.day}-${slotIndex}`}
                        className="time-slot-row"
                      >
                        <TimeSelector
                          label="Opening Time"
                          value={slot.openingTime}
                          onChange={(value) =>
                            handleTimeChange(
                              schedule.day,
                              slotIndex,
                              "openingTime",
                              value
                            )
                          }
                        />
                        <TimeSelector
                          label="Closing Time"
                          value={slot.closingTime}
                          onChange={(value) =>
                            handleTimeChange(
                              schedule.day,
                              slotIndex,
                              "closingTime",
                              value
                            )
                          }
                        />
                        <button
                          className="icon-button delete"
                          onClick={() =>
                            handleOpenDeleteModal(schedule.day, slotIndex)
                          }
                        >
                          ×
                        </button>
                        {slotIndex === schedule.timeSlots.length - 1 && (
                          <button
                            className="icon-button add"
                            onClick={() => handleAddTimeSlot(schedule.day)}
                          >
                            +
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantSetup;

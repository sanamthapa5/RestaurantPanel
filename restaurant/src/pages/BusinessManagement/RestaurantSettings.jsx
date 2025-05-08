import React, { useState } from "react";
import "./RestaurantSettings.css";

const RestaurantSettings = () => {
  // State for toggle switches
  const [toggles, setToggles] = useState({
    temporarilyClosed: false,
    scheduledDelivery: true,
    homeDelivery: true,
    takeaway: true,
    veg: true,
    nonVeg: true,
    subscriptionBasedOrder: false,
    cutlery: true,
    instantOrder: true,
    halalTagStatus: false,
    extraPackagingCharge: true,
    dineIn: true,
    gst: false,
  });

  // State for packaging charge
  const [packagingCharge, setPackagingCharge] = useState({
    type: "optional",
    amount: 2,
  });

  // State for minimum amounts
  const [minimums, setMinimums] = useState({
    orderAmount: 0,
    dineInTime: 0,
  });

  // State for cuisine and tags
  const [cuisine, setCuisine] = useState(["Italian", "Spanish"]);
  const [restaurantTypes, setRestaurantTypes] = useState([
    "Bengali",
    "Indian",
    "Pizza",
    "Pasta",
    "Snacks",
  ]);
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");

  // State for meta data
  const [metaData, setMetaData] = useState({
    title: "Hungry Puppets Restaurant: Where Flavor and Fun Meet",
    description:
      "Satisfy your cravings and indulge in a culinary adventure at Hungry Puppets Restaurant. Our menu is a symphony of taste, offering a delightful fusion of flavors that excite both palate and imagination. Join us for a memorable dining experience.",
  });

  // State for schedule
  const [schedule, setSchedule] = useState({
    Monday: [
      { opening: "12:00 AM", closing: "04:00 AM" },
      { opening: "06:00 AM", closing: "11:59 PM" },
    ],
    Tuesday: [
      { opening: "12:00 AM", closing: "05:00 AM" },
      { opening: "06:00 AM", closing: "11:59 PM" },
    ],
    Wednesday: [{ opening: "06:17 AM", closing: "11:30 PM" }],
    Thursday: [
      { opening: "12:00 AM", closing: "04:00 AM" },
      { opening: "05:00 AM", closing: "06:00 AM" },
      { opening: "08:00 AM", closing: "11:59 PM" },
    ],
    Friday: [{ opening: "12:00 AM", closing: "11:59 PM" }],
    Saturday: [{ opening: "12:00 AM", closing: "11:59 PM" }],
    Sunday: [{ opening: "12:00 AM", closing: "11:59 PM" }],
  });

  // Toggle handler
  const handleToggle = (key) => {
    setToggles({
      ...toggles,
      [key]: !toggles[key],
    });
  };

  // Add tag handler
  const handleAddTag = (e) => {
    if (e.key === "Enter" && tagInput.trim()) {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  // Remove tag handler
  const handleRemoveTag = (tag) => {
    setTags(tags.filter((t) => t !== tag));
  };

  // Remove cuisine handler
  const handleRemoveCuisine = (item) => {
    setCuisine(cuisine.filter((c) => c !== item));
  };

  // Remove restaurant type handler
  const handleRemoveRestaurantType = (type) => {
    setRestaurantTypes(restaurantTypes.filter((t) => t !== type));
  };

  // Add time slot handler
  const handleAddTimeSlot = (day) => {
    setSchedule({
      ...schedule,
      [day]: [...schedule[day], { opening: "09:00 AM", closing: "05:00 PM" }],
    });
  };

  // Remove time slot handler
  const handleRemoveTimeSlot = (day, index) => {
    setSchedule({
      ...schedule,
      [day]: schedule[day].filter((_, i) => i !== index),
    });
  };

  return (
    <div className="restaurant-settings">
      <header className="settings-header">
        <div className="header-icon">🏪</div>
        <h1>Restaurant Setup</h1>
      </header>

      <section className="settings-section">
        <div className="section-header">
          <div className="toggle-container">
            <span className="toggle-icon">⚙️</span>
            <span>Close Restaurant Temporarily</span>
            <span className="info-icon">ⓘ</span>
          </div>
          <div className="toggle-switch">
            <input
              type="checkbox"
              id="temporarilyClosed"
              checked={toggles.temporarilyClosed}
              onChange={() => handleToggle("temporarilyClosed")}
            />
            <label htmlFor="temporarilyClosed"></label>
          </div>
        </div>
      </section>

      <section className="settings-section">
        <div className="section-header">
          <span className="section-icon">🍔</span>
          <h2>General Settings</h2>
        </div>

        <div className="settings-grid">
          <div className="setting-item">
            <div className="setting-label">
              <span>Scheduled Delivery:</span>
              <span className="info-icon">ⓘ</span>
            </div>
            <div className="toggle-switch">
              <input
                type="checkbox"
                id="scheduledDelivery"
                checked={toggles.scheduledDelivery}
                onChange={() => handleToggle("scheduledDelivery")}
              />
              <label htmlFor="scheduledDelivery"></label>
            </div>
          </div>

          <div className="setting-item">
            <div className="setting-label">
              <span>Home Delivery:</span>
              <span className="info-icon">ⓘ</span>
            </div>
            <div className="toggle-switch">
              <input
                type="checkbox"
                id="homeDelivery"
                checked={toggles.homeDelivery}
                onChange={() => handleToggle("homeDelivery")}
              />
              <label htmlFor="homeDelivery"></label>
            </div>
          </div>

          <div className="setting-item">
            <div className="setting-label">
              <span>Takeaway:</span>
              <span className="info-icon">ⓘ</span>
            </div>
            <div className="toggle-switch">
              <input
                type="checkbox"
                id="takeaway"
                checked={toggles.takeaway}
                onChange={() => handleToggle("takeaway")}
              />
              <label htmlFor="takeaway"></label>
            </div>
          </div>

          <div className="setting-item">
            <div className="setting-label">
              <span>Veg:</span>
              <span className="info-icon">ⓘ</span>
            </div>
            <div className="toggle-switch">
              <input
                type="checkbox"
                id="veg"
                checked={toggles.veg}
                onChange={() => handleToggle("veg")}
              />
              <label htmlFor="veg"></label>
            </div>
          </div>

          <div className="setting-item">
            <div className="setting-label">
              <span>Non Veg:</span>
              <span className="info-icon">ⓘ</span>
            </div>
            <div className="toggle-switch">
              <input
                type="checkbox"
                id="nonVeg"
                checked={toggles.nonVeg}
                onChange={() => handleToggle("nonVeg")}
              />
              <label htmlFor="nonVeg"></label>
            </div>
          </div>

          <div className="setting-item">
            <div className="setting-label">
              <span>Subscription Based Order:</span>
              <span className="info-icon">ⓘ</span>
            </div>
            <div className="toggle-switch">
              <input
                type="checkbox"
                id="subscriptionBasedOrder"
                checked={toggles.subscriptionBasedOrder}
                onChange={() => handleToggle("subscriptionBasedOrder")}
              />
              <label htmlFor="subscriptionBasedOrder"></label>
            </div>
          </div>

          <div className="setting-item">
            <div className="setting-label">
              <span>Cutlery:</span>
              <span className="info-icon">ⓘ</span>
            </div>
            <div className="toggle-switch">
              <input
                type="checkbox"
                id="cutlery"
                checked={toggles.cutlery}
                onChange={() => handleToggle("cutlery")}
              />
              <label htmlFor="cutlery"></label>
            </div>
          </div>

          <div className="setting-item">
            <div className="setting-label">
              <span>Instant Order:</span>
              <span className="info-icon">ⓘ</span>
            </div>
            <div className="toggle-switch">
              <input
                type="checkbox"
                id="instantOrder"
                checked={toggles.instantOrder}
                onChange={() => handleToggle("instantOrder")}
              />
              <label htmlFor="instantOrder"></label>
            </div>
          </div>

          <div className="setting-item">
            <div className="setting-label">
              <span>Halal Tag Status</span>
              <span className="info-icon">ⓘ</span>
            </div>
            <div className="toggle-switch">
              <input
                type="checkbox"
                id="halalTagStatus"
                checked={toggles.halalTagStatus}
                onChange={() => handleToggle("halalTagStatus")}
              />
              <label htmlFor="halalTagStatus"></label>
            </div>
          </div>

          <div className="setting-item">
            <div className="setting-label">
              <span>Extra Packaging Charge</span>
              <span className="info-icon">ⓘ</span>
            </div>
            <div className="toggle-switch">
              <input
                type="checkbox"
                id="extraPackagingCharge"
                checked={toggles.extraPackagingCharge}
                onChange={() => handleToggle("extraPackagingCharge")}
              />
              <label htmlFor="extraPackagingCharge"></label>
            </div>
          </div>

          <div className="setting-item">
            <div className="setting-label">
              <span>Dine-In</span>
              <span className="info-icon">ⓘ</span>
            </div>
            <div className="toggle-switch">
              <input
                type="checkbox"
                id="dineIn"
                checked={toggles.dineIn}
                onChange={() => handleToggle("dineIn")}
              />
              <label htmlFor="dineIn"></label>
            </div>
          </div>
        </div>
      </section>

      <section className="settings-section">
        <div className="section-header">
          <span className="section-icon">🔧</span>
          <h2>Basic Settings</h2>
        </div>

        <div className="setting-row">
          <div className="setting-label">
            <span>Extra Packaging Charge</span>
            <span className="info-icon">ⓘ</span>
          </div>
          <div className="radio-group">
            <label className="radio-label">
              <input
                type="radio"
                name="packagingChargeType"
                value="optional"
                checked={packagingCharge.type === "optional"}
                onChange={() =>
                  setPackagingCharge({ ...packagingCharge, type: "optional" })
                }
              />
              <span className="radio-text">Optional</span>
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="packagingChargeType"
                value="mandatory"
                checked={packagingCharge.type === "mandatory"}
                onChange={() =>
                  setPackagingCharge({ ...packagingCharge, type: "mandatory" })
                }
              />
              <span className="radio-text">Mandatory</span>
            </label>
          </div>
        </div>

        <div className="setting-row">
          <div className="setting-label">
            <span>Extra Packaging Charge Amount</span>
          </div>
          <div className="input-container">
            <input
              type="number"
              value={packagingCharge.amount}
              onChange={(e) =>
                setPackagingCharge({
                  ...packagingCharge,
                  amount: e.target.value,
                })
              }
            />
          </div>
        </div>

        <div className="setting-row">
          <div className="setting-label">
            <span>Minimum Order Amount</span>
            <span className="info-icon">ⓘ</span>
          </div>
          <div className="input-container">
            <input
              type="number"
              value={minimums.orderAmount}
              onChange={(e) =>
                setMinimums({ ...minimums, orderAmount: e.target.value })
              }
            />
          </div>
        </div>

        <div className="setting-row">
          <div className="setting-label">
            <span>Minimum Time For Dine-In Order</span>
            <span className="info-icon">ⓘ</span>
          </div>
          <div className="input-container time-input">
            <input
              type="number"
              value={minimums.dineInTime}
              onChange={(e) =>
                setMinimums({ ...minimums, dineInTime: e.target.value })
              }
            />
            <div className="time-dropdown">
              <span>Min</span>
              <span className="dropdown-arrow">▼</span>
            </div>
          </div>
        </div>

        <div className="setting-row">
          <div className="setting-label">
            <span>GST</span>
            <span className="info-icon">ⓘ</span>
          </div>
          <div className="toggle-switch">
            <input
              type="checkbox"
              id="gst"
              checked={toggles.gst}
              onChange={() => handleToggle("gst")}
            />
            <label htmlFor="gst"></label>
          </div>
        </div>

        <div className="setting-row">
          <div className="setting-label">
            <span>Cuisine</span>
            <span className="info-icon">ⓘ</span>
          </div>
          <div className="tags-container">
            <div className="tags-list">
              {cuisine.map((item, index) => (
                <div key={index} className="tag">
                  <span>{item}</span>
                  <button
                    className="tag-remove"
                    onClick={() => handleRemoveCuisine(item)}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
            <div className="dropdown-arrow">▼</div>
          </div>
        </div>

        <div className="setting-row">
          <div className="setting-label">
            <span>Tags</span>
          </div>
          <div className="input-container">
            <input
              type="text"
              placeholder="Enter tags"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={handleAddTag}
            />
          </div>
        </div>

        <div className="setting-row">
          <div className="setting-label">
            <span>Set Restaurant Characteristics</span>
          </div>
        </div>

        <div className="setting-row">
          <div className="setting-label secondary-label">
            <span>
              Select the Restaurant Type that Best Represents Your Establishment
            </span>
          </div>
        </div>

        <div className="restaurant-types">
          {restaurantTypes.map((type, index) => (
            <div key={index} className="restaurant-type">
              <span>{type}</span>
              <button
                className="tag-remove"
                onClick={() => handleRemoveRestaurantType(type)}
              >
                ×
              </button>
            </div>
          ))}
        </div>

        <div className="button-row">
          <button className="reset-button">Reset</button>
          <button className="update-button">Update</button>
        </div>
      </section>

      <section className="settings-section">
        <div className="section-header">
          <span className="section-icon">📝</span>
          <h2>Restaurant Meta Data</h2>
        </div>

        <div className="tabs-container">
          <div className="tab active">Default</div>
          <div className="tab">English(EN)</div>
          <div className="tab">Bengali - বাংলা(BN)</div>
          <div className="tab">Arabic - العربية(AR)</div>
        </div>

        <div className="setting-row">
          <div className="setting-label">
            <span>Meta Title (Default)</span>
          </div>
          <div className="input-container">
            <input
              type="text"
              value={metaData.title}
              onChange={(e) =>
                setMetaData({ ...metaData, title: e.target.value })
              }
            />
          </div>
        </div>

        <div className="setting-row">
          <div className="setting-label">
            <span>Meta Description (Default)</span>
          </div>
          <div className="input-container">
            <textarea
              value={metaData.description}
              onChange={(e) =>
                setMetaData({ ...metaData, description: e.target.value })
              }
              rows="4"
            ></textarea>
          </div>
        </div>

        <div className="meta-image-section">
          <div className="section-header">
            <span className="section-icon">🖼️</span>
            <h2>Restaurant Meta Image</h2>
          </div>

          <div className="meta-image-container">
            <div className="meta-image-label">
              <span>Meta image(1:1)</span>
            </div>
            <div className="meta-image">
              <div className="image-preview">
                <div className="hungry-puppets-logo">
                  <span className="hungry-text">Hungry</span>
                  <span className="puppets-text">PUPPETS</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="button-row">
          <button className="save-button">Save Changes</button>
        </div>
      </section>

      <section className="settings-section">
        <div className="section-header">
          <span className="section-icon">📅</span>
          <h2>Restaurant Opening & Closing Schedules</h2>
        </div>

        {Object.keys(schedule).map((day) => (
          <div key={day} className="schedule-row">
            <div className="day-label">{day} :</div>
            <div className="time-slots">
              {schedule[day].map((slot, index) => (
                <div key={index} className="time-slot-group">
                  <div className="time-slot">
                    <div className="time-label">
                      <span className="time-icon">🕒</span>
                      <span>Opening Time</span>
                    </div>
                    <div className="time-value">{slot.opening}</div>
                  </div>
                  <div className="time-slot">
                    <div className="time-label">
                      <span className="time-icon">🕒</span>
                      <span>Closing Time</span>
                    </div>
                    <div className="time-value">{slot.closing}</div>
                  </div>
                  <button
                    className="remove-slot"
                    onClick={() => handleRemoveTimeSlot(day, index)}
                  >
                    ⊗
                  </button>
                </div>
              ))}
              <button
                className="add-slot"
                onClick={() => handleAddTimeSlot(day)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default RestaurantSettings;

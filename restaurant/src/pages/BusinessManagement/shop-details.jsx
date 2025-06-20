import { useState } from "react";
import "./shop-details.css";
import { FaInfoCircle } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function ShopDetails() {
  const [announcementText, setAnnouncementText] = useState(
    "New Menu Delights: Prepare your palates for an exquisite journey with our revamped menu! We've introduced a mouthwatering array of kebabs, sides, and desserts crafted with the finest ingredients to satisfy every craving."
  );

  //   const handlePublish = () => {
  //     // You can handle saving or API call here
  //     console.log("Published Announcement:", announcementText);
  //     alert("Announcement published!");
  //   };

  return (
    <div className="ShopDetails-container">
      {/* Header */}
      <div className="ShopDetails-header">
        <div className="ShopDetails-header-content">
          <h1 className="ShopDetails-title">Shop Details</h1>
          <p className="ShopDetails-subtitle">
            Created at 20 may 2025 09:11 pm
          </p>
        </div>
      </div>

      {/* Cover Photo Section */}
      <div className="ShopDetails-cover-section">
        <img
          src="https://stackfood-admin.6amtech.com/storage/app/public/restaurant/cover/2024-12-22-6767deff54e19.png"
          alt="Restaurant Cover"
          className="ShopDetails-cover-image"
        />

        {/* Profile Section */}
        <div className="ShopDetails-profile-section">
          <div className="ShopDetails-profile-image-container">
            <img
              src="https://stackfood-admin.6amtech.com/storage/app/public/restaurant/2024-12-09-675699d44d427.png"
              alt="Restaurant Profile"
              className="ShopDetails-profile-image"
            />
          </div>
          <h2 className="ShopDetails-restaurant-name">Hungry Puppets</h2>
        </div>
      </div>

      {/* Details Grid */}
      <div className="ShopDetails-details-grid">
        <div className="ShopDetails-detail-item">
          <div className="ShopDetails-detail-icon ShopDetails-business-model">
            <span className="ShopDetails-icon-circle ShopDetails-green">$</span>
          </div>
          <div className="ShopDetails-detail-content">
            <h3>Business Model</h3>
            <p>Commission Base</p>
          </div>
        </div>

        <div className="ShopDetails-detail-item">
          <div className="ShopDetails-detail-icon ShopDetails-admin-commission">
            <span className="ShopDetails-icon-circle ShopDetails-orange">
              %
            </span>
          </div>
          <div className="ShopDetails-detail-content">
            <h3>Admin Commission</h3>
            <p>10 %</p>
          </div>
        </div>

        <div className="ShopDetails-detail-item">
          <div className="ShopDetails-detail-icon ShopDetails-vat-tax">
            <span className="ShopDetails-icon-circle ShopDetails-orange-light">
              📋
            </span>
          </div>
          <div className="ShopDetails-detail-content">
            <h3>VAT/TAX</h3>
            <p>5 %</p>
          </div>
        </div>

        <div className="ShopDetails-detail-item">
          <div className="ShopDetails-detail-icon ShopDetails-phone">
            <span className="ShopDetails-icon-circle ShopDetails-red">📞</span>
          </div>
          <div className="ShopDetails-detail-content">
            <h3>Phone</h3>
            <p>9824912200</p>
          </div>
        </div>

        <div className="ShopDetails-detail-item ">
          <div className="ShopDetails-detail-icon ShopDetails-address">
            {/* <span className="ShopDetails-icon-circle ShopDetails-blue">📍</span> */}
            <span className="ShopDetails-icon-circle ShopDetails-blue">
              <FontAwesomeIcon icon={faLocationDot} />
            </span>
          </div>
          <div className="ShopDetails-detail-content">
            <h3>Address</h3>
            <p>Sundarhaiancha-10,Morang</p>
          </div>
        </div>
      </div>

      {/* Announcement Section */}
      <div className="ShopDetails-announcement-section">
        <div className="ShopDetails-announcement-header">
          <div className="ShopDetails-announcement-title">
            <span className="ShopDetails-announcement-icon">📢</span>
            <span>Announcement</span>
            <span className="ShopDetails-info-icon">
              <FaInfoCircle />
            </span>
          </div>
          <div className="ShopDetails-toggle-switch">
            <input type="checkbox" id="announcement-toggle" defaultChecked />
            <label
              htmlFor="announcement-toggle"
              className="ShopDetails-switch"
            ></label>
          </div>
        </div>

        <div className="ShopDetails-announcement-content">
          <textarea
            className="announcement-textarea"
            value={announcementText}
            onChange={(e) => setAnnouncementText(e.target.value)}
            rows={5}
            placeholder="Enter announcement here..."
          />
          <button
            className="announcement-publish-btn"
            //   onClick={handlePublish}
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  );
}

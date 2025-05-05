"use client";

import { useState } from "react";
import "./BusinessPlan.css";
import { Store, Check } from "lucide-react";

const BusinessPlan = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="business-plan-container">
      <header className="headerplan">
        <div className="logo-container">
          <Store className="store-icon" />
          <h1>Hungry Puppets Business Plan</h1>
        </div>
      </header>

      <div className="content">
        <div className="sidebar">
          <div className="menu-item active">
            <span className="overview-icon">📊</span>
            <span>Overview</span>
          </div>
        </div>

        <div className="main-content">
          <div className="plan-card">
            <h2 className="plan-title">Commission Base Plan</h2>
            <div className="commission-rate">
              <span className="rate">10 %</span>
              <span className="rate-description">Commission per order</span>
            </div>
            <p className="plan-description">
              Restaurant will pay 10% Commission to <strong>StackFood</strong>{" "}
              From each order. You will get access of all the features and
              options in restaurant panel, app and interaction with user.
            </p>
            <button className="change-plan-btn" onClick={toggleModal}>
              Change Business Plan
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="plans-container">
              <div className="current-plan">
                <h3>Commission Base</h3>
                <div className="current-rate">10%</div>
                <p className="current-plan-description">
                  Restaurant will pay 10% Commission to StackFood From each
                  order. You will get access of all the features and options in
                  restaurant panel, app and interaction with user.
                </p>
                <button className="current-plan-btn">Current Plan</button>
              </div>

              <div className="plan-option">
                <h3>Pro</h3>
                <div className="plan-price">$ 1,199.00</div>
                <div className="plan-duration">365 Days</div>
                <ul className="features-list">
                  <li>
                    <Check className="check-icon" /> POS
                  </li>
                  <li>
                    <Check className="check-icon" /> Mobile app
                  </li>
                  <li>
                    <Check className="check-icon" /> Chatting options
                  </li>
                  <li>
                    <Check className="check-icon" /> Review section
                  </li>
                  <li>
                    <Check className="check-icon" /> Self delivery
                  </li>
                </ul>
                <button className="shift-plan-btn">Shift In This Plan</button>
              </div>

              <div className="plan-option">
                <h3>Standard</h3>
                <div className="plan-price">$ 799.00</div>
                <div className="plan-duration">180 Days</div>
                <ul className="features-list">
                  <li>
                    <Check className="check-icon" /> POS
                  </li>
                  <li>
                    <Check className="check-icon" /> Mobile app
                  </li>
                  <li>
                    <Check className="check-icon" /> Chatting options
                  </li>
                  <li>
                    <Check className="check-icon" /> Review section
                  </li>
                  <li>
                    <Check className="check-icon" /> Unlimited Orders
                  </li>
                </ul>
                <button className="shift-plan-btn">Shift In This Plan</button>
              </div>

              <div className="plan-option">
                <h3>Basic</h3>
                <div className="plan-price">$ 399.00</div>
                <div className="plan-duration">120 Days</div>
                <ul className="features-list">
                  <li>
                    <Check className="check-icon" /> POS
                  </li>
                  <li>
                    <Check className="check-icon" /> Mobile app
                  </li>
                  <li>
                    <Check className="check-icon" /> Review section
                  </li>
                  <li>
                    <Check className="check-icon" /> 400 Orders
                  </li>
                  <li>
                    <Check className="check-icon" /> 30 Uploads
                  </li>
                </ul>
                <button className="shift-plan-btn">Shift In This Plan</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BusinessPlan;

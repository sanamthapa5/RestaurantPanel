"use client";

import { useState } from "react";
import "./BusinessPlan.css";
import { Store, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BusinessPlan = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const currentPlan = {
    name: "Commission Base Plan",
    commissionRate: "10%",
    description:
      "Restaurant will pay 10% Commission to StackFood From each order. You will get access of all the features and options in restaurant panel, app and interaction with user.",
  };

  // const handleDetailsClick = () => {
  //   navigate("/business-plan/details", { state: { plan: currentPlan } });
  // };

  return (
    <div className="BusinessPlan-business-plan-container">
      <header className="BusinessPlan-header">
        <div className="BusinessPlan-logo-containerPlan">
          <Store className="BusinessPlan-store-icon" />
          <h1>Hungry Puppets Business Plan</h1>
        </div>
      </header>

      <div className="BusinessPlan-content">
        <div className="BusinessPlan-overview-section">
          <div className="BusinessPlan-overview-header">
            <span className="BusinessPlan-overview-icon">📊</span>
            <span>Overview</span>
          </div>

          <div className="BusinessPlan-plan-card">
            <h2 className="BusinessPlan-plan-title">{currentPlan.name}</h2>
            <div className="BusinessPlan-commission-rate">
              <span className="BusinessPlan-rate">
                {currentPlan.commissionRate}
              </span>
              <span className="BusinessPlan-rate-description">
                Commission per order
              </span>
            </div>
            <p className="BusinessPlan-plan-description">
              {currentPlan.description}
            </p>
            <div className="BusinessPlan-plan-buttons">
              <button
                className="BusinessPlan-change-plan-btn"
                onClick={toggleModal}
              >
                Change Business Plan
              </button>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="BusinessPlan-modal-overlay">
          <div className="BusinessPlan-modal-content">
            <div className="BusinessPlan-plans-container">
              <div className="BusinessPlan-current-plan">
                <h3>Commission Base</h3>
                <div className="BusinessPlan-current-rate">10%</div>
                <p className="BusinessPlan-current-plan-description">
                  Restaurant will pay 10% Commission to StackFood From each
                  order. You will get access of all the features and options in
                  restaurant panel, app and interaction with user.
                </p>
                <button className="BusinessPlan-current-plan-btn">
                  Current Plan
                </button>
              </div>

              <div className="BusinessPlan-plan-option">
                <h3>Pro</h3>
                <div className="BusinessPlan-plan-price">$ 1,199.00</div>
                <div className="BusinessPlan-plan-duration">365 Days</div>
                <ul className="BusinessPlan-features-list">
                  <li>
                    <Check className="BusinessPlan-check-icon" /> POS
                  </li>
                  <li>
                    <Check className="BusinessPlan-check-icon" /> Mobile app
                  </li>
                  <li>
                    <Check className="BusinessPlan-check-icon" /> Chatting
                    options
                  </li>
                  <li>
                    <Check className="BusinessPlan-check-icon" /> Review section
                  </li>
                  <li>
                    <Check className="BusinessPlan-check-icon" /> Self delivery
                  </li>
                </ul>
                <button className="BusinessPlan-shift-plan-btn">
                  Shift In This Plan
                </button>
              </div>

              <div className="BusinessPlan-plan-option">
                <h3>Standard</h3>
                <div className="BusinessPlan-plan-price">$ 799.00</div>
                <div className="BusinessPlan-plan-duration">180 Days</div>
                <ul className="BusinessPlan-features-list">
                  <li>
                    <Check className="BusinessPlan-check-icon" /> POS
                  </li>
                  <li>
                    <Check className="BusinessPlan-check-icon" /> Mobile app
                  </li>
                  <li>
                    <Check className="BusinessPlan-check-icon" /> Chatting
                    options
                  </li>
                  <li>
                    <Check className="BusinessPlan-check-icon" /> Review section
                  </li>
                  <li>
                    <Check className="BusinessPlan-check-icon" /> Unlimited
                    Orders
                  </li>
                </ul>
                <button className="BusinessPlan-shift-plan-btn">
                  Shift In This Plan
                </button>
              </div>

              <div className="BusinessPlan-plan-option">
                <h3>Basic</h3>
                <div className="BusinessPlan-plan-price">$ 399.00</div>
                <div className="BusinessPlan-plan-duration">120 Days</div>
                <ul className="BusinessPlan-features-list">
                  <li>
                    <Check className="BusinessPlan-check-icon" /> POS
                  </li>
                  <li>
                    <Check className="BusinessPlan-check-icon" /> Mobile app
                  </li>
                  <li>
                    <Check className="BusinessPlan-check-icon" /> Review section
                  </li>
                  <li>
                    <Check className="BusinessPlan-check-icon" /> 400 Orders
                  </li>
                  <li>
                    <Check className="BusinessPlan-check-icon" /> 30 Uploads
                  </li>
                </ul>
                <button className="BusinessPlan-shift-plan-btn">
                  Shift In This Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BusinessPlan;

"use client";

import { useState } from "react";
import "./BusinessPlan.css";
import { Store, Check, X } from "lucide-react";

const BusinessPlan = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const currentPlan = {
    name: "Commission Base Plan",
    commissionRate: "10%",
    description:
      "Restaurant will pay 10% Commission to StackFood From each order. You will get access of all the features and options in restaurant panel, app and interaction with user.",
  };

  const otherPlans = [
    {
      name: "Pro",
      price: "$1,199.00",
      duration: "365 Days",
      features: [
        "POS",
        "Mobile app",
        "Chatting options",
        "Review section",
        "Self delivery",
      ],
    },
    {
      name: "Standard",
      price: "$799.00",
      duration: "180 Days",
      features: [
        "POS",
        "Mobile app",
        "Chatting options",
        "Review section",
        "Unlimited Orders",
      ],
    },
    {
      name: "Basic",
      price: "$399.00",
      duration: "120 Days",
      features: [
        "POS",
        "Mobile app",
        "Review section",
        "400 Orders",
        "30 Uploads",
      ],
    },
  ];

  return (
    <div className="BusinessPlan-withdraw-container">
      <div className="BusinessPlan-withdraw-header">
        <div className="BusinessPlan-withdraw-title">
          <span className="BusinessPlan-icon-person">
            <Store />
          </span>
          <h1>Business Plan Setup</h1>
        </div>
      </div>
      <div className="BusinessPlan-withdraw-box">
        <div className="BusinessPlan-withdraw-content">
          <div className="BusinessPlan-withdraw-methods-header">
            <div className="BusinessPlan-methods-title">
              <h2>Business Plans</h2>
            </div>
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
            {/* <div className="BusinessPlan-plan-buttons"> */}
            <button
              className="BusinessPlan-change-plan-btn"
              onClick={toggleModal}
            >
              Change Business Plan
            </button>
            {/* </div> */}
          </div>
        </div>
      </div>

      {showModal && (
        <div className="BusinessPlan-modal-overlay">
          <div className="BusinessPlan-modal-content">
            <button
              className="BusinessPlan-modal-close-btn"
              onClick={toggleModal}
            >
              <X />
            </button>
            <div className="BusinessPlan-modal-header-text">
              <h2>Choose a Business</h2>

              <p>Choose a Business plan to get better experience!</p>
            </div>
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

              {otherPlans.map((plan, index) => (
                <div key={index} className="BusinessPlan-plan-option">
                  <h3>{plan.name}</h3>
                  <div className="BusinessPlan-plan-price">{plan.price}</div>
                  <div className="BusinessPlan-plan-duration">
                    {plan.duration}
                  </div>
                  <ul className="BusinessPlan-features-list">
                    {plan.features.map((feature, idx) => (
                      <li key={idx}>
                        <Check className="BusinessPlan-check-icon" /> {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="BusinessPlan-shift-plan-btn">
                    Shift In This Plan
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BusinessPlan;

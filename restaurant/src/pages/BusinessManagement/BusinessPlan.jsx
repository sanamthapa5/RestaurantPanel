"use client";

import { useState } from "react";
import "./BusinessPlan.css";
import { Store, Check, X } from "lucide-react";
import esewa from "../../../src/assets/esewa.png";
import Khalti from "../../../src/assets/Khalti.png";
import ConnectIps from "../../../src/assets/ConnectIps.png";

const BusinessPlan = () => {
  const [showModal, setShowModal] = useState(false);
  const [showShiftModal, setShowShiftModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleShiftClick = (plan) => {
    setSelectedPlan(plan);
    setShowModal(false);
    setShowShiftModal(true);
  };

  const toggleShiftModal = () => {
    setShowShiftModal(!showShiftModal);
    if (!showShiftModal) setSelectedPlan(null); // Reset selected plan when closing
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
            <img
              src="https://stackfood-admin.6amtech.com/public/assets/admin/img/store.png"
              alt=""
            />
          </span>
          <h1>Business Plan Setup</h1>
        </div>
      </div>
      <div className="BusinessPlan-withdraw-box">
        <div className="BusinessPlan-withdraw-content">
          <div className="BusinessPlan-withdraw-methods-header">
            <div className="BusinessPlan-methods-title">
              <img
                src="https://stackfood-admin.6amtech.com/public/assets/admin/img/subscription-plan/subscribed-user.png"
                alt="Overview Icon"
                style={{ height: "24px", marginRight: "10px" }}
              />
              <h2>Overview</h2>
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
            <button
              className="BusinessPlan-change-plan-btn"
              onClick={toggleModal}
            >
              Change Business Plan
            </button>
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
              <h2>
                <strong>Choose a Business</strong>
              </h2>
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
                  <button
                    className="BusinessPlan-shift-plan-btn"
                    onClick={() => handleShiftClick(plan)}
                  >
                    Shift In This Plan
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {showShiftModal && selectedPlan && (
        <div className="BusinessPlan-modal-overlay">
          <div className="BusinessPlan-modal-dialog">
            <div className="BusinessPlan-modal-header">
              <h2>Shift to New Subscription Plan</h2>
              <button
                className="BusinessPlan-close-button"
                onClick={toggleShiftModal}
              >
                <X />
              </button>
            </div>

            <div className="BusinessPlan-plan-comparison">
              <div className="BusinessPlan-current-plan-box">
                <h3>Commission</h3>
                <div className="BusinessPlan-plan-percentage">10%</div>
              </div>

              <div className="BusinessPlan-conversion-icon">
                <div className="BusinessPlan-circle-arrow">
                  <div className="BusinessPlan-arrow-green"></div>
                  <div className="BusinessPlan-arrow-red"></div>
                </div>
              </div>

              <div className="BusinessPlan-new-plan-box">
                <h3>{selectedPlan.name}</h3>
                <div className="BusinessPlan-plan-price-large">
                  {selectedPlan.price}
                </div>
                <div className="BusinessPlan-plan-duration">
                  {selectedPlan.duration}
                </div>
              </div>
            </div>

            <div className="BusinessPlan-plan-details">
              <div className="BusinessPlan-detail-section">
                <h4>Validity</h4>
                <p>{selectedPlan.duration}</p>
              </div>
              <div className="BusinessPlan-detail-section">
                <h4>Price</h4>
                <p>{selectedPlan.price}</p>
              </div>
              <div className="BusinessPlan-detail-section">
                <h4>Bill status</h4>
                <p>Migrate to new plan</p>
              </div>
            </div>

            <div className="BusinessPlan-payment-section">
              <h3>
                Pay Via Online <span>(Faster & secure way to pay bill)</span>
              </h3>

              <div className="BusinessPlan-payment-options">
                <div className="BusinessPlan-payment-option">
                  <input type="radio" id="wallet" name="payment" />
                  <label htmlFor="wallet">Wallet</label>
                  <span className="BusinessPlan-payment-amount">$1,634.00</span>
                </div>

                <div className="BusinessPlan-payment-option">
                  <input type="radio" id="paypal" name="payment" />
                  <label htmlFor="paypal">Paypal</label>
                  <img
                    // src="/placeholder.svg?height=20&width=50"
                    src="https://stackfood-admin.6amtech.com/storage/app/public/payment_modules/gateway_image/2023-09-07-64f9aece2abf6.png"
                    alt="Paypal"
                    className="BusinessPlan-payment-logo"
                  />
                </div>

                {/* <div className="BusinessPlan-payment-option">
                  <input type="radio" id="stripe" name="payment" />
                  <label htmlFor="stripe">Stripe</label>
                  <img
                    src="/placeholder.svg?height=20&width=50"
                    alt="Stripe"
                    className="BusinessPlan-payment-logo"
                  />
                </div> */}
                <div className="BusinessPlan-payment-option">
                  <input type="radio" id="esewa" name="payment" />
                  <label htmlFor="esewa">E-Sewa</label>
                  <img
                    src={esewa}
                    alt="Esewa"
                    className="BusinessPlan-payment-logo"
                    style={{ height: "48px", width: "auto" }}
                  />
                </div>
                <div className="BusinessPlan-payment-option">
                  <input type="radio" id="khalti" name="payment" />
                  <label htmlFor="esewa">Khalti</label>
                  <img
                    src={Khalti}
                    alt="Khalti"
                    className="BusinessPlan-payment-logo"
                    style={{ height: "70px", width: "auto" }}
                  />
                </div>
                <div className="BusinessPlan-payment-option">
                  <input type="radio" id="ConnectIps" name="payment" />
                  <label htmlFor="esewa">ConnectIps</label>
                  <img
                    src={ConnectIps}
                    alt="ConnectIps"
                    className="BusinessPlan-payment-logo"
                    style={{ height: "70px", width: "auto" }}
                  />
                </div>

                {/* <div className="BusinessPlan-payment-option">
                  <input type="radio" id="razorpay" name="payment" />
                  <label htmlFor="razorpay">Razor pay</label>
                  <img
                    src="/placeholder.svg?height=20&width=50"
                    alt="Razor pay"
                    className="BusinessPlan-payment-logo"
                  />
                </div> */}

                {/* <div className="BusinessPlan-payment-option">
                  <input type="radio" id="sslcommerz" name="payment" />
                  <label htmlFor="sslcommerz">Ssl commerz</label>
                  <img
                    src="/placeholder.svg?height=20&width=50"
                    alt="Ssl commerz"
                    className="BusinessPlan-payment-logo"
                  />
                </div> */}
              </div>
            </div>

            <div className="BusinessPlan-modal-footer">
              <button
                className="BusinessPlan-cancel-btn"
                onClick={toggleShiftModal}
              >
                Cancel
              </button>
              <button className="BusinessPlan-change-plan-btn">
                Change Plan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BusinessPlan;

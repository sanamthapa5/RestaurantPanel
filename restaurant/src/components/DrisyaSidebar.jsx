import React from "react";
import { ListGroup, Form } from "react-bootstrap";
import { FaHome, FaClipboardList, FaConciergeBell, FaWarehouse, FaUtensils, FaTag } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar py-3">
      <img src=" https://stackfood-admin.6amtech.com/storage/app/public/business/2022-04-17-625c012c3c07d.png" alt="StackFood" className="mb-2 px-4" width="300" />

      {/* Search Bar */}
      <Form className="mb-3 py-2">
        <Form.Group controlId="searchBar">
          <Form.Control
            type="text"
            placeholder="Search for menu items..."
            className="rounded-pill"
          />
        </Form.Group>
      </Form>

      <ListGroup variant="flush">
        {/* Order Management */}
        <h5 className="py-2 fs-6 px-3 fw-bold text-uppercase">Order Management</h5>
        <ListGroup.Item action>
          <FaClipboardList className="me-2" /> Orders
        </ListGroup.Item>
        <ListGroup.Item action>
          <FaConciergeBell className="me-2" /> Subscription Orders
        </ListGroup.Item>
        <ListGroup.Item action>
          <FaWarehouse className="me-2" /> Dispatch Management
        </ListGroup.Item>
        <ListGroup.Item action>
          <FaTag className="me-2" /> Order Refunds
        </ListGroup.Item>

        {/* Restaurant Management */}
        <h5 className="py-2 fs-6 px-3 fw-bold text-uppercase">Restaurant Management</h5>
        <ListGroup.Item action>
          <FaUtensils className="me-2" /> Zone Setup
        </ListGroup.Item>
        <ListGroup.Item action>
          <FaUtensils className="me-2" /> Cuisine
        </ListGroup.Item>
        <ListGroup.Item action>
          <FaUtensils className="me-2" /> Restaurants
        </ListGroup.Item>

        {/* Food Management */}
        <h5 className="py-2 fs-6 px-3 fw-bold text-uppercase">Food Management</h5>
        <ListGroup.Item action>
          <FaUtensils className="me-2" /> Categories
        </ListGroup.Item>
        <ListGroup.Item action>
          <FaUtensils className="me-2" /> Addons
        </ListGroup.Item>
        <ListGroup.Item action>
          <FaUtensils className="me-2" /> Foods
        </ListGroup.Item>

        {/* Promotions Management */}
        <h5 className="py-2 fs-6 px-3 fw-bold text-uppercase">Promotions Management</h5>
        <ListGroup.Item action>
          <FaTag className="me-2" /> Campaigns
        </ListGroup.Item>
        <ListGroup.Item action>
          <FaTag className="me-2" /> Coupons
        </ListGroup.Item>
        <ListGroup.Item action>
          <FaTag className="me-2" /> Cashback
        </ListGroup.Item>
        <ListGroup.Item action>
          <FaTag className="me-2" /> Banners
        </ListGroup.Item>
        <ListGroup.Item action>
          <FaTag className="me-2" /> Promotional Banner
        </ListGroup.Item>
        <ListGroup.Item action>
          <FaTag className="me-2" /> Advertisement
        </ListGroup.Item>
        <ListGroup.Item action>
          <FaConciergeBell className="me-2" /> Push Notifications
        </ListGroup.Item>
       

        {/* Help & Support */}
        <h5 className="py-2 fs-6 px-3 fw-bold text-uppercase">Help & Support</h5>
        <ListGroup.Item action>
          <FaUtensils className="me-2" /> Chattings
        </ListGroup.Item>
        <ListGroup.Item action>
          <FaUtensils className="me-2" /> Contact Messages
        </ListGroup.Item>
          </ListGroup>
    </div>
  );
};

export default Sidebar;

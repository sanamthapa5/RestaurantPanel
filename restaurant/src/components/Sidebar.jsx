import React from "react";
import { ListGroup, Form } from "react-bootstrap";
import { FaClipboardList, FaConciergeBell, FaWarehouse, FaUtensils, FaTag } from "react-icons/fa";
import "./Sidebar.css"; // Import the CSS file
import  Dashboard from "./Dashboard";

const Sidebar = () => {
  return (

    <div className="main-container">
      
     <div className="sidebar py-3">
       <div className="logodiv"><img
        src="https://stackfood-admin.6amtech.com/storage/app/public/business/2022-04-17-625c012c3c07d.png"
        alt="StackFood"
        className="logo"
        />
        </div>
      {/* Search Bar */}
      <Form className="search-form">
        <Form.Group controlId="searchBar">
          <Form.Control type="text" placeholder="Search for menu items..." className="rounded-pill" />
        </Form.Group>
      </Form>

      <ListGroup variant="flush">

      <ListGroup.Item action>
          <FaClipboardList className="icon" /> Dashboard
        </ListGroup.Item>
        <ListGroup.Item action>
          <FaConciergeBell className="icon" /> POS
        </ListGroup.Item>
        {/* Order Management */}
        <h5 className="section-title">Order Management</h5>
        <ListGroup.Item action>
          <FaClipboardList className="icon" /> Orders
        </ListGroup.Item>
        <ListGroup.Item action>
          <FaConciergeBell className="icon" /> Subscription Orders
        </ListGroup.Item>
        <ListGroup.Item action>
          <FaWarehouse className="icon" /> Dispatch Management
        </ListGroup.Item>
        <ListGroup.Item action>
          <FaTag className="icon" /> Order Refunds
        </ListGroup.Item>

        {/* Restaurant Management */}
        <h5 className="section-title">Restaurant Management</h5>
        <ListGroup.Item action>
          <FaUtensils className="icon" /> Zone Setup
        </ListGroup.Item>
        <ListGroup.Item action>
          <FaUtensils className="icon" /> Cuisine
        </ListGroup.Item>
        <ListGroup.Item action>
          <FaUtensils className="icon" /> Restaurants
        </ListGroup.Item>

        {/* Food Management */}
        <h5 className="section-title">Food Management</h5>
        <ListGroup.Item action>
          <FaUtensils className="icon" /> Categories
        </ListGroup.Item>
        <ListGroup.Item action>
          <FaUtensils className="icon" /> Addons
        </ListGroup.Item>
        <ListGroup.Item action>
          <FaUtensils className="icon" /> Foods
        </ListGroup.Item>

        {/* Promotions Management */}
        <h5 className="section-title">Promotions Management</h5>
        <ListGroup.Item action>
          <FaTag className="icon" /> Campaigns
        </ListGroup.Item>
        <ListGroup.Item action>
          <FaTag className="icon" /> Coupons
        </ListGroup.Item>
        <ListGroup.Item action>
          <FaTag className="icon" /> Cashback
        </ListGroup.Item>
        <ListGroup.Item action>
          <FaTag className="icon" /> Banners
        </ListGroup.Item>
        <ListGroup.Item action>
          <FaTag className="icon" /> Promotional Banner
        </ListGroup.Item>
        <ListGroup.Item action>
          <FaTag className="icon" /> Advertisement
        </ListGroup.Item>
        <ListGroup.Item action>
          <FaConciergeBell className="icon" /> Push Notifications
        </ListGroup.Item>

        {/* Help & Support */}
        <h5 className="section-title">Help & Support</h5>
        <ListGroup.Item action>
          <FaUtensils className="icon" /> Chattings
        </ListGroup.Item>
        <ListGroup.Item action>
          <FaUtensils className="icon" /> Contact Messages
        </ListGroup.Item>
      </ListGroup>
      
     </div>
     {/* <section className="home">  
     <div className="content">
        <Dashboard/>
      </div>
      </section> */}
      {/* <Dashboard/> */}
    </div>
  );
};

export default Sidebar;




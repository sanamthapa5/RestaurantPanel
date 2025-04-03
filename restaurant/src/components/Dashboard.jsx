import React from 'react';
import { 
  ChefHat, 
  Package, 
  Bike, 
  CheckCircle,
  RefreshCcw,
  Calendar,
  Settings,
  Utensils
} from 'lucide-react';

import YearlyStats from './YearlyStats';
import Navbar from './Navbar';
import FoodDashboard from './food-dashboard';
// import Sidebar from './Sidebar';


import './Dashboard.css';
function Dashboard() {


  function StatCard({ count, label, icon: Icon, className }) {
    return (
      <div className={`stat-card ${className}`}>
        <div className="stat-count">{count}</div>
        <div className="stat-label">
          <Icon size={20} />
          <span>{label}</span>
        </div>
      </div>
    );
  }

  function OrderSummary({ icon: Icon, label, count }) {
    return (
      <div className="order-summary">
        <div className="summary-left">
          <Icon size={24} />
          <span>{label}</span>
        </div>
        <span className="summary-count">{count}</span>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <Navbar/>
       {/* <Sidebar/> */}
      <div className="container">
        {/* Order Statistics Section */}
        <section className="stats-section">
          <div className="section-header">
            <h2>Order Statistics</h2>
            <select className="stats-select">
              <option>Overall Statistics</option>
              <option>Today</option>
              <option>This Week</option>
              <option>This Month</option>
            </select>
          </div>

          <div className="stats-grid">
            <StatCard 
              count={1} 
              label="Confirmed" 
              icon={CheckCircle} 
              className="confirmed"
            />
            <StatCard 
              count={0} 
              label="Cooking" 
              icon={ChefHat} 
              className="cooking"
            />
            <StatCard 
              count={1} 
              label="Ready for delivery" 
              icon={Package} 
              className="ready"
            />
            <StatCard 
              count={1} 
              label="Food on the way" 
              icon={Bike} 
              className="delivering"
            />
          </div>
        </section>

        {/* Order Summary Section */}
        <div className="summary-grid">
          <OrderSummary icon={Package} label="Delivered" count={23} />
          <OrderSummary icon={RefreshCcw} label="Refunded" count={0} />
          <OrderSummary icon={Calendar} label="Scheduled" count={1} />
          <OrderSummary icon={Package} label="All" count={68} />
        </div>

        {/* Promotional Banner */}
        <div className="promo-banner">
          <div className="promo-content">
            <h3>Want to get highlighted?</h3>
            <p>Create ads to get highlighted on the app and web browser</p>
          </div>
          <button className="create-ads-button">
            Create Ads
          </button>
        </div>
      </div>

     <YearlyStats/>
     <FoodDashboard/>
    </div>
  );
}

export default Dashboard;

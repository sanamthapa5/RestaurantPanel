
// import React from 'react';
// import PropTypes from 'prop-types';
// import { 
//   ChefHat, 
//   Package, 
//   Bike, 
//   CheckCircle,
//   RefreshCcw,
//   Calendar,
//   Settings,
//   Utensils
// } from 'lucide-react';

// function StatCard({ count, label, icon: Icon, bgColor }) {
//   return (
//     <div className={`${bgColor} rounded-lg p-6 flex flex-col items-center shadow-sm`}>
//       <div className="text-4xl font-bold mb-2">{count}</div>
//       <div className="flex items-center gap-2">
//         <Icon size={20} />
//         <span className="text-gray-700">{label}</span>
//       </div>
//     </div>
//   );
// }

// StatCard.propTypes = {
//   count: PropTypes.number.isRequired,
//   label: PropTypes.string.isRequired,
//   icon: PropTypes.elementType.isRequired,
//   bgColor: PropTypes.string.isRequired,
// };

// function OrderSummary({ icon: Icon, label, count }) {
//   return (
//     <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
//       <div className="flex items-center gap-3">
//         <Icon size={24} className="text-gray-600" />
//         <span className="text-gray-700">{label}</span>
//       </div>
//       <span className="text-xl font-semibold text-orange-500">{count}</span>
//     </div>
//   );
// }

// OrderSummary.propTypes = {
//   icon: PropTypes.elementType.isRequired,
//   label: PropTypes.string.isRequired,
//   count: PropTypes.number.isRequired,
// };

// function App() {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="p-6">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-8">
//           <div className="flex items-center gap-2">
//             <Utensils className="h-8 w-8" />
//             <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
//           </div>
//           <div className="flex items-center gap-4">
//             <button className="text-gray-600 hover:text-gray-800">
//               <Settings className="h-6 w-6" />
//             </button>
//           </div>
//         </div>

//         {/* Order Statistics Section */}
//         <div className="mb-8">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-xl font-semibold text-gray-700">Order Statistics</h2>
//             <select className="bg-white border border-gray-300 rounded-md px-3 py-1">
//               <option>Overall Statistics</option>
//               <option>Today</option>
//               <option>This Week</option>
//               <option>This Month</option>
//             </select>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//             <StatCard count={1} label="Confirmed" icon={CheckCircle} bgColor="bg-green-50" />
//             <StatCard count={0} label="Cooking" icon={ChefHat} bgColor="bg-red-50" />
//             <StatCard count={1} label="Ready for delivery" icon={Package} bgColor="bg-orange-50" />
//             <StatCard count={1} label="Food on the way" icon={Bike} bgColor="bg-blue-50" />
//           </div>
//         </div>

//         {/* Order Summary Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//           <OrderSummary icon={Package} label="Delivered" count={23} />
//           <OrderSummary icon={RefreshCcw} label="Refunded" count={0} />
//           <OrderSummary icon={Calendar} label="Scheduled" count={1} />
//           <OrderSummary icon={Package} label="All" count={68} />
//         </div>

//         {/* Promotional Banner */}
//         <div className="mt-8 bg-indigo-50 rounded-lg p-6 flex items-center justify-between">
//           <div>
//             <h3 className="text-xl font-semibold text-gray-800 mb-2">Want to get highlighted?</h3>
//             <p className="text-gray-600">Create ads to get highlighted on the app and web browser</p>
//           </div>
//           <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
//             Create Ads
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


// import React from "react";
// import PropTypes from "prop-types";
// import { 
//   ChefHat, 
//   Package, 
//   Bike, 
//   CheckCircle,
//   RefreshCcw,
//   Calendar,
//   Settings,
//   Utensils
// } from "lucide-react";
// import "./Dashboard.css"; 

// function StatCard({ count, label, icon: Icon, bgColor }) {
//   return (
//     <div className={`stat-card ${bgColor}`}>
//       <div className="count">{count}</div>
//       <div className="icon-label">
//         <Icon size={20} />
//         <span>{label}</span>
//       </div>
//     </div>
//   );
// }

// StatCard.propTypes = {
//   count: PropTypes.number.isRequired,
//   label: PropTypes.string.isRequired,
//   icon: PropTypes.elementType.isRequired,
//   bgColor: PropTypes.string.isRequired,
// };

// function OrderSummary({ icon: Icon, label, count }) {
//   return (
//     <div className="order-summary">
//       <div className="order-label">
//         <Icon size={24} className="icon" />
//         <span>{label}</span>
//       </div>
//       <span className="order-count">{count}</span>
//     </div>
//   );
// }

// OrderSummary.propTypes = {
//   icon: PropTypes.elementType.isRequired,
//   label: PropTypes.string.isRequired,
//   count: PropTypes.number.isRequired,
// };

// function Dashboard() {
//   return (
//     <div className="dashboard">
//       <div className="header">
//         <div className="title">
//           <Utensils className="title-icon" />
//           <h1>Dashboard</h1>
//         </div>
//         <button className="settings-button">
//           <Settings className="settings-icon" />
//         </button>
//       </div>

//       <div className="order-stats">
//         <div className="order-header">
//           <h2>Order Statistics</h2>
//           <select className="order-select">
//             <option>Overall Statistics</option>
//             <option>Today</option>
//             <option>This Week</option>
//             <option>This Month</option>
//           </select>
//         </div>

//         <div className="stat-grid">
//           <StatCard count={1} label="Confirmed" icon={CheckCircle} bgColor="green-bg" />
//           <StatCard count={0} label="Cooking" icon={ChefHat} bgColor="red-bg" />
//           <StatCard count={1} label="Ready for delivery" icon={Package} bgColor="orange-bg" />
//           <StatCard count={1} label="Food on the way" icon={Bike} bgColor="blue-bg" />
//         </div>
//       </div>

//       <div className="order-summary-grid">
//         <OrderSummary icon={Package} label="Delivered" count={23} />
//         <OrderSummary icon={RefreshCcw} label="Refunded" count={0} />
//         <OrderSummary icon={Calendar} label="Scheduled" count={1} />
//         <OrderSummary icon={Package} label="All" count={68} />
//       </div>

//       <div className="promo-banner">
//         <div className="promo-text">
//           <h3>Want to get highlighted?</h3>
//           <p>Create ads to get highlighted on the app and web browser</p>
//         </div>
//         <button className="promo-button">Create Ads</button>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;


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
import './Dashboard.css';

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

function App() {
  return (
    <div className="dashboard">
      <div className="container">
        {/* Header */}
        {/* <header className="header">
          <div className="logo">
            <Utensils className="logo-icon" />
            <h1>Dashboard</h1>
          </div>
          <div className="header-actions">
            <button className="icon-button">
              <Settings />
            </button>
          </div>
        </header> */}

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
    </div>
  );
}

export default App;
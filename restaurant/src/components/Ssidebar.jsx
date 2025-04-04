// import React from "react";
// import { Link } from "react-router-dom";
// import "./Ssidebar.css";

// const Ssidebar = () => {
//   return (
//     <div className="sidebar">
//       <div className="sidebar-header">
//         <h3>Hungry Puppets</h3>
//       </div>
      
//       <div className="sidebar-menu-scrollable">
//         {/* 1st Screenshot (120959.png) */}
//         <div className="menu-section">
//           <h4>DASHBOARD</h4>
//           <ul>
//             <li><Link to="#">Pos</Link></li>
//           </ul>
//         </div>

//         <div className="menu-section">
//           <h4>PROMOTIONS</h4>
//           <ul>
//             <li><Link to="#">Campaign</Link></li>
//             <li><Link to="#">Coupons</Link></li>
//           </ul>
//         </div>

//         <div className="menu-section">
//           <h4>ADVERTISEMENT MANAGEMENT</h4>
//           <ul>
//             <li><Link to="#">New Advertisement</Link></li>
//             <li><Link to="#">Advertisement List</Link></li>
//           </ul>
//         </div>

//         <div className="menu-section">
//           <h4>ORDER MANAGEMENT</h4>
//           <ul>
//             <li><Link to="#">Orders</Link></li>
//             <li><Link to="#">Order Subscription</Link></li>
//           </ul>
//         </div>

//         <div className="menu-section">
//           <h4>FOOD MANAGEMENT</h4>
//           <ul>
//             <li><Link to="#">Categories</Link></li>
//             <li><Link to="#">Foods</Link></li>
//           </ul>
//         </div>

//         {/* 2nd Screenshot (121011.png) - Additional Food Management items */}
//         <div className="menu-section">
//           <h4>FOOD MANAGEMENT</h4>
//           <ul>
//             <li><Link to="#">Addons</Link></li>
//           </ul>
//         </div>

//         <div className="menu-section">
//           <h4>BUSINESS MANAGEMENT</h4>
//           <ul>
//             <li><Link to="#">Restaurant Config</Link></li>
//             <li><Link to="#">Notification Setup</Link></li>
//             <li><Link to="#">My Shop</Link></li>
//             <li><Link to="#">My QR Code</Link></li>
//             <li><Link to="#">My Business Plan</Link></li>
//             <li><Link to="#">My Wallet</Link></li>
//             <li><Link to="#">Wallet Method</Link></li>
//             <li><Link to="#">Reviews</Link></li>
//             <li><Link to="#">Chat</Link></li>
//           </ul>
//         </div>

//         {/* 3rd Screenshot (121038.png) */}
//         <div className="menu-section">
//           <h4>REPORT SECTION</h4>
//           <ul>
//             <li><Link to="#">Expense Report</Link></li>
//             <li><Link to="#">Transaction Report</Link></li>
//             <li><Link to="#">Disbursement Report</Link></li>
//             <li><Link to="#">Order Report</Link></li>
//             <li><Link to="#">Food Report</Link></li>
//           </ul>
//         </div>

//         <div className="menu-section">
//           <h4>EMPLOYEE SECTION</h4>
//           <ul>
//             <li><Link to="#">Employee Role</Link></li>
//             <li><Link to="#">Employees</Link></li>
//           </ul>
//         </div>

//         <div className="menu-section">
//           <h4>ADVERTISEMENT</h4>
//           <ul>
//             <li><Link to="#">Want To Get Highlighted?</Link></li>
//             <li><Link to="#">Create Ads</Link></li>
//           </ul>
//         </div>
        
//       </div>
      
//     </div>
//   );
// };

// export default Ssidebar;
import React from "react";
import { Link } from "react-router-dom";
import { FaClipboardList,FaHome,FaShoppingBag, FaBullhorn, FaUtensils,  FaConciergeBell, FaWarehouse,FaShoppingCart, FaFileInvoice, FaUserTie, FaAd } from "react-icons/fa";
import "./Ssidebar.css";

const Ssidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>Hungry Puppets</h3>
      </div>
      
      <div className="sidebar-menu-scrollable">
        <div className="menu-section">
          
          <ul>
            <li><Link to="#"><FaHome className="icon" /> Dashboard</Link></li>
            <li><Link to="#"><FaShoppingBag className="icon" /> POS</Link></li>
          </ul>
        </div>

        <div className="menu-section">
          <h4>PROMOTIONS</h4>
          <ul>
            <li><Link to="#"><FaBullhorn className="icon" /> Campaign</Link></li>
            <li><Link to="#"><FaBullhorn className="icon" /> Coupons</Link></li>
          </ul>
        </div>

        <div className="menu-section">
          <h4>ADVERTISEMENT MANAGEMENT</h4>
          <ul>
            <li><Link to="#"><FaAd className="icon" /> New Advertisement</Link></li>
            <li><Link to="#"><FaAd className="icon" /> Advertisement List</Link></li>
          </ul>
        </div>

        <div className="menu-section">
          <h4>ORDER MANAGEMENT</h4>
          <ul>
            <li><Link to="#"><FaShoppingCart className="icon" /> Orders</Link></li>
            <li><Link to="#"><FaShoppingCart className="icon" /> Order Subscription</Link></li>
          </ul>
        </div>

        <div className="menu-section">
          <h4>FOOD MANAGEMENT</h4>
          <ul>
            <li><Link to="#"><FaUtensils className="icon" /> Categories</Link></li>
            <li><Link to="#"><FaUtensils className="icon" /> Foods</Link></li>
            <li><Link to="#"><FaUtensils className="icon" /> Addons</Link></li>
          </ul>
        </div>

        <div className="menu-section">
          <h4>REPORT SECTION</h4>
          <ul>
            <li><Link to="#"><FaFileInvoice className="icon" /> Expense Report</Link></li>
            <li><Link to="#"><FaFileInvoice className="icon" /> Transaction Report</Link></li>
            <li><Link to="#"><FaFileInvoice className="icon" /> Disbursement Report</Link></li>
            <li><Link to="#"><FaFileInvoice className="icon" /> Order Report</Link></li>
            <li><Link to="#"><FaFileInvoice className="icon" /> Food Report</Link></li>
          </ul>
        </div>

        <div className="menu-section">
          <h4>EMPLOYEE SECTION</h4>
          <ul>
            <li><Link to="#"><FaUserTie className="icon" /> Employee Role</Link></li>
            <li><Link to="#"><FaUserTie className="icon" /> Employees</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Ssidebar;

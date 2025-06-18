// "use client";  old code if someone wants use it

// import { useState } from "react";
// import { ChevronDown, ChevronRight } from "lucide-react";
// import { Link } from "react-router-dom";

// import {
//   FaHome,
//   FaShoppingBag,
//   FaMountain,
//   FaTicketAlt,
//   FaTv,
//   FaThList,
//   FaShoppingCart,
//   FaBell,
//   FaHouseUser,
//   FaCog,
//   FaCalendarCheck,
//   FaSitemap,
//   FaPizzaSlice,
//   FaPlusCircle,
//   FaQrcode,
//   FaChessKing,
//   FaWallet,
//   FaUniversity,
//   FaRegStar,
//   FaCommentDots,
//   FaCommentAlt,
//   FaCogs,
//   FaChartPie,
//   FaFileInvoice,
//   FaUser,
//   FaHamburger,
//   FaHatWizard,
// } from "react-icons/fa";

// import "./sidebar.css";

// const Sidebar = () => {
//   const [collapsed, setCollapsed] = useState(false);
//   const [expandedSections, setExpandedSections] = useState({
//     promotions: false,
//     advertisement: false,
//     order: false,
//     food: false,
//     categories: false,
//     orderReport: false,
//     employee: false,
//   });
//   const [activeLink, setActiveLink] = useState(""); // Track active link

//   const toggleSidebar = () => {
//     setCollapsed(!collapsed);
//   };

//   const toggleSection = (section) => {
//     setExpandedSections({
//       ...expandedSections,
//       [section]: !expandedSections[section],
//     });
//   };

//   const handleLinkClick = (link) => {
//     console.log("Active Link set to:", link); // Debug log
//     setActiveLink(link);
//   };

//   return (
//     <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
//       <div className="sidebar-header">
//         <div className="logo-container">
//           <div className="logo">
//             <img
//               src="https://stackfood-admin.6amtech.com/storage/app/public/restaurant/2024-12-09-675699d44d427.png"
//               alt="Logo"
//             />
//           </div>
//           {!collapsed && <span className="company-name">Hungry Puppets</span>}
//         </div>
//         <button className="collapse-btn" onClick={toggleSidebar}>
//           {collapsed ? ">" : "<"}
//         </button>
//       </div>

//       <div className="sidebar-content">
//         <ul className="nav-list">
//           {/* Main Navigation */}
//           <li className="nav-item">
//             <Link
//               to="/Dashboard"
//               className={`nav-link ${
//                 activeLink === "Dashboard" ? "active" : ""
//               }`}
//               onClick={() => handleLinkClick("Dashboard")}
//             >
//               <span className="icon">
//                 <FaHome />
//               </span>
//               {!collapsed && <span className="text">Dashboard</span>}
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link
//               to="/FoodOrderingApp"
//               className={`nav-link ${
//                 activeLink === "Point Of Sale" ? "active" : ""
//               }`}
//               onClick={() => handleLinkClick("Point Of Sale")}
//             >
//               <span className="icon">
//                 <FaShoppingBag />
//               </span>
//               {!collapsed && <span className="text">Point Of Sale</span>}
//             </Link>
//           </li>

//           {/* Promotions Section */}
//           <li className="section-header">
//             {!collapsed && <span className="section-title">PROMOTIONS</span>}
//           </li>
//           <li className="nav-item">
//             <div
//               className="nav-link has-submenu"
//               onClick={() => toggleSection("promotions")}
//             >
//               <span className="icon">
//                 <FaMountain />
//               </span>
//               {!collapsed && (
//                 <>
//                   <span className="text">Campaign</span>
//                   <span className="arrow">
//                     {expandedSections.promotions ? (
//                       <ChevronDown size={16} />
//                     ) : (
//                       <ChevronRight size={16} />
//                     )}
//                   </span>
//                 </>
//               )}
//             </div>
//             {expandedSections.promotions && !collapsed && (
//               <ul className="submenu">
//                 <li className="submenu-item">
//                   <Link
//                     to="/CampaignDashboard"
//                     className={`submenu-link ${
//                       activeLink === "Basic Campaign" ? "active" : ""
//                     }`}
//                     onClick={() => handleLinkClick("Basic Campaign")}
//                   >
//                     <span className="bullet">•</span>
//                     <span className="text">Basic Campaign</span>
//                   </Link>
//                 </li>
//                 <li className="submenu-item">
//                   <Link
//                     to="/FoodCampaign"
//                     className={`submenu-link ${
//                       activeLink === "Food Campaign" ? "active" : ""
//                     }`}
//                     onClick={() => handleLinkClick("Food Campaign")}
//                   >
//                     <span className="bullet">•</span>
//                     <span className="text">Food Campaign</span>
//                   </Link>
//                 </li>
//               </ul>
//             )}
//           </li>
//           <li className="nav-item">
//             <Link
//               to="/Coupon"
//               className={`nav-link ${activeLink === "Coupons" ? "active" : ""}`}
//               onClick={() => handleLinkClick("Coupons")}
//             >
//               <span className="icon">
//                 <FaTicketAlt />
//               </span>
//               {!collapsed && <span className="text">Coupons</span>}
//             </Link>
//           </li>

//           {/* Advertisement Management */}
//           <li className="section-header">
//             {!collapsed && (
//               <span className="section-title">ADVERTISEMENT MANAGEMENT</span>
//             )}
//           </li>
//           <li className="nav-item">
//             <Link
//               to="/NewAdvertisement"
//               className={`nav-link ${
//                 activeLink === "New Advertisement" ? "active" : ""
//               }`}
//               onClick={() => handleLinkClick("New Advertisement")}
//             >
//               <span className="icon">
//                 <FaTv />
//               </span>
//               {!collapsed && <span className="text">New Advertisement</span>}
//             </Link>
//           </li>
//           <li className="nav-item">
//             <div
//               className="nav-link has-submenu"
//               onClick={() => toggleSection("advertisement")}
//             >
//               <span className="icon">
//                 <FaThList />
//               </span>
//               {!collapsed && (
//                 <>
//                   <span className="text">Advertisement List</span>
//                   <span className="arrow">
//                     {expandedSections.advertisement ? (
//                       <ChevronDown size={16} />
//                     ) : (
//                       <ChevronRight size={16} />
//                     )}
//                   </span>
//                 </>
//               )}
//             </div>
//             {expandedSections.advertisement && !collapsed && (
//               <ul className="submenu">
//                 <li className="submenu-item">
//                   <Link
//                     to="/Pending"
//                     className={`submenu-link ${
//                       activeLink === "Pending" ? "active" : ""
//                     }`}
//                     onClick={() => handleLinkClick("Pending")}
//                   >
//                     <span className="bullet">•</span>
//                     <span className="text">Pending</span>
//                   </Link>
//                 </li>
//                 <li className="submenu-item">
//                   <Link
//                     to="/AdsList"
//                     className={`submenu-link ${
//                       activeLink === "Ads List" ? "active" : ""
//                     }`}
//                     onClick={() => handleLinkClick("Ads List")}
//                   >
//                     <span className="bullet">•</span>
//                     <span className="text">Ads List</span>
//                   </Link>
//                 </li>
//               </ul>
//             )}
//           </li>

//           {/* Order Management */}
//           <li className="section-header">
//             {!collapsed && (
//               <span className="section-title">ORDER MANAGEMENT</span>
//             )}
//           </li>
//           <li className="nav-item">
//             <div
//               className="nav-link has-submenu"
//               onClick={() => toggleSection("order")}
//             >
//               <span className="icon">
//                 <FaShoppingCart />
//               </span>
//               {!collapsed && (
//                 <>
//                   <span className="text">Orders</span>
//                   <span className="arrow">
//                     {expandedSections.order ? (
//                       <ChevronDown size={16} />
//                     ) : (
//                       <ChevronRight size={16} />
//                     )}
//                   </span>
//                 </>
//               )}
//             </div>
//             {expandedSections.order && !collapsed && (
//               <ul className="submenu">
//                 <li className="submenu-item">
//                   <Link
//                     to="#"
//                     className={`submenu-link ${
//                       activeLink === "All Orders" ? "active" : ""
//                     }`}
//                     onClick={() => handleLinkClick("All Orders")}
//                   >
//                     <span className="bullet">•</span>
//                     <span className="text">All</span>
//                   </Link>
//                 </li>
//                 <li className="submenu-item">
//                   <Link
//                     to="#"
//                     className={`submenu-link ${
//                       activeLink === "Pending Orders" ? "active" : ""
//                     }`}
//                     onClick={() => handleLinkClick("Pending Orders")}
//                   >
//                     <span className="bullet">•</span>
//                     <span className="text">Pending</span>
//                   </Link>
//                 </li>
//                 <li className="submenu-item">
//                   <Link
//                     to="#"
//                     className={`submenu-link ${
//                       activeLink === "Confirmed Orders" ? "active" : ""
//                     }`}
//                     onClick={() => handleLinkClick("Confirmed Orders")}
//                   >
//                     <span className="bullet">•</span>
//                     <span className="text">Confirmed</span>
//                   </Link>
//                 </li>
//                 <li className="submenu-item">
//                   <Link
//                     to="#"
//                     className={`submenu-link ${
//                       activeLink === "Accepted Orders" ? "active" : ""
//                     }`}
//                     onClick={() => handleLinkClick("Accepted Orders")}
//                   >
//                     <span className="bullet">•</span>
//                     <span className="text">Accepted</span>
//                   </Link>
//                 </li>
//                 <li className="submenu-item">
//                   <Link
//                     to="#"
//                     className={`submenu-link ${
//                       activeLink === "Cooking Orders" ? "active" : ""
//                     }`}
//                     onClick={() => handleLinkClick("Cooking Orders")}
//                   >
//                     <span className="bullet">•</span>
//                     <span className="text">Cooking</span>
//                   </Link>
//                 </li>
//                 <li className="submenu-item">
//                   <Link
//                     to="#"
//                     className={`submenu-link ${
//                       activeLink === "Cancelled Orders" ? "active" : ""
//                     }`}
//                     onClick={() => handleLinkClick("Cancelled Orders")}
//                   >
//                     <span className="bullet">•</span>
//                     <span className="text">Cancelled Orders</span>
//                   </Link>
//                 </li>
//               </ul>
//             )}
//           </li>
//           <li className="nav-item">
//             <Link
//               to="/SubscribedOrders"
//               className={`nav-link ${
//                 activeLink === "Order Subscription" ? "active" : ""
//               }`}
//               onClick={() => handleLinkClick("Order Subscription")}
//             >
//               <span className="icon">
//                 <FaCalendarCheck />
//               </span>
//               {!collapsed && <span className="text">Order Subscription</span>}
//             </Link>
//           </li>

//           {/* Food Management */}
//           <li className="section-header">
//             {!collapsed && (
//               <span className="section-title">FOOD MANAGEMENT</span>
//             )}
//           </li>
//           <li className="nav-item">
//             <div
//               className="nav-link has-submenu"
//               onClick={() => toggleSection("categories")}
//             >
//               <span className="icon">
//                 <FaSitemap />
//               </span>
//               {!collapsed && (
//                 <>
//                   <span className="text">Categories</span>
//                   <span className="arrow">
//                     {expandedSections.categories ? (
//                       <ChevronDown size={16} />
//                     ) : (
//                       <ChevronRight size={16} />
//                     )}
//                   </span>
//                 </>
//               )}
//             </div>
//             {expandedSections.categories && !collapsed && (
//               <ul className="submenu">
//                 <li className="submenu-item">
//                   <Link
//                     to="/Category"
//                     className={`submenu-link ${
//                       activeLink === "Category" ? "active" : ""
//                     }`}
//                     onClick={() => handleLinkClick("Category")}
//                   >
//                     <span className="bullet">•</span>
//                     <span className="text">Category</span>
//                   </Link>
//                 </li>
//                 <li className="submenu-item">
//                   <Link
//                     to="/SubCategory"
//                     className={`submenu-link ${
//                       activeLink === "Sub Category" ? "active" : ""
//                     }`}
//                     onClick={() => handleLinkClick("Sub Category")}
//                   >
//                     <span className="bullet">•</span>
//                     <span className="text">Sub Category</span>
//                   </Link>
//                 </li>
//               </ul>
//             )}
//           </li>
//           <li className="nav-item">
//             <div
//               className="nav-link has-submenu"
//               onClick={() => toggleSection("food")}
//             >
//               <span className="icon">
//                 <FaPizzaSlice />
//               </span>
//               {!collapsed && (
//                 <>
//                   <span className="text">Foods</span>
//                   <span className="arrow">
//                     {expandedSections.food ? (
//                       <ChevronDown size={16} />
//                     ) : (
//                       <ChevronRight size={16} />
//                     )}
//                   </span>
//                 </>
//               )}
//             </div>
//             {expandedSections.food && !collapsed && (
//               <ul className="submenu">
//                 <li className="submenu-item">
//                   <Link
//                     to="#"
//                     className={`submenu-link ${
//                       activeLink === "Add New Food" ? "active" : ""
//                     }`}
//                     onClick={() => handleLinkClick("Add New Food")}
//                   >
//                     <span className="bullet">•</span>
//                     <span className="text">Add New Food</span>
//                   </Link>
//                 </li>
//                 <li className="submenu-item">
//                   <Link
//                     to="/FoodList"
//                     className={`submenu-link ${
//                       activeLink === "Food List" ? "active" : ""
//                     }`}
//                     onClick={() => handleLinkClick("Food List")}
//                   >
//                     <span className="bullet">•</span>
//                     <span className="text">Food List</span>
//                   </Link>
//                 </li>
//                 <li className="submenu-item">
//                   <Link
//                     to="#"
//                     className={`submenu-link ${
//                       activeLink === "Popular Foods" ? "active" : ""
//                     }`}
//                     onClick={() => handleLinkClick("Popular Foods")}
//                   >
//                     <span className="bullet">•</span>
//                     <span className="text">Popular Foods</span>
//                   </Link>
//                 </li>
//               </ul>
//             )}
//           </li>
//           <li className="nav-item">
//             <Link
//               to="/AddonManager"
//               className={`nav-link ${activeLink === "Addons" ? "active" : ""}`}
//               onClick={() => handleLinkClick("Addons")}
//             >
//               <span className="icon">
//                 <FaPlusCircle />
//               </span>
//               {!collapsed && <span className="text">Addons</span>}
//             </Link>
//           </li>

//           {/* Business Management */}
//           <li className="section-header">
//             {!collapsed && (
//               <span className="section-title">BUSINESS MANAGEMENT</span>
//             )}
//           </li>
//           <li className="nav-item">
//             <Link
//               to="/RestaurantSetup"
//               className={`nav-link ${
//                 activeLink === "Restaurant Config" ? "active" : ""
//               }`}
//               onClick={() => handleLinkClick("Restaurant Config")}
//             >
//               <span className="icon">
//                 <FaCog />
//               </span>
//               {!collapsed && <span className="text">Restaurant Config</span>}
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link
//               to="/NotificationSetup"
//               className={`nav-link ${
//                 activeLink === "Notification Setup" ? "active" : ""
//               }`}
//               onClick={() => handleLinkClick("Notification Setup")}
//             >
//               <span className="icon">
//                 <FaBell />
//               </span>
//               {!collapsed && <span className="text">Notification Setup</span>}
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link
//               to="#"
//               className={`nav-link ${activeLink === "My Shop" ? "active" : ""}`}
//               onClick={() => handleLinkClick("My Shop")}
//             >
//               <span className="icon">
//                 <FaHouseUser />
//               </span>
//               {!collapsed && <span className="text">My Shop</span>}
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link
//               to="#"
//               className={`nav-link ${
//                 activeLink === "My QR Code" ? "active" : ""
//               }`}
//               onClick={() => handleLinkClick("My QR Code")}
//             >
//               <span className="icon">
//                 <FaQrcode />
//               </span>
//               {!collapsed && <span className="text">My QR Code</span>}
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link
//               to="/BusinessPlan"
//               className={`nav-link ${
//                 activeLink === "My Business Plan" ? "active" : ""
//               }`}
//               onClick={() => handleLinkClick("My Business Plan")}
//             >
//               <span className="icon">
//                 <FaChessKing />
//               </span>
//               {!collapsed && <span className="text">My Business Plan</span>}
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link
//               to="#"
//               className={`nav-link ${
//                 activeLink === "My Wallet" ? "active" : ""
//               }`}
//               onClick={() => handleLinkClick("My Wallet")}
//             >
//               <span className="icon">
//                 <FaWallet />
//               </span>
//               {!collapsed && <span className="text">My Wallet</span>}
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link
//               to="/WithdrawMethodSetup"
//               className={`nav-link ${
//                 activeLink === "Wallet Method" ? "active" : ""
//               }`}
//               onClick={() => handleLinkClick("Wallet Method")}
//             >
//               <span className="icon">
//                 <FaUniversity />
//               </span>
//               {!collapsed && <span className="text">Wallet Method</span>}
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link
//               to="/CustomerReviews"
//               className={`nav-link ${activeLink === "Reviews" ? "active" : ""}`}
//               onClick={() => handleLinkClick("Reviews")}
//             >
//               <span className="icon">
//                 <FaRegStar />
//               </span>
//               {!collapsed && <span className="text">Reviews</span>}
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link
//               to="#"
//               className={`nav-link ${activeLink === "Chat" ? "active" : ""}`}
//               onClick={() => handleLinkClick("Chat")}
//             >
//               <span className="icon">
//                 <FaCommentAlt />
//               </span>
//               {!collapsed && <span className="text">Chat</span>}
//             </Link>
//           </li>

//           {/* Report Section */}
//           <li className="section-header">
//             {!collapsed && (
//               <span className="section-title">REPORT SECTION</span>
//             )}
//           </li>
//           <li className="nav-item">
//             <Link
//               to="/ExpenseReport"
//               className={`nav-link ${
//                 activeLink === "Expense Report" ? "active" : ""
//               }`}
//               onClick={() => handleLinkClick("Expense Report")}
//             >
//               <span className="icon">
//                 <FaCogs />
//               </span>
//               {!collapsed && <span className="text">Expense Report</span>}
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link
//               to="#"
//               className={`nav-link ${
//                 activeLink === "Transaction Report" ? "active" : ""
//               }`}
//               onClick={() => handleLinkClick("Transaction Report")}
//             >
//               <span className="icon">
//                 <FaChartPie />
//               </span>
//               {!collapsed && <span className="text">Transaction Report</span>}
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link
//               to="/DisbursementReport"
//               className={`nav-link ${
//                 activeLink === "Disbursement Report" ? "active" : ""
//               }`}
//               onClick={() => handleLinkClick("Disbursement Report")}
//             >
//               <span className="icon">
//                 <FaFileInvoice />
//               </span>
//               {!collapsed && <span className="text">Disbursement Report</span>}
//             </Link>
//           </li>
//           <li className="nav-item">
//             <div
//               className="nav-link has-submenu"
//               onClick={() => toggleSection("orderReport")}
//             >
//               <span className="icon">
//                 <FaUser />
//               </span>
//               {!collapsed && (
//                 <>
//                   <span className="text">Order Report</span>
//                   <span className="arrow">
//                     {expandedSections.orderReport ? (
//                       <ChevronDown size={16} />
//                     ) : (
//                       <ChevronRight size={16} />
//                     )}
//                   </span>
//                 </>
//               )}
//             </div>
//             {expandedSections.orderReport && !collapsed && (
//               <ul className="submenu">
//                 <li className="submenu-item">
//                   <Link
//                     to="#"
//                     className={`submenu-link ${
//                       activeLink === "Daily Orders" ? "active" : ""
//                     }`}
//                     onClick={() => handleLinkClick("Daily Orders")}
//                   >
//                     <span className="bullet">•</span>
//                     <span className="text">Daily Orders</span>
//                   </Link>
//                 </li>
//                 <li className="submenu-item">
//                   <Link
//                     to="#"
//                     className={`submenu-link ${
//                       activeLink === "Weekly Orders" ? "active" : ""
//                     }`}
//                     onClick={() => handleLinkClick("Weekly Orders")}
//                   >
//                     <span className="bullet">•</span>
//                     <span className="text">Weekly Orders</span>
//                   </Link>
//                 </li>
//                 <li className="submenu-item">
//                   <Link
//                     to="#"
//                     className={`submenu-link ${
//                       activeLink === "Monthly Orders" ? "active" : ""
//                     }`}
//                     onClick={() => handleLinkClick("Monthly Orders")}
//                   >
//                     <span className="bullet">•</span>
//                     <span className="text">Monthly Orders</span>
//                   </Link>
//                 </li>
//               </ul>
//             )}
//           </li>
//           <li className="nav-item">
//             <Link
//               to="/FoodReport"
//               className={`nav-link ${
//                 activeLink === "Food Report" ? "active" : ""
//               }`}
//               onClick={() => handleLinkClick("Food Report")}
//             >
//               <span className="icon">
//                 <FaHamburger />
//               </span>
//               {!collapsed && <span className="text">Food Report</span>}
//             </Link>
//           </li>

//           {/* Employee Section */}
//           <li className="section-header">
//             {!collapsed && (
//               <span className="section-title">EMPLOYEE SECTION</span>
//             )}
//           </li>
//           <li className="nav-item">
//             <Link
//               to="/EmployeeRole"
//               className={`nav-link ${
//                 activeLink === "Employee Role" ? "active" : ""
//               }`}
//               onClick={() => handleLinkClick("Employee Role")}
//             >
//               <span className="icon">
//                 <FaHatWizard />
//               </span>
//               {!collapsed && <span className="text">Employee Role</span>}
//             </Link>
//           </li>
//           <li className="nav-item">
//             <div
//               className="nav-link has-submenu"
//               onClick={() => toggleSection("employee")}
//             >
//               <span className="icon">
//                 <FaUser />
//               </span>
//               {!collapsed && (
//                 <>
//                   <span className="text">Employees</span>
//                   <span className="arrow">
//                     {expandedSections.employee ? (
//                       <ChevronDown size={16} />
//                     ) : (
//                       <ChevronRight size={16} />
//                     )}
//                   </span>
//                 </>
//               )}
//             </div>
//             {expandedSections.employee && !collapsed && (
//               <ul className="submenu">
//                 <li className="submenu-item">
//                   <Link
//                     to="/EmployeeForm"
//                     className={`submenu-link ${
//                       activeLink === "Add New Employee" ? "active" : ""
//                     }`}
//                     onClick={() => handleLinkClick("Add New Employee")}
//                   >
//                     <span className="bullet">•</span>
//                     <span className="text">Add New Employee</span>
//                   </Link>
//                 </li>
//                 <li className="submenu-item">
//                   <Link
//                     to="/EmployeeList"
//                     className={`submenu-link ${
//                       activeLink === "Employee List" ? "active" : ""
//                     }`}
//                     onClick={() => handleLinkClick("Employee List")}
//                   >
//                     <span className="bullet">•</span>
//                     <span className="text">List</span>
//                   </Link>
//                 </li>
//               </ul>
//             )}
//           </li>
//         </ul>

//         {/* Ads section - hidden when collapsed */}
//         {!collapsed && (
//           <div className="ads-section">
//             <div className="ads-image">
//               <img
//                 src="https://stackfood-admin.6amtech.com/public/assets/admin/img/promo.png"
//                 alt="Ads illustration"
//               />
//             </div>
//             <h3 className="ads-title">Want To Get Highlighted?</h3>
//             <p className="ads-description">
//               Create Ads To Get Highlighted On The App And Web Browser
//             </p>
//             <button className="ads-button">Create Ads</button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

import {
  FaHome,
  FaShoppingBag,
  FaMountain,
  FaTicketAlt,
  FaTv,
  FaThList,
  FaShoppingCart,
  FaBell,
  FaHouseUser,
  FaCog,
  FaCalendarCheck,
  FaSitemap,
  FaPizzaSlice,
  FaPlusCircle,
  FaQrcode,
  FaChessKing,
  FaWallet,
  FaUniversity,
  FaRegStar,
  FaCommentDots,
  FaCommentAlt,
  FaCogs,
  FaChartPie,
  FaFileInvoice,
  FaUser,
  FaHamburger,
  FaHatWizard,
} from "react-icons/fa";

import "./sidebar.css";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    promotions: false,
    advertisement: false,
    order: false,
    food: false,
    categories: false,
    orderReport: false,
    employee: false,
  });
  const [activeLink, setActiveLink] = useState(""); // Track active link

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const toggleSection = (section) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section],
    });
  };

  const handleLinkClick = (link) => {
    console.log("Active Link set to:", link); // Debug log
    setActiveLink(link);
  };

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        <div className="logo-container">
          <div className="logo">
            <img
              src="https://stackfood-admin.6amtech.com/storage/app/public/restaurant/2024-12-09-675699d44d427.png"
              alt="Logo"
            />
          </div>
          {!collapsed && <span className="company-name">Hungry Puppets</span>}
        </div>
        <button className="collapse-btn" onClick={toggleSidebar}>
          {collapsed ? ">" : "<"}
        </button>
      </div>

      <div className="sidebar-content">
        <ul className="nav-list">
          {/* Main Navigation */}
          <li className="nav-item">
            <Link
              to="/Dashboard"
              className={`nav-link ${
                activeLink === "Dashboard" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("Dashboard")}
            >
              <span className="icon">
                <FaHome />
              </span>
              {!collapsed && <span className="text">Dashboard</span>}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/FoodOrderingApp"
              className={`nav-link ${
                activeLink === "Point Of Sale" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("Point Of Sale")}
            >
              <span className="icon">
                <FaShoppingBag />
              </span>
              {!collapsed && <span className="text">Point Of Sale</span>}
            </Link>
          </li>

          {/* Promotions Section */}
          <li className="section-header">
            {!collapsed && <span className="section-title">PROMOTIONS</span>}
          </li>
          <li className="nav-item">
            <div
              className="nav-link has-submenu"
              onClick={() => toggleSection("promotions")}
            >
              <span className="icon">
                <FaMountain />
              </span>
              {!collapsed && (
                <>
                  <span className="text">Campaign</span>
                  <span className="arrow">
                    {expandedSections.promotions ? (
                      <ChevronDown size={16} />
                    ) : (
                      <ChevronRight size={16} />
                    )}
                  </span>
                </>
              )}
            </div>
            {expandedSections.promotions && !collapsed && (
              <ul className="submenu">
                <li className="submenu-item">
                  <Link
                    to="/CampaignDashboard"
                    className={`submenu-link ${
                      activeLink === "Basic Campaign" ? "active" : ""
                    }`}
                    onClick={() => handleLinkClick("Basic Campaign")}
                  >
                    <span className="bullet">•</span>
                    <span className="text">Basic Campaign</span>
                  </Link>
                </li>
                <li className="submenu-item">
                  <Link
                    to="/FoodCampaign"
                    className={`submenu-link ${
                      activeLink === "Food Campaign" ? "active" : ""
                    }`}
                    onClick={() => handleLinkClick("Food Campaign")}
                  >
                    <span className="bullet">•</span>
                    <span className="text">Food Campaign</span>
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="nav-item">
            <Link
              to="/Coupon"
              className={`nav-link ${activeLink === "Coupons" ? "active" : ""}`}
              onClick={() => handleLinkClick("Coupons")}
            >
              <span className="icon">
                <FaTicketAlt />
              </span>
              {!collapsed && <span className="text">Coupons</span>}
            </Link>
          </li>

          {/* Advertisement Management */}
          <li className="section-header">
            {!collapsed && (
              <span className="section-title">ADVERTISEMENT MANAGEMENT</span>
            )}
          </li>
          <li className="nav-item">
            <Link
              to="/NewAdvertisement"
              className={`nav-link ${
                activeLink === "New Advertisement" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("New Advertisement")}
            >
              <span className="icon">
                <FaTv />
              </span>
              {!collapsed && <span className="text">New Advertisement</span>}
            </Link>
          </li>
          <li className="nav-item">
            <div
              className="nav-link has-submenu"
              onClick={() => toggleSection("advertisement")}
            >
              <span className="icon">
                <FaThList />
              </span>
              {!collapsed && (
                <>
                  <span className="text">Advertisement List</span>
                  <span className="arrow">
                    {expandedSections.advertisement ? (
                      <ChevronDown size={16} />
                    ) : (
                      <ChevronRight size={16} />
                    )}
                  </span>
                </>
              )}
            </div>
            {expandedSections.advertisement && !collapsed && (
              <ul className="submenu">
                <li className="submenu-item">
                  <Link
                    to="/Pending"
                    className={`submenu-link ${
                      activeLink === "Pending" ? "active" : ""
                    }`}
                    onClick={() => handleLinkClick("Pending")}
                  >
                    <span className="bullet">•</span>
                    <span className="text">Pending</span>
                  </Link>
                </li>
                <li className="submenu-item">
                  <Link
                    to="/AdsList"
                    className={`submenu-link ${
                      activeLink === "Ads List" ? "active" : ""
                    }`}
                    onClick={() => handleLinkClick("Ads List")}
                  >
                    <span className="bullet">•</span>
                    <span className="text">Ads List</span>
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Order Management */}
          <li className="section-header">
            {!collapsed && (
              <span className="section-title">ORDER MANAGEMENT</span>
            )}
          </li>
          <li className="nav-item">
            <div
              className="nav-link has-submenu"
              onClick={() => toggleSection("order")}
            >
              <span className="icon">
                <FaShoppingCart />
              </span>
              {!collapsed && (
                <>
                  <span className="text">Orders</span>
                  <span className="arrow">
                    {expandedSections.order ? (
                      <ChevronDown size={16} />
                    ) : (
                      <ChevronRight size={16} />
                    )}
                  </span>
                </>
              )}
            </div>
            {expandedSections.order && !collapsed && (
              <ul className="submenu">
                <li className="submenu-item">
                  <Link
                    to="#"
                    className={`submenu-link ${
                      activeLink === "All Orders" ? "active" : ""
                    }`}
                    onClick={() => handleLinkClick("All Orders")}
                  >
                    <span className="bullet">•</span>
                    <span className="text">All</span>
                  </Link>
                </li>
                <li className="submenu-item">
                  <Link
                    to="#"
                    className={`submenu-link ${
                      activeLink === "Pending Orders" ? "active" : ""
                    }`}
                    onClick={() => handleLinkClick("Pending Orders")}
                  >
                    <span className="bullet">•</span>
                    <span className="text">Pending</span>
                  </Link>
                </li>
                <li className="submenu-item">
                  <Link
                    to="#"
                    className={`submenu-link ${
                      activeLink === "Confirmed Orders" ? "active" : ""
                    }`}
                    onClick={() => handleLinkClick("Confirmed Orders")}
                  >
                    <span className="bullet">•</span>
                    <span className="text">Confirmed</span>
                  </Link>
                </li>
                <li className="submenu-item">
                  <Link
                    to="#"
                    className={`submenu-link ${
                      activeLink === "Accepted Orders" ? "active" : ""
                    }`}
                    onClick={() => handleLinkClick("Accepted Orders")}
                  >
                    <span className="bullet">•</span>
                    <span className="text">Accepted</span>
                  </Link>
                </li>
                <li className="submenu-item">
                  <Link
                    to="#"
                    className={`submenu-link ${
                      activeLink === "Cooking Orders" ? "active" : ""
                    }`}
                    onClick={() => handleLinkClick("Cooking Orders")}
                  >
                    <span className="bullet">•</span>
                    <span className="text">Cooking</span>
                  </Link>
                </li>
                <li className="submenu-item">
                  <Link
                    to="#"
                    className={`submenu-link ${
                      activeLink === "Ready for Delivery Orders" ? "active" : ""
                    }`}
                    onClick={() => handleLinkClick("Ready for Delivery Orders")}
                  >
                    <span className="bullet">•</span>
                    <span className="text">Ready for Delivery</span>
                  </Link>
                </li>
                <li className="submenu-item">
                  <Link
                    to="#"
                    className={`submenu-link ${
                      activeLink === "Food on the Way Orders" ? "active" : ""
                    }`}
                    onClick={() => handleLinkClick("Food on the Way Orders")}
                  >
                    <span className="bullet">•</span>
                    <span className="text">Food on the Way</span>
                  </Link>
                </li>
                <li className="submenu-item">
                  <Link
                    to="#"
                    className={`submenu-link ${
                      activeLink === "Delivered Orders" ? "active" : ""
                    }`}
                    onClick={() => handleLinkClick("Delivered Orders")}
                  >
                    <span className="bullet">•</span>
                    <span className="text">Delivered</span>
                  </Link>
                </li>
                <li className="submenu-item">
                  <Link
                    to="#"
                    className={`submenu-link ${
                      activeLink === "Dine In Orders" ? "active" : ""
                    }`}
                    onClick={() => handleLinkClick("Dine In Orders")}
                  >
                    <span className="bullet">•</span>
                    <span className="text">Dine In</span>
                  </Link>
                </li>
                <li className="submenu-item">
                  <Link
                    to="#"
                    className={`submenu-link ${
                      activeLink === "Refunded Orders" ? "active" : ""
                    }`}
                    onClick={() => handleLinkClick("Refunded Orders")}
                  >
                    <span className="bullet">•</span>
                    <span className="text">Refunded</span>
                  </Link>
                </li>
                <li className="submenu-item">
                  <Link
                    to="#"
                    className={`submenu-link ${
                      activeLink === "Refund Requested Orders" ? "active" : ""
                    }`}
                    onClick={() => handleLinkClick("Refund Requested Orders")}
                  >
                    <span className="bullet">•</span>
                    <span className="text">Refund Requested</span>
                  </Link>
                </li>
                <li className="submenu-item">
                  <Link
                    to="#"
                    className={`submenu-link ${
                      activeLink === "Scheduled Orders" ? "active" : ""
                    }`}
                    onClick={() => handleLinkClick("Scheduled Orders")}
                  >
                    <span className="bullet">•</span>
                    <span className="text">Scheduled</span>
                  </Link>
                </li>
                <li className="submenu-item">
                  <Link
                    to="#"
                    className={`submenu-link ${
                      activeLink === "Payment Failed Orders" ? "active" : ""
                    }`}
                    onClick={() => handleLinkClick("Payment Failed Orders")}
                  >
                    <span className="bullet">•</span>
                    <span className="text">Payment Failed</span>
                  </Link>
                </li>
                <li className="submenu-item">
                  <Link
                    to="#"
                    className={`submenu-link ${
                      activeLink === "Cancelled Orders" ? "active" : ""
                    }`}
                    onClick={() => handleLinkClick("Cancelled Orders")}
                  >
                    <span className="bullet">•</span>
                    <span className="text">Cancelled</span>
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="nav-item">
            <Link
              to="/SubscribedOrders"
              className={`nav-link ${
                activeLink === "Order Subscription" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("Order Subscription")}
            >
              <span className="icon">
                <FaCalendarCheck />
              </span>
              {!collapsed && <span className="text">Order Subscription</span>}
            </Link>
          </li>

          {/* Food Management */}
          <li className="section-header">
            {!collapsed && (
              <span className="section-title">FOOD MANAGEMENT</span>
            )}
          </li>
          <li className="nav-item">
            <div
              className="nav-link has-submenu"
              onClick={() => toggleSection("categories")}
            >
              <span className="icon">
                <FaSitemap />
              </span>
              {!collapsed && (
                <>
                  <span className="text">Categories</span>
                  <span className="arrow">
                    {expandedSections.categories ? (
                      <ChevronDown size={16} />
                    ) : (
                      <ChevronRight size={16} />
                    )}
                  </span>
                </>
              )}
            </div>
            {expandedSections.categories && !collapsed && (
              <ul className="submenu">
                <li className="submenu-item">
                  <Link
                    to="/Category"
                    className={`submenu-link ${
                      activeLink === "Category" ? "active" : ""
                    }`}
                    onClick={() => handleLinkClick("Category")}
                  >
                    <span className="bullet">•</span>
                    <span className="text">Category</span>
                  </Link>
                </li>
                <li className="submenu-item">
                  <Link
                    to="/SubCategory"
                    className={`submenu-link ${
                      activeLink === "Sub Category" ? "active" : ""
                    }`}
                    onClick={() => handleLinkClick("Sub Category")}
                  >
                    <span className="bullet">•</span>
                    <span className="text">Sub Category</span>
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="nav-item">
            <div
              className="nav-link has-submenu"
              onClick={() => toggleSection("food")}
            >
              <span className="icon">
                <FaPizzaSlice />
              </span>
              {!collapsed && (
                <>
                  <span className="text">Foods</span>
                  <span className="arrow">
                    {expandedSections.food ? (
                      <ChevronDown size={16} />
                    ) : (
                      <ChevronRight size={16} />
                    )}
                  </span>
                </>
              )}
            </div>
            {expandedSections.food && !collapsed && (
              <ul className="submenu">
                <li className="submenu-item">
                  <Link
                    to="#"
                    className={`submenu-link ${
                      activeLink === "Add New Food" ? "active" : ""
                    }`}
                    onClick={() => handleLinkClick("Add New Food")}
                  >
                    <span className="bullet">•</span>
                    <span className="text">Add New Food</span>
                  </Link>
                </li>
                <li className="submenu-item">
                  <Link
                    to="/FoodList"
                    className={`submenu-link ${
                      activeLink === "Food List" ? "active" : ""
                    }`}
                    onClick={() => handleLinkClick("Food List")}
                  >
                    <span className="bullet">•</span>
                    <span className="text">Food List</span>
                  </Link>
                </li>
                <li className="submenu-item">
                  <Link
                    to="/BulkImport"
                    className={`submenu-link ${
                      activeLink === "Bulk Import" ? "active" : ""
                    }`}
                    onClick={() => handleLinkClick("Bulk Import")}
                  >
                    <span className="bullet">•</span>
                    <span className="text">Bulk Import</span>
                  </Link>
                </li>
                <li className="submenu-item">
                  <Link
                    to="/ExportFoods"
                    className={`submenu-link ${
                      activeLink === "Bulk Export" ? "active" : ""
                    }`}
                    onClick={() => handleLinkClick("Bulk Export")}
                  >
                    <span className="bullet">•</span>
                    <span className="text">Bulk Export</span>
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="nav-item">
            <Link
              to="/AddonManager"
              className={`nav-link ${activeLink === "Addons" ? "active" : ""}`}
              onClick={() => handleLinkClick("Addons")}
            >
              <span className="icon">
                <FaPlusCircle />
              </span>
              {!collapsed && <span className="text">Addons</span>}
            </Link>
          </li>

          {/* Business Management */}
          <li className="section-header">
            {!collapsed && (
              <span className="section-title">BUSINESS MANAGEMENT</span>
            )}
          </li>
          <li className="nav-item">
            <Link
              to="/RestaurantSetup"
              className={`nav-link ${
                activeLink === "Restaurant Config" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("Restaurant Config")}
            >
              <span className="icon">
                <FaCog />
              </span>
              {!collapsed && <span className="text">Restaurant Config</span>}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/NotificationSetup"
              className={`nav-link ${
                activeLink === "Notification Setup" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("Notification Setup")}
            >
              <span className="icon">
                <FaBell />
              </span>
              {!collapsed && <span className="text">Notification Setup</span>}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="#"
              className={`nav-link ${activeLink === "My Shop" ? "active" : ""}`}
              onClick={() => handleLinkClick("My Shop")}
            >
              <span className="icon">
                <FaHouseUser />
              </span>
              {!collapsed && <span className="text">My Shop</span>}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="#"
              className={`nav-link ${
                activeLink === "My QR Code" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("My QR Code")}
            >
              <span className="icon">
                <FaQrcode />
              </span>
              {!collapsed && <span className="text">My QR Code</span>}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/BusinessPlan"
              className={`nav-link ${
                activeLink === "My Business Plan" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("My Business Plan")}
            >
              <span className="icon">
                <FaChessKing />
              </span>
              {!collapsed && <span className="text">My Business Plan</span>}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="#"
              className={`nav-link ${
                activeLink === "My Wallet" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("My Wallet")}
            >
              <span className="icon">
                <FaWallet />
              </span>
              {!collapsed && <span className="text">My Wallet</span>}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/WithdrawMethodSetup"
              className={`nav-link ${
                activeLink === "Wallet Method" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("Wallet Method")}
            >
              <span className="icon">
                <FaUniversity />
              </span>
              {!collapsed && <span className="text">Wallet Method</span>}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/CustomerReviews"
              className={`nav-link ${activeLink === "Reviews" ? "active" : ""}`}
              onClick={() => handleLinkClick("Reviews")}
            >
              <span className="icon">
                <FaRegStar />
              </span>
              {!collapsed && <span className="text">Reviews</span>}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="#"
              className={`nav-link ${activeLink === "Chat" ? "active" : ""}`}
              onClick={() => handleLinkClick("Chat")}
            >
              <span className="icon">
                <FaCommentAlt />
              </span>
              {!collapsed && <span className="text">Chat</span>}
            </Link>
          </li>

          {/* Report Section */}
          <li className="section-header">
            {!collapsed && (
              <span className="section-title">REPORT SECTION</span>
            )}
          </li>
          <li className="nav-item">
            <Link
              to="/ExpenseReport"
              className={`nav-link ${
                activeLink === "Expense Report" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("Expense Report")}
            >
              <span className="icon">
                <FaCogs />
              </span>
              {!collapsed && <span className="text">Expense Report</span>}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="#"
              className={`nav-link ${
                activeLink === "Transaction Report" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("Transaction Report")}
            >
              <span className="icon">
                <FaChartPie />
              </span>
              {!collapsed && <span className="text">Transaction Report</span>}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/DisbursementReport"
              className={`nav-link ${
                activeLink === "Disbursement Report" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("Disbursement Report")}
            >
              <span className="icon">
                <FaFileInvoice />
              </span>
              {!collapsed && <span className="text">Disbursement Report</span>}
            </Link>
          </li>
          <li className="nav-item">
            <div
              className="nav-link has-submenu"
              onClick={() => toggleSection("orderReport")}
            >
              <span className="icon">
                <FaUser />
              </span>
              {!collapsed && (
                <>
                  <span className="text">Order Report</span>
                  <span className="arrow">
                    {expandedSections.orderReport ? (
                      <ChevronDown size={16} />
                    ) : (
                      <ChevronRight size={16} />
                    )}
                  </span>
                </>
              )}
            </div>
            {expandedSections.orderReport && !collapsed && (
              <ul className="submenu">
                <li className="submenu-item">
                  <Link
                    to="#"
                    className={`submenu-link ${
                      activeLink === "Regular Order Report" ? "active" : ""
                    }`}
                    onClick={() => handleLinkClick("Regular Order Report")}
                  >
                    <span className="bullet">•</span>
                    <span className="text">Regular Order Report</span>
                  </Link>
                </li>
                <li className="submenu-item">
                  <Link
                    to="#"
                    className={`submenu-link ${
                      activeLink === "Campaign Order Report" ? "active" : ""
                    }`}
                    onClick={() => handleLinkClick("Campaign Order Report")}
                  >
                    <span className="bullet">•</span>
                    <span className="text">Campaign Order Report</span>
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="nav-item">
            <Link
              to="/FoodReport"
              className={`nav-link ${
                activeLink === "Food Report" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("Food Report")}
            >
              <span className="icon">
                <FaHamburger />
              </span>
              {!collapsed && <span className="text">Food Report</span>}
            </Link>
          </li>

          {/* Employee Section */}
          <li className="section-header">
            {!collapsed && (
              <span className="section-title">EMPLOYEE SECTION</span>
            )}
          </li>
          <li className="nav-item">
            <Link
              to="/EmployeeRole"
              className={`nav-link ${
                activeLink === "Employee Role" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("Employee Role")}
            >
              <span className="icon">
                <FaHatWizard />
              </span>
              {!collapsed && <span className="text">Employee Role</span>}
            </Link>
          </li>
          <li className="nav-item">
            <div
              className="nav-link has-submenu"
              onClick={() => toggleSection("employee")}
            >
              <span className="icon">
                <FaUser />
              </span>
              {!collapsed && (
                <>
                  <span className="text">Employees</span>
                  <span className="arrow">
                    {expandedSections.employee ? (
                      <ChevronDown size={16} />
                    ) : (
                      <ChevronRight size={16} />
                    )}
                  </span>
                </>
              )}
            </div>
            {expandedSections.employee && !collapsed && (
              <ul className="submenu">
                <li className="submenu-item">
                  <Link
                    to="/EmployeeForm"
                    className={`submenu-link ${
                      activeLink === "Add New Employee" ? "active" : ""
                    }`}
                    onClick={() => handleLinkClick("Add New Employee")}
                  >
                    <span className="bullet">•</span>
                    <span className="text">Add New Employee</span>
                  </Link>
                </li>
                <li className="submenu-item">
                  <Link
                    to="/EmployeeList"
                    className={`submenu-link ${
                      activeLink === "Employee List" ? "active" : ""
                    }`}
                    onClick={() => handleLinkClick("Employee List")}
                  >
                    <span className="bullet">•</span>
                    <span className="text">List</span>
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>

        {/* Ads section - hidden when collapsed */}
        {!collapsed && (
          <div className="ads-section">
            <div className="ads-image">
              <img
                src="https://stackfood-admin.6amtech.com/public/assets/admin/img/promo.png"
                alt="Ads illustration"
              />
            </div>
            <h3 className="ads-title">Want To Get Highlighted?</h3>
            <p className="ads-description">
              Create Ads To Get Highlighted On The App And Web Browser
            </p>
            <button className="ads-button">Create Ads</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;

// "use client";

// import { useState, useMemo } from "react";
// import "./TransactionReport.css";
// import { Search } from "lucide-react";

// const TransactionReport = () => {
//   // Sample transaction data
//   const [allTransactions] = useState([
//     {
//       id: 1,
//       orderId: "100157",
//       restaurant: "Hungry Puppets",
//       customerName: "Brooklyn Simmons",
//       totalAmount: 1720.0,
//       itemDiscount: 0.0,
//       couponDiscount: 0.0,
//       referralDiscount: 0.0,
//       discountedAmount: 0.0,
//       vatTax: 86.0,
//       deliveryCharge: 583.99,
//       orderAmount: 2399.99,
//       date: new Date("2024-01-15"),
//     },
//     {
//       id: 2,
//       orderId: "100156",
//       restaurant: "Hungry Puppets",
//       customerName: "John Doe",
//       totalAmount: 700.0,
//       itemDiscount: 110.0,
//       couponDiscount: 0.0,
//       referralDiscount: 0.0,
//       discountedAmount: 110.0,
//       vatTax: 29.5,
//       deliveryCharge: 687.14,
//       orderAmount: 6316.64,
//       date: new Date("2024-06-10"),
//     },
//     {
//       id: 3,
//       orderId: "100155",
//       restaurant: "Hungry Puppets",
//       customerName: "John Doe",
//       totalAmount: 710.0,
//       itemDiscount: 110.0,
//       couponDiscount: 0.0,
//       referralDiscount: 0.0,
//       discountedAmount: 110.0,
//       vatTax: 30.0,
//       deliveryCharge: 687.14,
//       orderAmount: 2827.14,
//       date: new Date("2024-06-05"),
//     },
//     {
//       id: 4,
//       orderId: "100154",
//       restaurant: "Hungry Puppets",
//       customerName: "John Doe",
//       totalAmount: 710.0,
//       itemDiscount: 110.0,
//       couponDiscount: 0.0,
//       referralDiscount: 0.0,
//       discountedAmount: 110.0,
//       vatTax: 30.0,
//       deliveryCharge: 687.14,
//       orderAmount: 2827.14,
//       date: new Date("2024-12-01"),
//     },
//     {
//       id: 5,
//       orderId: "100129",
//       restaurant: "Hungry Puppets",
//       customerName: "Jdjjdj Dhhdhd",
//       totalAmount: 95.0,
//       itemDiscount: 14.25,
//       couponDiscount: 0.0,
//       referralDiscount: 0.0,
//       discountedAmount: 0.0,
//       vatTax: 4.75,
//       deliveryCharge: 30.0,
//       orderAmount: 129.75,
//       date: new Date("2023-08-20"),
//     },
//     {
//       id: 5,
//       orderId: "100129",
//       restaurant: "Hungry Puppets",
//       customerName: "Jdjjdj Dhhdhd",
//       totalAmount: 95.0,
//       itemDiscount: 14.25,
//       couponDiscount: 0.0,
//       referralDiscount: 0.0,
//       discountedAmount: 0.0,
//       vatTax: 4.75,
//       deliveryCharge: 30.0,
//       orderAmount: 129.75,
//       date: new Date("2023-08-20"),
//     },
//   ]);

//   const [searchFilter, setSearchFilter] = useState("All data");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [fromDate, setFromDate] = useState("");
//   const [toDate, setToDate] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 5;

//   // Filter transactions based on selected criteria
//   const filteredTransactions = useMemo(() => {
//     let filtered = [...allTransactions];
//     const now = new Date();

//     // Apply time-based filter
//     switch (searchFilter) {
//       case "This week":
//         const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
//         filtered = filtered.filter((t) => t.date >= weekAgo);
//         break;
//       case "This Month":
//         const monthAgo = new Date(now.getFullYear(), now.getMonth(), 1);
//         filtered = filtered.filter((t) => t.date >= monthAgo);
//         break;
//       case "This year":
//         const yearStart = new Date(now.getFullYear(), 0, 1);
//         filtered = filtered.filter((t) => t.date >= yearStart);
//         break;
//       case "Custom":
//         if (fromDate && toDate) {
//           const from = new Date(fromDate);
//           const to = new Date(toDate);
//           filtered = filtered.filter((t) => t.date >= from && t.date <= to);
//         }
//         break;
//       default:
//         // 'All data' - no filtering
//         break;
//     }

//     // Apply search term filter
//     if (searchTerm) {
//       filtered = filtered.filter(
//         (t) =>
//           t.orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           t.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           t.restaurant.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }

//     return filtered;
//   }, [allTransactions, searchFilter, searchTerm, fromDate, toDate]);

//   // Calculate summary statistics
//   const summaryStats = useMemo(() => {
//     const completed = filteredTransactions.reduce(
//       (sum, t) => sum + t.orderAmount,
//       0
//     );
//     const onHold = 35400; // Static for demo
//     const refunded = 0; // Static for demo

//     return { completed, onHold, refunded };
//   }, [filteredTransactions]);

//   // Pagination logic
//   const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);
//   const paginatedTransactions = useMemo(() => {
//     const startIndex = (currentPage - 1) * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;
//     return filteredTransactions.slice(startIndex, endIndex);
//   }, [filteredTransactions, currentPage, itemsPerPage]);

//   const handleFilterChange = (e) => {
//     setSearchFilter(e.target.value);
//     if (e.target.value !== "Custom") {
//       setFromDate("");
//       setToDate("");
//     }
//     setCurrentPage(1); // Reset to first page when filter changes
//   };

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   const goToFirstPage = () => {
//     setCurrentPage(1);
//   };

//   const goToLastPage = () => {
//     setCurrentPage(totalPages);
//   };

//   return (
//     <div className="Transactions-transaction-report">
//       {/* Header */}
//       <div className="Transactions-header">
//         <div className="Transactions-header-left">
//           <div className="Transactions-icon">🏪</div>
//           <h1>Transaction Report</h1>
//         </div>
//       </div>

//       {/* Search Data Section */}
//       <div className="Transactions-search-section-container">
//         <div className="Transactions-search-section">
//           <h3>Search Data</h3>
//           <div className="Transactions-search-controls">
//             <select
//               value={searchFilter}
//               onChange={handleFilterChange}
//               className="Transactions-search-dropdown"
//             >
//               <option value="All data">All data</option>
//               <option value="This week">This week</option>
//               <option value="This Month">This Month</option>
//               <option value="This year">This year</option>
//               <option value="Custom">Custom</option>
//             </select>

//             {searchFilter === "Custom" && (
//               <div className="Transactions-date-inputs">
//                 <div className="Transactions-date-input-group">
//                   <span className="Transactions-clock-icon">🕐</span>
//                   <input
//                     type="date"
//                     placeholder="From"
//                     value={fromDate}
//                     onChange={(e) => setFromDate(e.target.value)}
//                     className="Transactions-date-input"
//                   />
//                 </div>
//                 <div className="Transactions-date-input-group">
//                   <span className="Transactions-clock-icon">🕐</span>
//                   <input
//                     type="date"
//                     placeholder="To"
//                     value={toDate}
//                     onChange={(e) => setToDate(e.target.value)}
//                     className="Transactions-date-input"
//                   />
//                 </div>
//               </div>
//             )}

//             <button className="Transactions-filter-btn">Filter</button>
//           </div>
//         </div>
//       </div>

//       {/* Summary Cards */}
//       <div className="Transactions-summary-cards">
//         <div className="Transactions-card Transactions-completed">
//           <div className="Transactions-card-icon">🏪</div>
//           <div className="Transactions-card-content">
//             <div className="Transactions-amount">
//               ${summaryStats.completed.toLocaleString()}
//             </div>
//             <div className="Transactions-label">Completed Transaction</div>
//           </div>
//         </div>
//         <div className="Transactions-card Transactions-on-hold">
//           <div className="Transactions-card-icon">🏪</div>
//           <div className="Transactions-card-content">
//             <div className="Transactions-amount">
//               ${summaryStats.onHold.toLocaleString()}
//             </div>
//             <div className="Transactions-label">On Hold Transaction</div>
//           </div>
//         </div>
//         <div className="Transactions-card Transactions-refunded">
//           <div className="Transactions-card-icon">🏪</div>
//           <div className="Transactions-card-content">
//             <div className="Transactions-amount">
//               ${summaryStats.refunded.toLocaleString()}
//             </div>
//             <div className="Transactions-label">Refunded Transaction</div>
//           </div>
//         </div>
//       </div>

//       {/* Table Section */}
//       <div className="Transactions-table-section">
//         <div className="Transactions-table-header">
//           <h3>
//             Order Transactions
//             <span className="TransactionsList-badge">
//               {filteredTransactions.length}
//             </span>
//           </h3>

//           <div className="Pending-search-container">
//             <div className="Pending-search-input-container">
//               <input
//                 type="text"
//                 placeholder="Search by Order ID"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="Transactions-search-input"
//               />
//               <button className="Pending-search-button">
//                 <Search size={24} />
//               </button>
//             </div>
//           </div>
//         </div>

//         <div
//           className={`Transactions-table-container ${
//             paginatedTransactions.length === 0 ? "Transactions-no-data" : ""
//           }`}
//         >
//           {paginatedTransactions.length === 0 ? (
//             <div className="Transactions-no-data-message">
//               <div className="Transactions-no-data-icon">📊</div>
//               <h3>No Data Found</h3>
//               <p>No transactions match your current filter criteria.</p>
//             </div>
//           ) : (
//             <table className="Transactions-transactions-table">
//               <thead>
//                 <tr>
//                   <th>SI</th>
//                   <th>Order Id</th>
//                   <th>Restaurant</th>
//                   <th>Customer Name</th>
//                   <th>Total Item Amount</th>
//                   <th>Item Discount</th>
//                   <th>Coupon Discount</th>
//                   <th>Referral Discount</th>
//                   <th>Discounted Amount</th>
//                   <th>Vat/Tax</th>
//                   <th>Delivery Charge</th>
//                   <th>Order Amount</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {paginatedTransactions.map((transaction, index) => (
//                   <tr key={transaction.id}>
//                     <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
//                     <td className="Transactions-order-id">
//                       {transaction.orderId}
//                     </td>
//                     <td>{transaction.restaurant}</td>
//                     <td>{transaction.customerName}</td>
//                     <td>${transaction.totalAmount.toFixed(2)}</td>
//                     <td>${transaction.itemDiscount.toFixed(2)}</td>
//                     <td>${transaction.couponDiscount.toFixed(2)}</td>
//                     <td>${transaction.referralDiscount.toFixed(2)}</td>
//                     <td>${transaction.discountedAmount.toFixed(2)}</td>
//                     <td>${transaction.vatTax.toFixed(2)}</td>
//                     <td>${transaction.deliveryCharge.toFixed(2)}</td>
//                     <td className="Transactions-order-amount">
//                       ${transaction.orderAmount.toFixed(2)}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )}
//         </div>

//         {/* Pagination */}
//         {filteredTransactions.length > itemsPerPage && (
//           <div className="Transactions-pagination">
//             <button
//               onClick={goToFirstPage}
//               disabled={currentPage === 1}
//               className="Transactions-pagination-button"
//             >
//               &lt;
//             </button>
//             {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//               <button
//                 key={page}
//                 onClick={() => handlePageChange(page)}
//                 className={`Transactions-pagination-button ${
//                   currentPage === page ? "Transactions-active-page" : ""
//                 }`}
//               >
//                 {page}
//               </button>
//             ))}
//             <button
//               onClick={goToLastPage}
//               disabled={currentPage === totalPages}
//               className="Transactions-pagination-button"
//             >
//               &gt;
//             </button>
//           </div>
//         )}
//       </div>
//   </div>
//  );
//};

//export default TransactionReport;

"use client";

import { useState, useMemo } from "react";
import "./TransactionReport.css";
import { Search } from "lucide-react";

const TransactionReport = () => {
  // Sample transaction data
  const [allTransactions] = useState([
    {
      id: 1,
      orderId: "100157",
      restaurant: "Hungry Puppets",
      customerName: " Binod Kumar",
      totalAmount: 1720.0,
      itemDiscount: 0.0,
      couponDiscount: 0.0,
      referralDiscount: 0.0,
      discountedAmount: 0.0,
      vatTax: 86.0,
      deliveryCharge: 583.99,
      orderAmount: 2399.99,
      date: new Date("2025-01-15"),
    },
    {
      id: 2,
      orderId: "100156",
      restaurant: "Hungry Puppets",
      customerName: "Jivan Kumar",
      totalAmount: 700.0,
      itemDiscount: 110.0,
      couponDiscount: 0.0,
      referralDiscount: 0.0,
      discountedAmount: 110.0,
      vatTax: 29.5,
      deliveryCharge: 687.14,
      orderAmount: 6316.64,
      date: new Date("2025-01-10"),
    },
    {
      id: 3,
      orderId: "100155",
      restaurant: "Hungry Puppets",
      customerName: "Sandhya Shah",
      totalAmount: 710.0,
      itemDiscount: 110.0,
      couponDiscount: 0.0,
      referralDiscount: 0.0,
      discountedAmount: 110.0,
      vatTax: 30.0,
      deliveryCharge: 687.14,
      orderAmount: 2827.14,
      date: new Date("2024-15-05"),
    },
    {
      id: 4,
      orderId: "100154",
      restaurant: "Hungry Puppets",
      customerName: "Smirti Shrestha",
      totalAmount: 710.0,
      itemDiscount: 110.0,
      couponDiscount: 0.0,
      referralDiscount: 0.0,
      discountedAmount: 110.0,
      vatTax: 30.0,
      deliveryCharge: 687.14,
      orderAmount: 2827.14,
      date: new Date("2024-12-27"),
    },
    {
      id: 5,
      orderId: "100129",
      restaurant: "Hungry Puppets",
      customerName: "Jayanti Dhakal",
      totalAmount: 95.0,
      itemDiscount: 14.25,
      couponDiscount: 0.0,
      referralDiscount: 0.0,
      discountedAmount: 0.0,
      vatTax: 4.75,
      deliveryCharge: 30.0,
      orderAmount: 129.75,
      date: new Date("2025-02-20"),
    },
    {
      id: 6,
      orderId: "100129",
      restaurant: "Hungry Puppets",
      customerName: "Jay",
      totalAmount: 95.0,
      itemDiscount: 14.25,
      couponDiscount: 0.0,
      referralDiscount: 0.0,
      discountedAmount: 0.0,
      vatTax: 4.75,
      deliveryCharge: 30.0,
      orderAmount: 129.75,
      date: new Date("2025-01-20"),
    },
  ]);

  const [searchFilter, setSearchFilter] = useState("All data");
  const [searchTerm, setSearchTerm] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Filter transactions based on selected criteria
  const filteredTransactions = useMemo(() => {
    let filtered = [...allTransactions];
    const now = new Date();

    // Apply time-based filter
    switch (searchFilter) {
      case "This week":
        const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        filtered = filtered.filter((t) => t.date >= weekAgo);
        break;
      case "This Month":
        const monthAgo = new Date(now.getFullYear(), now.getMonth(), 1);
        filtered = filtered.filter((t) => t.date >= monthAgo);
        break;
      case "This year":
        const yearStart = new Date(now.getFullYear(), 0, 1);
        filtered = filtered.filter((t) => t.date >= yearStart);
        break;
      case "Custom":
        if (fromDate && toDate) {
          const from = new Date(fromDate);
          const to = new Date(toDate);
          filtered = filtered.filter((t) => t.date >= from && t.date <= to);
        }
        break;
      default:
        // 'All data' - no filtering
        break;
    }

    // Apply search term filter
    if (searchTerm) {
      filtered = filtered.filter(
        (t) =>
          t.orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
          t.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          t.restaurant.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [allTransactions, searchFilter, searchTerm, fromDate, toDate]);

  // Calculate summary statistics
  const summaryStats = useMemo(() => {
    const completed = filteredTransactions.reduce(
      (sum, t) => sum + t.orderAmount,
      0
    );
    const onHold = 35400; // Static for demo
    const refunded = 0; // Static for demo

    return { completed, onHold, refunded };
  }, [filteredTransactions]);

  // Pagination logic
  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);
  const paginatedTransactions = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredTransactions.slice(startIndex, endIndex);
  }, [filteredTransactions, currentPage, itemsPerPage]);

  const handleFilterChange = (e) => {
    setSearchFilter(e.target.value);
    if (e.target.value !== "Custom") {
      setFromDate("");
      setToDate("");
    }
    setCurrentPage(1); // Reset to first page when filter changes
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const goToFirstPage = () => {
    setCurrentPage(1);
  };

  const goToLastPage = () => {
    setCurrentPage(totalPages);
  };

  return (
    <div className="Transactions-transaction-report">
      {/* Header */}
      <div className="Transactions-header">
        <div className="Transactions-header-left">
          <div className="Transactions-icon">🏪</div>
          <h1>Transaction Report</h1>
        </div>
      </div>

      {/* Search Data Section */}
      <div className="Transactions-search-section-container">
        <div className="Transactions-search-section">
          <h3>Search Data</h3>
          <div className="Transactions-search-controls">
            <select
              value={searchFilter}
              onChange={handleFilterChange}
              className="Transactions-search-dropdown"
            >
              <option value="All data">All data</option>
              <option value="This week">This week</option>
              <option value="This Month">This Month</option>
              <option value="This year">This year</option>
              <option value="Custom">Custom</option>
            </select>

            {searchFilter === "Custom" && (
              <div className="Transactions-date-inputs">
                <div className="Transactions-date-input-group">
                  <span className="Transactions-clock-icon">🕐</span>
                  <input
                    type="date"
                    placeholder="From"
                    value={fromDate}
                    onChange={(e) => setFromDate(e.target.value)}
                    className="Transactions-date-input"
                  />
                </div>
                <div className="Transactions-date-input-group">
                  <span className="Transactions-clock-icon">🕐</span>
                  <input
                    type="date"
                    placeholder="To"
                    value={toDate}
                    onChange={(e) => setToDate(e.target.value)}
                    className="Transactions-date-input"
                  />
                </div>
              </div>
            )}

            <button className="Transactions-filter-btn">Filter</button>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="Transactions-summary-cards">
        <div className="Transactions-card Transactions-completed">
          <div className="Transactions-card-icon">🏪</div>
          <div className="Transactions-card-content">
            <div className="Transactions-amount">
              ${summaryStats.completed.toLocaleString()}
            </div>
            <div className="Transactions-label">Completed Transaction</div>
          </div>
        </div>
        <div className="Transactions-card Transactions-on-hold">
          <div className="Transactions-card-icon">🏪</div>
          <div className="Transactions-card-content">
            <div className="Transactions-amount">
              ${summaryStats.onHold.toLocaleString()}
            </div>
            <div className="Transactions-label">On Hold Transaction</div>
          </div>
        </div>
        <div className="Transactions-card Transactions-refunded">
          <div className="Transactions-card-icon">🏪</div>
          <div className="Transactions-card-content">
            <div className="Transactions-amount">
              ${summaryStats.refunded.toLocaleString()}
            </div>
            <div className="Transactions-label">Refunded Transaction</div>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="Transactions-table-section">
        <div className="Transactions-table-header">
          <h3>
            Order Transactions
            <span className="TransactionsList-badge">
              {filteredTransactions.length}
            </span>
          </h3>

          <div className="Pending-search-container">
            <div className="Pending-search-input-container">
              <input
                type="text"
                placeholder="Search by Order ID"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="Transactions-search-input"
              />
              <button className="Pending-search-button">
                <Search size={24} />
              </button>
            </div>
          </div>
        </div>

        <div
          className={`Transactions-table-container ${
            paginatedTransactions.length === 0 ? "Transactions-no-data" : ""
          }`}
        >
          {paginatedTransactions.length === 0 ? (
            <div className="Transactions-no-data-message">
              <div className="Transactions-no-data-icon">📊</div>
              <h3>No Data Found</h3>
              <p>No transactions match your current filter criteria.</p>
            </div>
          ) : (
            <table className="Transactions-transactions-table">
              <thead>
                <tr>
                  <th>SI</th>
                  <th>Order Id</th>
                  <th>Restaurant</th>
                  <th>Customer Name</th>
                  <th>Total Item Amount</th>
                  <th>Item Discount</th>
                  <th>Coupon Discount</th>
                  <th>Referral Discount</th>
                  <th>Discounted Amount</th>
                  <th>Vat/Tax</th>
                  <th>Delivery Charge</th>
                  <th>Order Amount</th>
                </tr>
              </thead>
              <tbody>
                {paginatedTransactions.map((transaction, index) => (
                  <tr key={transaction.id}>
                    <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
                    <td className="Transactions-order-id">
                      {transaction.orderId}
                    </td>
                    <td>{transaction.restaurant}</td>
                    <td>{transaction.customerName}</td>
                    <td>${transaction.totalAmount.toFixed(2)}</td>
                    <td>${transaction.itemDiscount.toFixed(2)}</td>
                    <td>${transaction.couponDiscount.toFixed(2)}</td>
                    <td>${transaction.referralDiscount.toFixed(2)}</td>
                    <td>${transaction.discountedAmount.toFixed(2)}</td>
                    <td>${transaction.vatTax.toFixed(2)}</td>
                    <td>${transaction.deliveryCharge.toFixed(2)}</td>
                    <td className="Transactions-order-amount">
                      ${transaction.orderAmount.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Pagination */}
        {filteredTransactions.length > itemsPerPage && (
          <div className="Transactions-pagination">
            <button
              onClick={goToFirstPage}
              disabled={currentPage === 1}
              className="Transactions-pagination-nav"
            >
              &lt;
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`Transactions-pagination-button ${
                  currentPage === page ? "Transactions-active-page" : ""
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={goToLastPage}
              disabled={currentPage === totalPages}
              className="Transactions-pagination-nav"
            >
              &gt;
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TransactionReport;

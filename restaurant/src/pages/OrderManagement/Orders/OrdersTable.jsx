"use client";

import React, { useState, useMemo } from "react";
import { FaPrint, FaEye, FaSearch } from "react-icons/fa";

import "./OrdersTable.css";

const OrdersTable = () => {
  const [allOrders] = useState([
    {
      id: 1,
      orderId: "100161",
      orderDate: "20 Jun 2025",
      orderTime: "06:15 AM",
      customerName: "Binda Thapa",
      customerPhone: "+977********",
      totalAmount: 5400.5,
      orderStatus: "Pending",
      paymentStatus: "Unpaid",
      deliveryStatus: "Delivery",
    },
    {
      id: 2,
      orderId: "100160",
      orderDate: "05 Apr 2025",
      orderTime: "10:13 PM",
      customerName: "Mandip Kattel",
      customerPhone: "+977********",
      totalAmount: 1402.49,
      orderStatus: "Pending",
      paymentStatus: "Unpaid",
      deliveryStatus: "Delivery",
    },
    {
      id: 3,
      orderId: "100157",
      orderDate: "02 Jan 2024",
      orderTime: "06:44 AM",
      customerName: "Suman Karki",
      customerPhone: "+977*********",
      totalAmount: 2399.99,
      orderStatus: "Delivered",
      paymentStatus: "Paid",
      deliveryStatus: "Delivery",
    },
    {
      id: 4,
      orderId: "100156",
      orderDate: "21 Nov 2023",
      orderTime: "04:21 PM",
      customerName: "Puskay Phuyal",
      customerPhone: "+977********",
      totalAmount: 6316.64,
      orderStatus: "Delivered",
      paymentStatus: "Paid",
      deliveryStatus: "Delivery",
    },
    {
      id: 5,
      orderId: "100155",
      orderDate: "21 Nov 2023",
      orderTime: "04:08 PM",
      customerName: "Neha Shah",
      customerPhone: "+977********",
      totalAmount: 2827.14,
      orderStatus: "Delivered",
      paymentStatus: "Paid",
      deliveryStatus: "Delivery",
    },
    {
      id: 6,
      orderId: "100154",
      orderDate: "15 Nov 2023",
      orderTime: "02:30 PM",
      customerName: "Sanam Thapa",
      customerPhone: "+977********",
      totalAmount: 1250.0,
      orderStatus: "Pending",
      paymentStatus: "Unpaid",
      deliveryStatus: "Delivery",
    },
    {
      id: 7,
      orderId: "100153",
      orderDate: "10 Nov 2023",
      orderTime: "11:45 AM",
      customerName: "Drisya Giri",
      customerPhone: "+977*********",
      totalAmount: 3500.75,
      orderStatus: "Delivered",
      paymentStatus: "Paid",
      deliveryStatus: "Delivery",
    },
    {
      id: 8,
      orderId: "100152",
      orderDate: "08 Nov 2023",
      orderTime: "09:20 AM",
      customerName: "Nikita Khadka",
      customerPhone: "+977********",
      totalAmount: 890.25,
      orderStatus: "Cancelled",
      paymentStatus: "Refunded",
      deliveryStatus: "Cancelled",
    },
    {
      id: 9,
      orderId: "100151",
      orderDate: "05 Nov 2023",
      orderTime: "03:15 PM",
      customerName: "Saurab Katwal",
      customerPhone: "+977********",
      totalAmount: 4200.0,
      orderStatus: "Delivered",
      paymentStatus: "Paid",
      deliveryStatus: "Delivery",
    },
    {
      id: 10,
      orderId: "100150",
      orderDate: "01 Nov 2023",
      orderTime: "12:00 PM",
      customerName: "Eva Giri",
      customerPhone: "+977********",
      totalAmount: 1750.5,
      orderStatus: "Pending",
      paymentStatus: "Unpaid",
      deliveryStatus: "Delivery",
    },
    {
      id: 11,
      orderId: "100149",
      orderDate: "28 Oct 2023",
      orderTime: "05:30 PM",
      customerName: "Arjun Saud",
      customerPhone: "+977*********",
      totalAmount: 2100.0,
      orderStatus: "Delivered",
      paymentStatus: "Paid",
      deliveryStatus: "Delivery",
    },
    {
      id: 12,
      orderId: "100148",
      orderDate: "25 Oct 2023",
      orderTime: "08:45 AM",
      customerName: "Sisan Baniya",
      customerPhone: "+977*********",
      totalAmount: 3300.25,
      orderStatus: "Pending",
      paymentStatus: "Unpaid",
      deliveryStatus: "Delivery",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Filter orders based on search term
  const filteredOrders = useMemo(() => {
    if (!searchTerm) return allOrders;
    return allOrders.filter((order) =>
      order.orderId.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [allOrders, searchTerm]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentOrders = filteredOrders.slice(startIndex, endIndex);

  // Reset to first page when search changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleFirstPage = () => {
    setCurrentPage(1);
  };

  const handleLastPage = () => {
    setCurrentPage(totalPages);
  };

  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "All-status-pending";
      case "delivered":
        return "All-status-delivered";
      case "cancelled":
        return "All-status-cancelled";
      default:
        return "";
    }
  };

  const getPaymentStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case "paid":
        return "All-payment-paid";
      case "unpaid":
        return "All-payment-unpaid";
      case "refunded":
        return "All-payment-refunded";
      default:
        return "";
    }
  };

  const renderPagination = () => {
    if (totalPages <= 1) return null;

    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return (
      <div className="All-pagination">
        <button
          className="All-pagination-nav"
          onClick={handleFirstPage}
          disabled={currentPage === 1}
        >
          {"<"}
        </button>

        {pages.map((page) => (
          <button
            key={page}
            className={`All-pagination-btn ${
              currentPage === page ? "All-active" : ""
            }`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}

        {endPage < totalPages && (
          <>
            <span className="All-pagination-ellipsis">...</span>
            <button
              className="All-pagination-btn"
              onClick={() => handlePageChange(totalPages)}
            >
              {totalPages}
            </button>
          </>
        )}

        <button
          className="All-pagination-nav"
          onClick={handleLastPage}
          disabled={currentPage === totalPages}
        >
          {">"}
        </button>
      </div>
    );
  };

  return (
    <div className="All-orders-container">
      <div className="All-orders-header">
        <div className="All-orders-title">
          <span className="All-orders-icon">
            <img
              className="All-orders-icon-img"
              src="https://stackfood-admin.6amtech.com/public/assets/admin/img/resturant-panel/page-title/order.png"
              alt=""
            />
          </span>
          <h2>
            All Orders{" "}
            <span className="All-orders-count">{filteredOrders.length}</span>
          </h2>
        </div>
        {/* <div className="All-search-container">
          <input
            type="text"
            placeholder="Ex : Search by Order Id"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="All-search-input"
          />
          <button className="All-search-btn">🔍</button>
        </div> */}
        <div className="Pending-search-container">
          <div className="Pending-search-input-container">
            <input
              type="text"
              placeholder="Ex : Search by Order Id"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="Pending-search-input"
            />
            <button className="Pending-search-button">
              <FaSearch size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="All-table-container">
        {currentOrders.length === 0 ? (
          <div className="All-no-data">
            <p>No data found</p>
          </div>
        ) : (
          <table className="All-orders-table">
            <thead>
              <tr>
                <th>SI</th>
                <th>Order ID</th>
                <th>Order Date</th>
                <th>Customer Information</th>
                <th>Total Amount</th>
                <th>Order Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentOrders.map((order, index) => (
                <tr key={order.id}>
                  <td>{startIndex + index + 1}</td>
                  <td className="All-order-id">{order.orderId}</td>
                  <td>
                    <div className="All-date-time">
                      <div>{order.orderDate}</div>
                      <div className="All-time">{order.orderTime}</div>
                    </div>
                  </td>
                  <td>
                    <div className="All-customer-info">
                      <div className="All-customer-name">
                        {order.customerName}
                      </div>
                      <div className="All-customer-phone">
                        {order.customerPhone}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="All-amount-info">
                      <div className="All-amount">
                        ${order.totalAmount.toFixed(2)}
                      </div>
                      <div
                        className={`All-payment-status ${getPaymentStatusClass(
                          order.paymentStatus
                        )}`}
                      >
                        {order.paymentStatus}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="All-status-info">
                      <div
                        className={`All-order-status ${getStatusClass(
                          order.orderStatus
                        )}`}
                      >
                        {order.orderStatus}
                      </div>
                      <div className="All-delivery-status">
                        {order.deliveryStatus}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="All-actions">
                      <button
                        className="All-action-btn All-view-btn"
                        title="View"
                      >
                        <FaEye size={18} />
                      </button>
                      <button
                        className="All-action-btn All-print-btn"
                        title="Print"
                      >
                        <FaPrint size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {renderPagination()}
    </div>
  );
};

export default OrdersTable;

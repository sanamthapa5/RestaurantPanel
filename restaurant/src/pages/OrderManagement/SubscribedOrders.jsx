// // "use client"

import { useState } from "react";
import "./SubscribedOrders.css";
import { Search, Info, Eye } from "lucide-react";

const SubscribedOrders = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      orderId: "100102",
      customer: "Sanam Thapa",
      type: "Daily",
      status: "Expired",
      startDate: "2023-05-31",
      expireDate: "2023-06-07",
    },
    {
      id: 2,
      orderId: "100101",
      customer: "Mr.Somebody",
      type: "Daily",
      status: "Expired",
      startDate: "2023-05-31",
      expireDate: "2023-06-14",
    },
    {
      id: 3,
      orderId: "100100",
      customer: "Fnhg Vjjh",
      type: "Daily",
      status: "Expired",
      startDate: "2023-05-31",
      expireDate: "2023-06-14",
    },
    {
      id: 4,
      orderId: "100098",
      customer: "Fufh Cgchc",
      type: "Daily",
      status: "Expired",
      startDate: "2023-05-31",
      expireDate: "2023-06-14",
    },
    {
      id: 5,
      orderId: "100097",
      customer: "Fufh Cgchc",
      type: "Daily",
      status: "Expired",
      startDate: "2023-05-31",
      expireDate: "2023-06-14",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = (key, direction) => {
    setSortConfig({ key, direction });

    const sortedOrders = [...orders].sort((a, b) => {
      if (key === "startDate" || key === "expireDate") {
        const dateA = new Date(a[key]);
        const dateB = new Date(b[key]);
        return direction === "asc" ? dateA - dateB : dateB - dateA;
      } else {
        const valueA = a[key].toString().toLowerCase();
        const valueB = b[key].toString().toLowerCase();
        if (valueA < valueB) return direction === "asc" ? -1 : 1;
        if (valueA > valueB) return direction === "asc" ? 1 : -1;
        return 0;
      }
    });

    setOrders(sortedOrders);
  };

  return (
    <div className="subscribed-orders-container">
      <div className="Subscribed-Header">
        <div className="title-section">
          <div className="icon-container">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 2V6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 2V6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 10H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h1>
            Subscribed Orders <span className="order-count">5</span>
          </h1>
        </div>
        <div className="info-section">
          <button className="info-button">
            See how it works <Info size={16} />
          </button>
        </div>
      </div>

      <div className="Subscribed-search-section">
        <div className="Subscribed-search-container">
          <input
            type="text"
            placeholder="Search by Order ID"
            value={searchTerm}
            onChange={handleSearch}
            className="Subscribed-search-input"
          />
          <button className="Subscribed-search-button">
            <Search size={18} />
          </button>
        </div>
      </div>

      <div className="table-container">
        <table className="orders-table">
          <thead>
            <tr>
              <th className="column-number">#</th>
              <th className="column-id">
                Order Id
                <span
                  className={`sort-asc ${
                    sortConfig.key === "orderId" &&
                    sortConfig.direction === "asc"
                      ? "active"
                      : ""
                  }`}
                  onClick={() => handleSort("orderId", "asc")}
                >
                  ▲
                </span>
                <span
                  className={`sort-desc ${
                    sortConfig.key === "orderId" &&
                    sortConfig.direction === "desc"
                      ? "active"
                      : ""
                  }`}
                  onClick={() => handleSort("orderId", "desc")}
                >
                  ▼
                </span>
              </th>
              <th className="column-customer">
                Customer
                <span
                  className={`sort-asc ${
                    sortConfig.key === "customer" &&
                    sortConfig.direction === "asc"
                      ? "active"
                      : ""
                  }`}
                  onClick={() => handleSort("customer", "asc")}
                >
                  ▲
                </span>
                <span
                  className={`sort-desc ${
                    sortConfig.key === "customer" &&
                    sortConfig.direction === "desc"
                      ? "active"
                      : ""
                  }`}
                  onClick={() => handleSort("customer", "desc")}
                >
                  ▼
                </span>
              </th>
              <th className="column-type">
                Type
                <span
                  className={`sort-asc ${
                    sortConfig.key === "type" && sortConfig.direction === "asc"
                      ? "active"
                      : ""
                  }`}
                  onClick={() => handleSort("type", "asc")}
                >
                  ▲
                </span>
                <span
                  className={`sort-desc ${
                    sortConfig.key === "type" && sortConfig.direction === "desc"
                      ? "active"
                      : ""
                  }`}
                  onClick={() => handleSort("type", "desc")}
                >
                  ▼
                </span>
              </th>
              <th className="column-status">
                Status
                <span
                  className={`sort-asc ${
                    sortConfig.key === "status" &&
                    sortConfig.direction === "asc"
                      ? "active"
                      : ""
                  }`}
                  onClick={() => handleSort("status", "asc")}
                >
                  ▲
                </span>
                <span
                  className={`sort-desc ${
                    sortConfig.key === "status" &&
                    sortConfig.direction === "desc"
                      ? "active"
                      : ""
                  }`}
                  onClick={() => handleSort("status", "desc")}
                >
                  ▼
                </span>
              </th>
              <th className="column-start-date">
                Start Date
                <span
                  className={`sort-asc ${
                    sortConfig.key === "startDate" &&
                    sortConfig.direction === "asc"
                      ? "active"
                      : ""
                  }`}
                  onClick={() => handleSort("startDate", "asc")}
                >
                  ▲
                </span>
                <span
                  className={`sort-desc ${
                    sortConfig.key === "startDate" &&
                    sortConfig.direction === "desc"
                      ? "active"
                      : ""
                  }`}
                  onClick={() => handleSort("startDate", "desc")}
                >
                  ▼
                </span>
              </th>
              <th className="column-expire-date">
                Expire Date
                <span
                  className={`sort-asc ${
                    sortConfig.key === "expireDate" &&
                    sortConfig.direction === "asc"
                      ? "active"
                      : ""
                  }`}
                  onClick={() => handleSort("expireDate", "asc")}
                >
                  ▲
                </span>
                <span
                  className={`sort-desc ${
                    sortConfig.key === "expireDate" &&
                    sortConfig.direction === "desc"
                      ? "active"
                      : ""
                  }`}
                  onClick={() => handleSort("expireDate", "desc")}
                >
                  ▼
                </span>
              </th>
              <th className="column-action">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders
              .filter((order) =>
                order.orderId.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td className="order-id">{order.orderId}</td>
                  <td>{order.customer}</td>
                  <td>{order.type}</td>
                  <td>
                    <span className="status-badge">
                      <span className="status-dot"></span>
                      {order.status}
                    </span>
                  </td>
                  <td>{order.startDate}</td>
                  <td>{order.expireDate}</td>
                  <td>
                    <button className="action-button">
                      <Eye size={18} />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubscribedOrders;

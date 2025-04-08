// "use client"

import { useState } from "react";
import "./DisbursementReport.css";
import { Search, Download, Home } from "lucide-react";

const DisbursementReport = () => {
  const [searchId, setSearchId] = useState("")

  // Sample data for the table
  const disbursements = [
    {
      id: "#P002",
      createdAt: "21 Nov 2023 04:33 pm",
      amount: 6012.78,
      paymentMethod: "6cash",
      status: "Pending",
    },
  ]

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="header-title">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
         <div className="title"><h1>Disbursement Report</h1></div> 
        </div>
      </header>

      <div className="status-cards">
        <div className="status-card pending">
          <div className="icon-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
              <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path>
              <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path>
            </svg>
          </div>
          <div className="amount">$ 6,012.78</div>
          <div className="label">Pending Disbursements</div>
          <div className="indicator">1</div>
        </div>

        <div className="status-card completed">
          <div className="icon-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
              <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path>
              <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path>
            </svg>
          </div>
          <div className="amount">$ 0.00</div>
          <div className="label">Completed Disbursements</div>
          <div className="indicator">0</div>
        </div>

        <div className="status-card canceled">
          <div className="icon-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
              <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path>
              <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path>
            </svg>
          </div>
          <div className="amount">$ 0.00</div>
          <div className="label">Canceled Transactions</div>
          <div className="indicator">0</div>
        </div>
      </div>

      <div className="search-section">
        {/* <div className="SearchTitle"><h2>Search Data</h2></div> */}
        <div className="search-data">
          <div className="dropdown-container">
            <select className="dropdown">
              <option>All Payment Method</option>
              <option>6cash</option>
              <option>card</option>
            </select>
            <select className="dropdown">
              <option>All status</option>
              <option>pending</option>
              <option>Completed</option>
              <option>Cancelled</option>
            </select>
            <select className="dropdown">
              <option>All Time</option>
              <option>This Year</option>
              <option>Previous Year</option>
              <option>This Month</option>
              <option>This Week</option>
              <option>Custom</option>
            </select>
          </div>
          <button className="filter-button">Filter</button>
        </div>
      </div>

      <div className="disbursements-section">
        <div className="section-header">
          <div className="section-title">
            <h2>Total Disbursements</h2>
            <span className="count">1</span>
          </div>
          <div className="search-actions">
            <div className="search-by-id">
              <input
                type="text"
                placeholder="Search by Id"
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
              />
              <button className="search-button">
                <Search size={16} />
              </button>
            </div>
            <button className="export-button">
              <Download size={16} />
              Export
            </button>
          </div>
        </div>

        <div className="table-container">
          <table className="disbursements-table">
            <thead>
              <tr>
                <th>SI</th>
                <th>Id</th>
                <th>Created At</th>
                <th>Disburse Amount</th>
                <th>Payment Method</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {disbursements.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.id}</td>
                  <td>{item.createdAt}</td>
                  <td>$ {item.amount.toFixed(2)}</td>
                  <td>{item.paymentMethod}</td>
                  <td>
                    <span className={`status-badge ${item.status.toLowerCase()}`}>{item.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
{/* 
      <footer className="dashboard-footer">
        <div className="brand">© Hungry Puppets.</div>
        <div className="footer-links">
          <a href="#">Restaurant settings</a>
          <a href="#">Profile</a>
          <a href="#" className="home-link">
            <Home size={16} />
          </a>
        </div>
      </footer> */}
    </div>
  );
};

export default DisbursementReport;


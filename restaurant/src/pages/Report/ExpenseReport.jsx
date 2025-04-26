// "use client";

import { useState } from "react";
import { Search, Download } from "lucide-react";
import "./ExpenseReport.css";

const ExpenseReport = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [timeFilter, setTimeFilter] = useState("All Time");

  // Sample expense data
  const expenses = [
    {
      id: 1,
      orderId: "100156",
      date: "21 Nov 2023 04:22 pm",
      type: "Discount On Product",
      customer: "John Doe",
      amount: 99.0,
    },
    {
      id: 2,
      orderId: "100155",
      date: "21 Nov 2023 04:09 pm",
      type: "Discount On Product",
      customer: "John Doe",
      amount: 99.0,
    },
    {
      id: 3,
      orderId: "100154",
      date: "26 Apr 2025 04:06 pm",
      type: "Discount On Product",
      customer: "John Doe",
      amount: 99.0,
    },
    {
      id: 4,
      orderId: "100113",
      date: "01 Jun 2023 10:52 am",
      type: "Discount On Product",
      customer: "Purno Test",
      amount: 27.0,
    },
    {
      id: 5,
      orderId: "100095",
      date: "07 Feb 2023 05:46 pm",
      type: "Coupon Discount",
      customer: "Munam ShahariEr",
      amount: 19.13,
    },
    {
      id: 6,
      orderId: "100094",
      date: "07 Feb 2023 05:25 pm",
      type: "Coupon Discount",
      customer: "Jane Doe",
      amount: 35.7,
    },
    {
      id: 7,
      orderId: "100035",
      date: "07 Feb 2023 05:08 pm",
      type: "Discount On Product",
      customer: "Customer 7",
      amount: 83.7,
    },
  ];

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleTimeFilterChange = (e) => {
    setTimeFilter(e.target.value);
  };

  const filteredExpenses = expenses.filter((expense) =>
    expense.orderId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="expense-container">
      <div className="expense-report">
        <h1>Expense Report</h1>
        <p className="expense-description">
          Here, you'll find the discounted order list that is considered as
          restaurant expenses. Such as restaurant discounts, coupon discounts,
          item discounts, etc.
        </p>

        <div className="ExpenseSearch-data">
          <h2>Search Data</h2>
          <div className="filter-container">
            <select
              className="time-filter"
              value={timeFilter}
              onChange={handleTimeFilterChange}
            >
              <option value="All Time">All Time</option>
              <option value="Today">Today</option>
              <option value="This Week">This Week</option>
              <option value="This Month">This Month</option>
              <option value="This Year">This Year</option>
            </select>

            <button className="filter-button">Filter</button>
          </div>
        </div>

        <div className="expense-lists">
          <div className="expense-header">
            <h2>
              Expense Lists{" "}
              <span className="count">{filteredExpenses.length}</span>
            </h2>
            <div className="expense-actions">
              <div className="ExpenseSearch-container">
                <input
                  type="text"
                  placeholder="Search by Order ID"
                  value={searchTerm}
                  onChange={handleSearch}
                  className="ExpenseSearch-input"
                />
                <button className="ExpenseSearch-button">
                  <Search size={18} />
                </button>
              </div>
              <div className="ExpenseExport-container">
                <button className="ExpenseExport-button">
                  <Download size={18} />
                  <span>Export</span>
                </button>
              </div>
            </div>
          </div>

          <div className="expense-table-container">
            <table className="expense-table">
              <thead>
                <tr>
                  <th>SI</th>
                  <th>Order Id</th>
                  <th>Date & Time</th>
                  <th>Expense Type</th>
                  <th>Customer Name</th>
                  <th>Expense Amount</th>
                </tr>
              </thead>
              <tbody>
                {filteredExpenses.map((expense) => (
                  <tr key={expense.id}>
                    <td>{expense.id}</td>
                    <td className="order-id">{expense.orderId}</td>
                    <td>{expense.date}</td>
                    <td>{expense.type}</td>
                    <td>{expense.customer}</td>
                    <td className="amount">$ {expense.amount.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseReport;

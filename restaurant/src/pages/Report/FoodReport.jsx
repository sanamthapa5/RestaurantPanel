

import { useState } from "react";
import "./FoodReport.css";

function FoodReport() {
  const [searchTerm, setSearchTerm] = useState("")
  const [category, setCategory] = useState("All Categories")
  const [type, setType] = useState("All types")
  const [timeRange, setTimeRange] = useState("All Time")

  // Sample data for the chart and table
  const chartData = [
    { year: 2021, amount: 3500 },
    { year: 2022, amount: 4000 },
    { year: 2023, amount: 4500 },
    { year: 2024, amount: 2500 },
  ]

  const tableData = [
    {
      id: 1,
      name: "Medu Vada",
      image :" https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-6120e7a4b7b2a.png",
      orderCount: 11,
      price: 95.0,
      totalAmount: 1175.0,
      totalDiscount: 147.75,
      averageSale: 93.39,
      rating: 5,
      ratingCount: 10,
    },
    {
      id: 2,
      name: "Meat Pizza",
      image: "https://stackfood-admin.6amtech.com/storage/app/public/product/2024-12-22-6767fd551e8fc.png",
      orderCount: 10,
      price: 400.0,
      totalAmount: 7550.0,
      totalDiscount: 1042.5,
      averageSale: 650.75,
      rating: 4.5,
      ratingCount: 33,
    },
    {
      id: 3,
      name: "grilled lemon herb Mediterranean chicken salad",
      image: "https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-6120e72547646.png",
      orderCount: 4,
      price: 320.0,
      totalAmount: 2680.0,
      totalDiscount: 144.0,
      averageSale: 634.0,
      rating: 5,
      ratingCount: 19,
    },
    {
      id: 4,
      name: "Cheese Pizza",
      image: "https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-6120e61452e2b.png",
      orderCount: 1,
      price: 250.0,
      totalAmount: 250.0,
      totalDiscount: 37.5,
      averageSale: 212.5,
      rating: 5,
      ratingCount: 10,
    },
  ]

  // Filter table data based on search term
  const filteredData = tableData.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()))

  // Calculate the max value for the chart to set the height properly
  const maxChartValue = Math.max(...chartData.map((item) => item.amount))

  // Calculate average yearly sales value
  const totalSales = tableData.reduce((sum, item) => sum + item.totalAmount, 0)
  const averageYearlySales = totalSales / 4 // Assuming 4 years of data

  // Function to render star ratings
  const renderStars = (rating, count) => {
    return (
      <div className="rating-container">
        <div className="stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star} className="star">
              {star <= Math.floor(rating) ? "★" : star - 0.5 <= rating ? "★" : "☆"}
            </span>
          ))}
        </div>
        <span className="rating-count">({count})</span>
      </div>
    )
  }

  return (
    <div className="food-report-container">
      {/* Header */}
      <div className="Foodheader">
        <div className="menu-icon">☰</div>
        <h1>Food Report</h1>
      </div>

      {/* Search Filters */}
      <div className="search-filters">
        <h2>Search Data</h2>
        <div className="filters-row">
          <div className="select-container">
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="All Categories">All Categories</option>
              <option value="Pizza">Pizza</option>
              <option value="Indian">Indian</option>
              <option value="Grilled">Grilled</option>
            </select>
          </div>

          <div className="select-container">
            <select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="All types">All types</option>
              <option value="Vegetarian">Vegetarian</option>
              <option value="Non-Vegetarian">Non-Vegetarian</option>
            </select>
          </div>

          <div className="select-container">
            <select value={timeRange} onChange={(e) => setTimeRange(e.target.value)}>
              <option value="All Time">All Time</option>
              <option value="This Year">This Year</option>
              <option value="This Month">This Month</option>
              <option value="This Week">This Week</option>
            </select>
          </div>

          <button className="filter-button">Filter</button>
        </div>
      </div>

      {/* Sales Statistics */}
      <div className="sales-statistics">
        <div className="statistics-header">
          <div className="section-title">
            <div className="indicator-bar"></div>
            <h2>Sales Statistics</h2>
          </div>
          <div className="average-sales">
            Average Yearly Sales Value: <span>${averageYearlySales.toFixed(2)}</span>
          </div>
        </div>

        {/* Chart */}
        <div className="chart-container">
          {chartData.map((item, index) => (
            <div key={index} className="chart-column">
              <div
                className="chart-bar"
                style={{
                  height: `${(item.amount / maxChartValue) * 200}px`,
                }}
              ></div>
              <div className="year">{item.year}</div>
            </div>
          ))}
        </div>
        <div className="chart-legend">
          <div className="legend-item">
            <div className="legend-color"></div>
            <span>Total Amount Sold</span>
          </div>
        </div>
      </div>

      {/* Food Report Table */}
      <div className="food-report-table">
        <div className="table-header">
          <h2>
            Food Report Table <span className="count">5</span>
          </h2>
          <div className="table-actions">
            <div className="search-box">
              <input
                type="text"
                placeholder="Search by food name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="search-icon">🔍</div>
            </div>
            <button className="export-button">
              <span className="download-icon">↓</span> Export
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>SI</th>
                <th>Name</th>
                <th>Order Count</th>
                <th>Price</th>
                <th>Total Amount Sold</th>
                <th>Total Discount Given</th>
                <th>Average Sale Value</th>
                <th>Average Ratings</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>
                    <div className="food-item">
                      <div className="food-image">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          onError={(e) => {
                            e.target.src = "https://via.placeholder.com/40"
                          }}
                        />
                      </div>
                      <span className="food-name">{item.name}</span>
                    </div>
                  </td>
                  <td>{item.orderCount}</td>
                  <td>$ {item.price.toFixed(2)}</td>
                  <td>$ {item.totalAmount.toFixed(2)}</td>
                  <td>$ {item.totalDiscount.toFixed(2)}</td>
                  <td>$ {item.averageSale.toFixed(2)}</td>
                  <td>{renderStars(item.rating, item.ratingCount)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FoodReport

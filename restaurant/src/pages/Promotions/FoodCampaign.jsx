// "use client"

import { useState } from "react";
import { Search, Settings } from "lucide-react";
import "./FoodCampaign.css";

const FoodCampaign = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const foodItems = [
    {
      id: 1,
      title: "Cappuccino Coffee",
      date: "29 Dec 2024 - 27 Aug 2025",
      time: "02:00 pm - 10:00 pm",
      price: 50,
    },
    {
      id: 2,
      title: "Cheese Burger",
      date: "29 Dec 2024 - 04 Jun 2025",
      time: "02:50 am - 07:50 pm",
      price: 150,
    },
    {
      id: 3,
      title: "Spicy Crab Early Food",
      date: "29 Dec 2024 - 21 Aug 2025",
      time: "12:01 am - 11:59 pm",
      price: 400,
    },
  ];

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredItems = foodItems.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="food-campaign-container">
      <div className="Foodheader">
        <div className="title-section">
          <div className="megaphone-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 11l18-5v12L3 14v-3z"></path>
              <path d="M11.6 16.8a3 3 0 11-5.8-1.6"></path>
            </svg>
          </div>
          <h1 class>Food Campaign</h1>
          <div className="count-badge">3</div>
        </div>
      </div>
      <div className="FoodCampaignBox">
        <div className="search-section">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search by title"
              value={searchTerm}
              onChange={handleSearch}
            />
            <button className="CampaignSearchButton">
              <Search size={18} />
            </button>
          </div>
        </div>

        <div className="table-container">
          <table className="food-table">
            <thead>
              <tr>
                <th className="si-column">SI</th>
                <th className="title-column">Title</th>
                <th className="date-column">Date</th>
                <th className="time-column">Time</th>
                <th className="price-column">Price</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.date}</td>
                  <td>{item.time}</td>
                  <td>{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FoodCampaign;

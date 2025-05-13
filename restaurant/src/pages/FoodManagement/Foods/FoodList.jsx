// "use client";

import { useState } from "react";
import "./../Foods/FoodList.css";
import { Search, Edit, Trash2, Sheet } from "lucide-react";

const FoodList = () => {
  const [foods, setFoods] = useState([
    {
      id: 1,
      name: "Medu Vada",
      category: "Varieties",
      price: 95,
      recommended: true,
      status: true,
      image:
        "https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-6120e7a4b7b2a.png",
    },
    {
      id: 2,
      name: "grilled lemon herb M...",
      category: "Varieties",
      price: 320,
      recommended: true,
      status: true,
      image:
        "https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-6120e72547646.png",
    },
    {
      id: 3,
      name: "Meat Pizza",
      category: "Italian",
      price: 400,
      recommended: true,
      status: true,
      image:
        "https://stackfood-admin.6amtech.com/storage/app/public/product/2024-12-22-6767fd551e8fc.png",
    },
    {
      id: 4,
      name: "Cheese Pizza",
      category: "Italian",
      price: 250,
      recommended: false,
      status: true,
      image:
        "https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-6120e61452e2b.png",
    },
    {
      id: 5,
      name: "Thai Fried Rice",
      category: "Varieties",
      price: 160,
      recommended: false,
      status: true,
      image:
        "https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-6120e5955e1d1.png",
    },
    {
      id: 6,
      name: "FRIED RICE",
      category: "Varieties",
      price: 120,
      recommended: false,
      status: true,
      image:
        "https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-6120e4dcd5194.png",
    },
    {
      id: 7,
      name: "Steak Kebabs",
      category: "Varieties",
      price: 160,
      recommended: false,
      status: true,
      image:
        "https://stackfood-admin.6amtech.com/storage/app/public/product/2021-08-21-6120e44ea58c5.png",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All categories");
  const [selectedFilter, setSelectedFilter] = useState("All");

  const handleToggle = (id, field) => {
    setFoods(
      foods.map((food) =>
        food.id === id ? { ...food, [field]: !food[field] } : food
      )
    );
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="FoodList-container">
      <div className="FoodList-header">
        <div className="FoodList-title">
          <h1>Food List</h1>
          <span className="FoodList-count">7</span>
        </div>
        <div className="FoodList-actions">
          <button className="FoodList-out-of-stock-btn">
            Out of Stock Foods
          </button>
          <button className="FoodList-add-food-btn">
            <span className="FoodList-plus-icon">+</span> Add New Food
          </button>
        </div>
      </div>

      <div className="FoodList-filters">
        <div className="Pending-search-container">
          <div className="Pending-search-input-container">
            <input
              type="text"
              placeholder="Ex : Search Food Name"
              value={searchTerm}
              onChange={handleSearch}
              className="Pending-search-input"
            />
            <button className="Pending-search-button">
              <Search size={20} />
            </button>
          </div>
        </div>

        <div className="FoodList-filter-dropdowns">
          <div className="FoodList-dropdown">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="FoodList-category-select"
            >
              <option>All categories</option>
              <option>Varieties</option>
              <option>Italian</option>
            </select>
          </div>

          <div className="FoodList-dropdown">
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="FoodList-filter-select"
            >
              <option>All</option>
              <option>Recommended</option>
              <option>Not Recommended</option>
            </select>
          </div>

          <button className="FoodList-columns-btn">
            <Sheet size={18} />

            <span>Columns</span>
          </button>
        </div>
      </div>

      <div className="FoodList-table-container">
        <table className="FoodList-table">
          <thead>
            <tr>
              <th className="FoodList-si-column">SI</th>
              <th className="FoodList-name-column">Name</th>
              <th className="FoodList-category-column">Category</th>
              <th className="FoodList-price-column">Price</th>
              <th className="FoodList-recommended-column">Recommended</th>
              <th className="FoodList-status-column">Status</th>
              <th className="FoodList-action-column">Action</th>
            </tr>
          </thead>
          <tbody>
            {foods.map((food) => (
              <tr key={food.id}>
                <td>{food.id}</td>
                <td className="FoodList-name-cell">
                  <img
                    src={food.image || "/placeholder.svg"}
                    alt={food.name}
                    className="FoodList-image"
                  />
                  <span>{food.name}</span>
                </td>
                <td>{food.category}</td>
                <td>{food.price}</td>
                <td>
                  <label className="FoodList-toggle">
                    <input
                      type="checkbox"
                      checked={food.recommended}
                      onChange={() => handleToggle(food.id, "recommended")}
                    />
                    <span className="FoodList-slider"></span>
                  </label>
                </td>
                <td>
                  <label className="FoodList-toggle">
                    <input
                      type="checkbox"
                      checked={food.status}
                      onChange={() => handleToggle(food.id, "status")}
                    />
                    <span className="FoodList-slider"></span>
                  </label>
                </td>
                <td className="FoodList-action-buttons">
                  <button className="FoodList-edit-btn">
                    <Edit size={16} />
                  </button>
                  <button className="FoodList-delete-btn">
                    <Trash2 size={16} />
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

export default FoodList;

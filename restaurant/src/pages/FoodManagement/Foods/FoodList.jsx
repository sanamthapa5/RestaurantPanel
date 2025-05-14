"use client";

import { useState } from "react";
import "./../Foods/FoodList.css";
import { Search, Edit, Trash2, Sheet, AlertTriangle } from "lucide-react";

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
      name: "grilled lemon herb Mediterranean chicken salad",
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
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visibleColumns, setVisibleColumns] = useState({
    name: true,
    type: true,
    status: true,
    price: true,
    action: true,
  });

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

  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }

    const sortedFoods = [...foods].sort((a, b) => {
      if (key === "id" || key === "price") {
        return direction === "ascending" ? a[key] - b[key] : b[key] - a[key];
      } else if (key === "name" || key === "category") {
        const valueA = a[key].toLowerCase();
        valueB = b[key].toLowerCase();
        if (valueA < valueB) return direction === "ascending" ? -1 : 1;
        if (valueA > valueB) return direction === "ascending" ? 1 : -1;
        return 0;
      } else if (key === "recommended" || key === "status") {
        return direction === "ascending"
          ? a[key] === b[key]
            ? 0
            : a[key]
            ? -1
            : 1
          : a[key] === b[key]
          ? 0
          : a[key]
          ? 1
          : -1;
      }
      return 0;
    });

    setFoods(sortedFoods);
    setSortConfig({ key, direction });
  };

  const filteredFoods = foods.filter((food) => {
    const matchesSearch = food.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All categories" ||
      food.category === selectedCategory;
    const matchesFilter =
      selectedFilter === "All" ||
      (selectedFilter === "Recommended" && food.recommended) ||
      (selectedFilter === "Not Recommended" && !food.recommended);
    return matchesSearch && matchesCategory && matchesFilter;
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleColumnToggle = (column) => {
    setVisibleColumns((prev) => ({
      ...prev,
      [column]: !prev[column],
    }));
  };

  // Calculate colSpan based on visible columns
  const visibleColumnCount =
    2 + // SI and Action are always visible
    (visibleColumns.name ? 1 : 0) +
    (visibleColumns.type ? 1 : 0) +
    (visibleColumns.status ? 1 : 0) +
    (visibleColumns.price ? 1 : 0) +
    (visibleColumns.action ? 1 : 0);

  return (
    <div className="FoodList-container">
      <div className="FoodList-header">
        <div className="FoodList-title">
          <h1>Food List</h1>
          <span className="FoodList-count">{filteredFoods.length}</span>
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
              <option>Nepali</option>
              <option>Bengali</option>
            </select>
          </div>

          <div className="FoodList-dropdown">
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="FoodList-filter-select"
            >
              <option>All</option>
              <option>Veg</option>
              <option>Non-Veg</option>
            </select>
          </div>

          <button className="FoodList-columns-btn" onClick={openModal}>
            <Sheet size={18} />
            <span>Columns</span>
          </button>
        </div>
      </div>

      <div className="FoodList-table-container">
        <table className="FoodList-table">
          <thead>
            <tr>
              <th className="FoodList-si-column">
                SI
                <span className="sort-icons">
                  <span
                    className={`sort-icon ${
                      sortConfig.key === "id" &&
                      sortConfig.direction === "ascending"
                        ? "active"
                        : ""
                    }`}
                    onClick={() => handleSort("id")}
                  >
                    ▲
                  </span>
                  <span
                    className={`sort-icon ${
                      sortConfig.key === "id" &&
                      sortConfig.direction === "descending"
                        ? "active"
                        : ""
                    }`}
                    onClick={() => handleSort("id")}
                  >
                    ▼
                  </span>
                </span>
              </th>
              {visibleColumns.name && (
                <th className="FoodList-name-column" onClick={openModal}>
                  Name
                  <span className="sort-icons">
                    <span
                      className={`sort-icon ${
                        sortConfig.key === "name" &&
                        sortConfig.direction === "ascending"
                          ? "active"
                          : ""
                      }`}
                      onClick={() => handleSort("name")}
                    >
                      ▲
                    </span>
                    <span
                      className={`sort-icon ${
                        sortConfig.key === "name" &&
                        sortConfig.direction === "descending"
                          ? "active"
                          : ""
                      }`}
                      onClick={() => handleSort("name")}
                    >
                      ▼
                    </span>
                  </span>
                </th>
              )}
              {visibleColumns.type && (
                <th className="FoodList-category-column" onClick={openModal}>
                  Category
                  <span className="sort-icons">
                    <span
                      className={`sort-icon ${
                        sortConfig.key === "category" &&
                        sortConfig.direction === "ascending"
                          ? "active"
                          : ""
                      }`}
                      onClick={() => handleSort("category")}
                    >
                      ▲
                    </span>
                    <span
                      className={`sort-icon ${
                        sortConfig.key === "category" &&
                        sortConfig.direction === "descending"
                          ? "active"
                          : ""
                      }`}
                      onClick={() => handleSort("category")}
                    >
                      ▼
                    </span>
                  </span>
                </th>
              )}
              {visibleColumns.price && (
                <th className="FoodList-price-column" onClick={openModal}>
                  Price
                  <span className="sort-icons">
                    <span
                      className={`sort-icon ${
                        sortConfig.key === "price" &&
                        sortConfig.direction === "ascending"
                          ? "active"
                          : ""
                      }`}
                      onClick={() => handleSort("price")}
                    >
                      ▲
                    </span>
                    <span
                      className={`sort-icon ${
                        sortConfig.key === "price" &&
                        sortConfig.direction === "descending"
                          ? "active"
                          : ""
                      }`}
                      onClick={() => handleSort("price")}
                    >
                      ▼
                    </span>
                  </span>
                </th>
              )}
              {visibleColumns.status && (
                <th className="FoodList-recommended-column" onClick={openModal}>
                  Recommended
                  <span className="sort-icons">
                    <span
                      className={`sort-icon ${
                        sortConfig.key === "recommended" &&
                        sortConfig.direction === "ascending"
                          ? "active"
                          : ""
                      }`}
                      onClick={() => handleSort("recommended")}
                    >
                      ▲
                    </span>
                    <span
                      className={`sort-icon ${
                        sortConfig.key === "recommended" &&
                        sortConfig.direction === "descending"
                          ? "active"
                          : ""
                      }`}
                      onClick={() => handleSort("recommended")}
                    >
                      ▼
                    </span>
                  </span>
                </th>
              )}
              {visibleColumns.action && (
                <th className="FoodList-status-column" onClick={openModal}>
                  Status
                  <span className="sort-icons">
                    <span
                      className={`sort-icon ${
                        sortConfig.key === "status" &&
                        sortConfig.direction === "ascending"
                          ? "active"
                          : ""
                      }`}
                      onClick={() => handleSort("status")}
                    >
                      ▲
                    </span>
                    <span
                      className={`sort-icon ${
                        sortConfig.key === "status" &&
                        sortConfig.direction === "descending"
                          ? "active"
                          : ""
                      }`}
                      onClick={() => handleSort("status")}
                    >
                      ▼
                    </span>
                  </span>
                </th>
              )}
              <th className="FoodList-action-column">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredFoods.length > 0 ? (
              filteredFoods.map((food) => (
                <tr key={food.id}>
                  <td>{food.id}</td>
                  {visibleColumns.name && (
                    <td className="FoodList-name-cell">
                      <img
                        src={food.image || "/placeholder.svg"}
                        alt={food.name}
                        className="FoodList-image"
                      />
                      <span>{food.name}</span>
                    </td>
                  )}
                  {visibleColumns.type && <td>{food.category}</td>}
                  {visibleColumns.price && <td>{food.price}</td>}
                  {visibleColumns.status && (
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
                  )}
                  {visibleColumns.action && (
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
                  )}
                  <td className="FoodList-action-buttons">
                    <button className="FoodList-edit-btn">
                      <Edit size={16} />
                    </button>
                    <button className="FoodList-delete-btn">
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">
                  <div className="empty-state">
                    <div className="folder-icon">
                      <div className="folder-top"></div>
                      <div className="folder-body">
                        <AlertTriangle className="alert-icon" size={24} />
                      </div>
                    </div>
                    <p className="empty-text">No Data Found</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="FoodList-modal-overlay" onClick={closeModal}>
          <div
            className="FoodList-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Column Visibility</h2>
            <ul className="FoodList-modal-list">
              <li>
                <span>Name</span>
                <label className="FoodList-modal-toggle">
                  <input
                    type="checkbox"
                    checked={visibleColumns.name}
                    onChange={() => handleColumnToggle("name")}
                  />
                  <span className="FoodList-modal-slider"></span>
                </label>
              </li>
              <li>
                <span>Type</span>
                <label className="FoodList-modal-toggle">
                  <input
                    type="checkbox"
                    checked={visibleColumns.type}
                    onChange={() => handleColumnToggle("type")}
                  />
                  <span className="FoodList-modal-slider"></span>
                </label>
              </li>
              <li>
                <span>Status</span>
                <label className="FoodList-modal-toggle">
                  <input
                    type="checkbox"
                    checked={visibleColumns.status}
                    onChange={() => handleColumnToggle("status")}
                  />
                  <span className="FoodList-modal-slider"></span>
                </label>
              </li>
              <li>
                <span>Price</span>
                <label className="FoodList-modal-toggle">
                  <input
                    type="checkbox"
                    checked={visibleColumns.price}
                    onChange={() => handleColumnToggle("price")}
                  />
                  <span className="FoodList-modal-slider"></span>
                </label>
              </li>
              <li>
                <span>Action</span>
                <label className="FoodList-modal-toggle">
                  <input
                    type="checkbox"
                    checked={visibleColumns.action}
                    onChange={() => handleColumnToggle("action")}
                  />
                  <span className="FoodList-modal-slider"></span>
                </label>
              </li>
            </ul>
            <button className="FoodList-modal-close-btn" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodList;

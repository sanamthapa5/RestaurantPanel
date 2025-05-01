"use client";

import { useState } from "react";
import "./Category.css";
import { Search, Settings } from "lucide-react";

const Category = () => {
  const [categories, setCategories] = useState([
    {
      id: 1,
      categoryId: 20,
      name: "Varieties",
      image:
        "https://stackfood-admin.6amtech.com/storage/app/public/category/2021-08-20-611fbfd13f7db.png",
    },
    {
      id: 2,
      categoryId: 19,
      name: "Japanese",
      image:
        "https://stackfood-admin.6amtech.com/storage/app/public/category/2024-12-08-675665d829786.png",
    },
    {
      id: 3,
      categoryId: 18,
      name: "American",
      image:
        "https://stackfood-admin.6amtech.com/storage/app/public/category/2024-12-08-675669f863f91.png",
    },
    {
      id: 4,
      categoryId: 17,
      name: "Italian",
      image:
        "https://stackfood-admin.6amtech.com/storage/app/public/category/2024-12-08-675666e7b0478.png",
    },
    {
      id: 5,
      categoryId: 16,
      name: "Pasta",
      image:
        "https://stackfood-admin.6amtech.com/storage/app/public/category/2021-08-20-611fbfa397c7c.png",
    },
    {
      id: 6,
      categoryId: 15,
      name: "Mexican Food",
      image:
        "https://stackfood-admin.6amtech.com/storage/app/public/category/2021-08-20-611fbf96910eb.png",
    },
    {
      id: 7,
      categoryId: 13,
      name: "Noodles",
      image:
        "https://stackfood-admin.6amtech.com/storage/app/public/category/2021-08-20-611fbf779aef1.png",
    },
    {
      id: 8,
      categoryId: 14,
      name: "Indian",
      image:
        "https://stackfood-admin.6amtech.com/storage/app/public/category/2024-12-08-67566525c9b00.png ",
    },
    {
      id: 9,
      categoryId: 12,
      name: "Kabab & More",
      image:
        "https://stackfood-admin.6amtech.com/storage/app/public/category/2024-12-08-675667296c7a1.png",
    },
    {
      id: 10,
      categoryId: 11,
      name: "Fast Food",
      image:
        "https://stackfood-admin.6amtech.com/storage/app/public/category/2024-12-08-675667296c7a1.png",
    },
    {
      id: 11,
      categoryId: 10,
      name: "Chinese",
      image:
        "https://stackfood-admin.6amtech.com/storage/app/public/category/2024-12-08-6756658b1f5c0.png",
    },
    {
      id: 12,
      categoryId: 9,
      name: "Spainsh",
      image:
        "https://stackfood-admin.6amtech.com/storage/app/public/category/2024-12-08-67566a7c93d7f.png",
    },
    {
      id: 13,
      categoryId: 8,
      name: "French",
      image:
        "https://stackfood-admin.6amtech.com/storage/app/public/category/2024-12-08-67566a7c93d7f.png",
    },
    {
      id: 14,
      categoryId: 7,
      name: "Sea Food",
      image:
        "https://stackfood-admin.6amtech.com/storage/app/public/category/2024-12-08-67566b325c84d.png",
    },
    {
      id: 15,
      categoryId: 6,
      name: "Caribbean",
      image:
        "https://stackfood-admin.6amtech.com/storage/app/public/category/2024-12-08-67566b325c84d.png",
    },
    {
      id: 16,
      categoryId: 5,
      name: "Bengali",
      image:
        "https://stackfood-admin.6amtech.com/storage/app/public/category/2024-12-08-6756689f03060.png",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="category-container">
      <div className="category-header">
        <div className="category-title-section">
          <img
            src="https://stackfood-admin.6amtech.com/public/assets/admin/img/resturant-panel/page-title/category.png"
            className="category-title-section"
          />{" "}
          <h1>Category List</h1>
          <span className="category-count">{categories.length}</span>
        </div>
        <div className="Pending-search-container">
          <div className="Pending-search-input-container">
            <input
              type="text"
              placeholder="Ex : Search by category name.."
              value={searchTerm}
              onChange={handleSearch}
              className="Pending-search-input"
            />
            <button className="Pending-search-button">
              <Search size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="category-table">
        <div className="category-table-header">
          <div className="category-si-column">SI</div>
          <div className="category-image-column">Image</div>
          <div className="category-id-column">Category Id</div>
          <div className="category-name-column">Category Name</div>
        </div>

        <div className="category-table-body">
          {filteredCategories.map((category) => (
            <div className="category-table-row" key={category.id}>
              <div className="category-si-column">{category.id}</div>
              <div className="category-image-column">
                <div
                  className="category-food-image"
                  style={{ backgroundImage: `url(${category.image})` }}
                ></div>
              </div>
              <div className="category-id-column">{category.categoryId}</div>
              <div className="category-name-column">{category.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;

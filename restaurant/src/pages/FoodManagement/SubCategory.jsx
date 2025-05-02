// "use client";

// import { useState } from "react";
// import "./SubCategory.css";
// import { Search } from "lucide-react";

// const SubCategory = () => {
//   const [searchTerm, setSearchTerm] = useState("");

//   // Sample data from the image
//   const subcategories = [
//     { sl: 1, id: 36, category: "Spanish", subCategory: "Soft Drinks" },
//     { sl: 2, id: 35, category: "Spanish", subCategory: "Macchiato" },
//     { sl: 3, id: 34, category: "Spanish", subCategory: "Cappuccino" },
//     { sl: 4, id: 33, category: "Spanish", subCategory: "Robusta" },
//     { sl: 5, id: 32, category: "Spanish", subCategory: "Black Coffee" },
//     { sl: 6, id: 31, category: "French", subCategory: "Red Velvet" },
//     { sl: 7, id: 30, category: "French", subCategory: "Yellow Butter" },
//     { sl: 8, id: 29, category: "French", subCategory: "Pound Cake" },
//     { sl: 9, id: 28, category: "Bengali", subCategory: "Pimento Cheese" },
//     { sl: 10, id: 27, category: "Bengali", subCategory: "Nutburger" },
//     { sl: 11, id: 26, category: "Bengali", subCategory: "Theta Burger" },
//     { sl: 12, id: 25, category: "Bengali", subCategory: "Steamed Cheese" },
//     { sl: 13, id: 24, category: "Bengali", subCategory: "Kuble Burger" },
//   ];

//   // Filter subcategories based on search term
//   const filteredSubcategories = subcategories.filter((item) =>
//     item.subCategory.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="subcategory-container">
//       <div className="subcategory-header">
//         <div className="subcategory-title-container">
//           <div className="subcategory-icon-box">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <rect x="3" y="3" width="7" height="7"></rect>
//               <rect x="14" y="3" width="7" height="7"></rect>
//               <rect x="14" y="14" width="7" height="7"></rect>
//               <rect x="3" y="14" width="7" height="7"></rect>
//             </svg>
//           </div>
//           <h2>Sub Category List</h2>
//           {/* <span className="subcategory-count-badge">13</span> */}
//           <span className="subcategory-count-badge">
//             {filteredSubcategories.length}
//           </span>
//         </div>
//         <div className="Pending-search-container">
//           <div className="Pending-search-input-container">
//             <input
//               type="text"
//               placeholder="Ex : Search by category name.."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="Pending-search-input"
//             />
//             <button className="Pending-search-button">
//               <Search size={18} />
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="subcategory-table-container">
//         <table className="subcategory-table">
//           <thead>
//             <tr>
//               <th>SI</th>
//               <th>Id</th>
//               <th>Category</th>
//               <th>Sub Category</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredSubcategories.map((item) => (
//               <tr key={item.sl}>
//                 <td>{item.sl}</td>
//                 <td>{item.id}</td>
//                 <td>{item.category}</td>
//                 <td>{item.subCategory}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default SubCategory;
"use client";

import { useState } from "react";
import "./SubCategory.css";
import { Search, AlertTriangle } from "lucide-react";

const SubCategory = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Sample data from the image
  const subcategories = [
    { sl: 1, id: 36, category: "Spanish", subCategory: "Soft Drinks" },
    { sl: 2, id: 35, category: "Spanish", subCategory: "Macchiato" },
    { sl: 3, id: 34, category: "Spanish", subCategory: "Cappuccino" },
    { sl: 4, id: 33, category: "Spanish", subCategory: "Robusta" },
    { sl: 5, id: 32, category: "Spanish", subCategory: "Black Coffee" },
    { sl: 6, id: 31, category: "French", subCategory: "Red Velvet" },
    { sl: 7, id: 30, category: "French", subCategory: "Yellow Butter" },
    { sl: 8, id: 29, category: "French", subCategory: "Pound Cake" },
    { sl: 9, id: 28, category: "Bengali", subCategory: "Pimento Cheese" },
    { sl: 10, id: 27, category: "Bengali", subCategory: "Nutburger" },
    { sl: 11, id: 26, category: "Bengali", subCategory: "Theta Burger" },
    { sl: 12, id: 25, category: "Bengali", subCategory: "Steamed Cheese" },
    { sl: 13, id: 24, category: "Bengali", subCategory: "Kuble Burger" },
  ];

  // Filter subcategories based on search term
  const filteredSubcategories = subcategories.filter((item) =>
    item.subCategory.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="subcategory-container">
      <div className="subcategory-header">
        <div className="subcategory-title-container">
          <div className="subcategory-icon-box">
            <img
              src="https://stackfood-admin.6amtech.com/public/assets/admin/img/resturant-panel/page-title/category.png"
              className="category-title-section"
            />{" "}
          </div>
          <h2>Sub Category List</h2>
          <span className="subcategory-count-badge">
            {filteredSubcategories.length}
          </span>
        </div>
        <div className="Pending-search-container">
          <div className="Pending-search-input-container">
            <input
              type="text"
              placeholder="Ex : Search by category name.."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="Pending-search-input"
            />
            <button className="Pending-search-button">
              <Search size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="subcategory-table-container">
        <table className="subcategory-table">
          <thead>
            <tr>
              <th>SI</th>
              <th>Id</th>
              <th>Category</th>
              <th>Sub Category</th>
            </tr>
          </thead>
          <tbody>
            {filteredSubcategories.length > 0 ? (
              filteredSubcategories.map((item) => (
                <tr key={item.sl}>
                  <td>{item.sl}</td>
                  <td>{item.id}</td>
                  <td>{item.category}</td>
                  <td>{item.subCategory}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">
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
    </div>
  );
};

export default SubCategory;

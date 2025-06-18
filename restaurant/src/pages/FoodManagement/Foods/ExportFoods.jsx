// "use client";

// import { useState } from "react";
// import "./ExportFoods.css";

// const ExportFoods = () => {
//   const [selectedType, setSelectedType] = useState("All data");
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [fromDate, setFromDate] = useState("");
//   const [toDate, setToDate] = useState("");
//   const [startId, setStartId] = useState("");
//   const [endId, setEndId] = useState("");

//   const dataTypes = ["All data", "Data Wise", "ID Wise"];

//   const handleTypeSelect = (type) => {
//     setSelectedType(type);
//     setIsDropdownOpen(false);
//     // Reset fields when type changes
//     if (type !== "Data Wise") {
//       setFromDate("");
//       setToDate("");
//     }
//     if (type !== "ID Wise") {
//       setStartId("");
//       setEndId("");
//     }
//   };

//   const handleReset = () => {
//     setSelectedType("All data");
//     setFromDate("");
//     setToDate("");
//     setStartId("");
//     setEndId("");
//   };

//   const handleSubmit = () => {
//     console.log("Exporting:", {
//       selectedType,
//       fromDate,
//       toDate,
//       startId,
//       endId,
//     });
//     // Add export logic here
//   };

//   return (
//     <div className="ExportFoods-export-foods-container">
//       <header className="ExportFoods-header">
//         <div className="ExportFoods-header-content">
//           <div className="ExportFoods-logo">
//             <span className="ExportFoods-logo-icon">🍽️</span>
//             <h1>Export Foods</h1>
//           </div>
//         </div>
//       </header>

//       <main className="ExportFoods-main-content">
//         <div className="ExportFoods-steps-container">
//           <div className="ExportFoods-step">
//             <div className="ExportFoods-step-header">
//               <span className="ExportFoods-step-number">STEP 1</span>
//               <span className="ExportFoods-step-title">Select Data Type</span>
//             </div>
//           </div>
//           <div className="ExportFoods-step">
//             <div className="ExportFoods-step-header">
//               <span className="ExportFoods-step-number">STEP 2</span>
//               <span className="ExportFoods-step-title">
//                 Select Data Range by Date and Export
//               </span>
//             </div>
//           </div>
//         </div>

//         <div className="ExportFoods-form-section">
//           <div className="ExportFoods-filter-container">
//             <div className="ExportFoods-form-group">
//               <label className="ExportFoods-form-label">Type</label>
//               <div className="ExportFoods-dropdown-container">
//                 <button
//                   className="ExportFoods-dropdown-button"
//                   onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                 >
//                   {selectedType}
//                   <span
//                     className={`ExportFoods-dropdown-arrow ${
//                       isDropdownOpen ? "ExportFoods-open" : ""
//                     }`}
//                   >
//                     ▼
//                   </span>
//                 </button>
//                 {isDropdownOpen && (
//                   <div className="ExportFoods-dropdown-menu">
//                     {dataTypes.map((type) => (
//                       <button
//                         key={type}
//                         className={`ExportFoods-dropdown-item ${
//                           selectedType === type ? "ExportFoods-selected" : ""
//                         }`}
//                         onClick={() => handleTypeSelect(type)}
//                       >
//                         {type}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>
//             {selectedType === "Data Wise" && (
//               <>
//                 <div className="ExportFoods-form-group">
//                   <label className="ExportFoods-form-label">Start Date</label>
//                   <input
//                     type="date"
//                     className="ExportFoods-date-input"
//                     value={fromDate}
//                     onChange={(e) => setFromDate(e.target.value)}
//                   />
//                 </div>
//                 <div className="ExportFoods-form-group">
//                   <label className="ExportFoods-form-label">End Date</label>
//                   <input
//                     type="date"
//                     className="ExportFoods-date-input"
//                     value={toDate}
//                     onChange={(e) => setToDate(e.target.value)}
//                   />
//                 </div>
//               </>
//             )}
//             {selectedType === "ID Wise" && (
//               <>
//                 <div className="ExportFoods-form-group">
//                   <label className="ExportFoods-form-label">Start ID</label>
//                   <input
//                     type="text"
//                     className="ExportFoods-form-input"
//                     placeholder="Enter Start ID"
//                     value={startId}
//                     onChange={(e) => setStartId(e.target.value)}
//                   />
//                 </div>
//                 <div className="ExportFoods-form-group">
//                   <label className="ExportFoods-form-label">End ID</label>
//                   <input
//                     type="text"
//                     className="ExportFoods-form-input"
//                     placeholder="Enter End ID"
//                     value={endId}
//                     onChange={(e) => setEndId(e.target.value)}
//                   />
//                 </div>
//               </>
//             )}
//           </div>
//         </div>

//         <div className="ExportFoods-action-buttons">
//           <button className="ExportFoods-reset-btn" onClick={handleReset}>
//             Reset
//           </button>
//           <button className="ExportFoods-submit-btn" onClick={handleSubmit}>
//             Submit
//           </button>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default ExportFoods;

"use client";

import { useState, useEffect, useRef } from "react";
import "./ExportFoods.css";

const ExportFoods = () => {
  const [selectedType, setSelectedType] = useState("All data");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [startId, setStartId] = useState("");
  const [endId, setEndId] = useState("");

  const dropdownRef = useRef(null); // ref to disable  outside click

  const dataTypes = ["All data", "Data Wise", "ID Wise"];

  const handleTypeSelect = (type) => {
    setSelectedType(type);
    setIsDropdownOpen(false);
    if (type !== "Data Wise") {
      setFromDate("");
      setToDate("");
    }
    if (type !== "ID Wise") {
      setStartId("");
      setEndId("");
    }
  };

  const handleReset = () => {
    setSelectedType("All data");
    setFromDate("");
    setToDate("");
    setStartId("");
    setEndId("");
  };

  const handleSubmit = () => {
    console.log("Exporting:", {
      selectedType,
      fromDate,
      toDate,
      startId,
      endId,
    });
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="ExportFoods-export-foods-container">
      <header className="ExportFoods-header">
        <div className="ExportFoods-header-content">
          <div className="ExportFoods-logo">
            <span className="ExportFoods-logo-icon">
              <img
                src="https://stackfood-admin.6amtech.com/public/assets/admin/img/export.png"
                alt=""
              />
            </span>
            <h1>Export Foods</h1>
          </div>
        </div>
      </header>

      <main className="ExportFoods-main-content">
        <div className="ExportFoods-steps-container">
          <div className="ExportFoods-step">
            <div className="ExportFoods-step-header">
              <span className="ExportFoods-step-number">STEP 1</span>
              <span className="ExportFoods-step-title">Select Data Type</span>
            </div>
          </div>
          <div className="ExportFoods-step">
            <div className="ExportFoods-step-header">
              <span className="ExportFoods-step-number">STEP 2</span>
              <span className="ExportFoods-step-title">
                Select Data Range by Date and Export
              </span>
            </div>
          </div>
        </div>

        <div className="ExportFoods-form-section">
          <div className="ExportFoods-filter-container">
            <div className="ExportFoods-form-group">
              <label className="ExportFoods-form-label">Type</label>
              <div className="ExportFoods-dropdown-container" ref={dropdownRef}>
                <button
                  className="ExportFoods-dropdown-button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  {selectedType}
                  <span
                    className={`ExportFoods-dropdown-arrow ${
                      isDropdownOpen ? "ExportFoods-open" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>
                {isDropdownOpen && (
                  <div className="ExportFoods-dropdown-menu">
                    {dataTypes.map((type) => (
                      <button
                        key={type}
                        className={`ExportFoods-dropdown-item ${
                          selectedType === type ? "ExportFoods-selected" : ""
                        }`}
                        onClick={() => handleTypeSelect(type)}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {selectedType === "Data Wise" && (
              <>
                <div className="ExportFoods-form-group">
                  <label className="ExportFoods-form-label">Start Date</label>
                  <input
                    type="date"
                    className="ExportFoods-date-input"
                    value={fromDate}
                    onChange={(e) => setFromDate(e.target.value)}
                  />
                </div>
                <div className="ExportFoods-form-group">
                  <label className="ExportFoods-form-label">End Date</label>
                  <input
                    type="date"
                    className="ExportFoods-date-input"
                    value={toDate}
                    onChange={(e) => setToDate(e.target.value)}
                  />
                </div>
              </>
            )}

            {selectedType === "ID Wise" && (
              <>
                <div className="ExportFoods-form-group">
                  <label className="ExportFoods-form-label">Start ID</label>
                  <input
                    type="text"
                    className="ExportFoods-form-input"
                    placeholder="Enter Start ID"
                    value={startId}
                    onChange={(e) => setStartId(e.target.value)}
                  />
                </div>
                <div className="ExportFoods-form-group">
                  <label className="ExportFoods-form-label">End ID</label>
                  <input
                    type="text"
                    className="ExportFoods-form-input"
                    placeholder="Enter End ID"
                    value={endId}
                    onChange={(e) => setEndId(e.target.value)}
                  />
                </div>
              </>
            )}
          </div>
        </div>

        <div className="ExportFoods-action-buttons">
          <button className="ExportFoods-reset-btn" onClick={handleReset}>
            Reset
          </button>
          <button className="ExportFoods-submit-btn" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </main>
    </div>
  );
};

export default ExportFoods;

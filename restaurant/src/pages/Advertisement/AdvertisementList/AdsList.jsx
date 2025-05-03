// "use client";

// import { useState } from "react";
// import "./AdsList.css";
// import { Search, MoreVertical, Plus } from "lucide-react";

// const AdsList = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filterValue, setFilterValue] = useState("All Ads");

//   const ads = [
//     {
//       id: 1,
//       adsId: "1000003",
//       adsType: "Restaurant Promotion",
//       adsTitle: "Taste the Flavor! For limited time only",
//       duration: "03 Jul 2024 - 05 Mar 2025",
//       status: "Expired",
//     },
//     {
//       id: 2,
//       adsId: "1000000",
//       adsType: "Restaurant Promotion",
//       adsTitle: "Incredible Savings! Don't miss out",
//       duration: "09 Dec 2024 - 13 Jun 2025",
//       status: "Running",
//     },
//   ];

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const handleFilterChange = (e) => {
//     setFilterValue(e.target.value);
//   };

//   return (
//     <div className="AdsList-container">
//       <div className="AdsList-header">
//         <div className="AdsList-title">
//           <span className="AdsList-icon">📢</span>
//           <h1>Ads List</h1>
//           <span className="AdsList-badge">{ads.length}</span>
//         </div>
//         <button className="Pending-new-ad-button">
//           <Plus size={20} />
//           <span>New Advertisement</span>
//         </button>
//       </div>
//       <div className="Pending-content-wrapper">
//         <div className="AdsList-search-container">
//           <div className="AdsList-search-box">
//             <input
//               type="text"
//               placeholder="Search by ads ID or restaurant"
//               value={searchQuery}
//               onChange={handleSearchChange}
//             />
//             <button className="AdsList-search-btn">
//               <Search size={20} />
//             </button>
//           </div>
//           <div className="AdsList-filter-dropdown">
//             <select value={filterValue} onChange={handleFilterChange}>
//               <option>All Ads</option>
//               <option>Running</option>
//               <option>Approved</option>
//               <option>Expired</option>
//               <option>Denied</option>
//             </select>
//           </div>
//         </div>

//         <div className="AdsList-table-container">
//           <table>
//             <thead>
//               <tr>
//                 <th>SI</th>
//                 <th>Ads ID</th>
//                 <th>Ads Type</th>
//                 <th>Ads Title</th>
//                 <th>Duration</th>
//                 <th>Status</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {ads.map((ad) => (
//                 <tr key={ad.id}>
//                   <td>{ad.id}</td>
//                   <td className="AdsList-ads-id">{ad.adsId}</td>
//                   <td>{ad.adsType}</td>
//                   <td>{ad.adsTitle}</td>
//                   <td>{ad.duration}</td>
//                   <td>
//                     <span
//                       className={`AdsList-status-badge ${ad.status.toLowerCase()}`}
//                     >
//                       {ad.status}
//                     </span>
//                   </td>
//                   <td>
//                     <button className="AdsList-action-btn">
//                       <MoreVertical size={18} />
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdsList;

"use client";

import { useState } from "react";
import "./AdsList.css";
import { Search, MoreVertical, Plus, AlertTriangle } from "lucide-react";

const AdsList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterValue, setFilterValue] = useState("All Ads");

  const ads = [
    {
      id: 1,
      adsId: "1000003",
      adsType: "Restaurant Promotion",
      adsTitle: "Taste the Flavor! For limited time only",
      duration: "03 Jul 2024 - 05 Mar 2025",
      status: "Expired",
    },
    {
      id: 2,
      adsId: "1000000",
      adsType: "Restaurant Promotion",
      adsTitle: "Incredible Savings! Don't miss out",
      duration: "09 Dec 2024 - 13 Jun 2025",
      status: "Running",
    },
  ];

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterValue(e.target.value);
  };

  // Filter ads based on search query and filter value
  const filteredAds = ads.filter((ad) => {
    const matchesSearch =
      ad.adsId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ad.adsTitle.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter =
      filterValue === "All Ads" || ad.status === filterValue;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="AdsList-container">
      <div className="AdsList-header">
        <div className="AdsList-title">
          <span className="AdsList-icon">📢</span>
          <h1>Ads List</h1>
          <span className="AdsList-badge">{filteredAds.length}</span>
        </div>
        <button className="Pending-new-ad-button">
          <Plus size={20} />
          <span>New Advertisement</span>
        </button>
      </div>
      <div className="Pending-content-wrapper">
        <div className="AdsList-search-container">
          <div className="AdsList-search-box">
            <input
              type="text"
              placeholder="Search by ads ID or restaurant"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button className="AdsList-search-btn">
              <Search size={20} />
            </button>
          </div>
          <div className="AdsList-filter-dropdown">
            <select value={filterValue} onChange={handleFilterChange}>
              <option>All Ads</option>
              <option>Running</option>
              <option>Approved</option>
              <option>Expired</option>
              <option>Denied</option>
            </select>
          </div>
        </div>

        <div className="AdsList-table-container">
          <table>
            <thead>
              <tr>
                <th>SI</th>
                <th>Ads ID</th>
                <th>Ads Type</th>
                <th>Ads Title</th>
                <th>Duration</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredAds.length > 0 ? (
                filteredAds.map((ad) => (
                  <tr key={ad.id}>
                    <td>{ad.id}</td>
                    <td className="AdsList-ads-id">{ad.adsId}</td>
                    <td>{ad.adsType}</td>
                    <td>{ad.adsTitle}</td>
                    <td>{ad.duration}</td>
                    <td>
                      <span
                        className={`AdsList-status-badge ${ad.status.toLowerCase()}`}
                      >
                        {ad.status}
                      </span>
                    </td>
                    <td>
                      <button className="AdsList-action-btn">
                        <MoreVertical size={18} />
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
      </div>
    </div>
  );
};

export default AdsList;
